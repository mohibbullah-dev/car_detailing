import React, { createContext, useContext, useState, useEffect } from "react";
import { tokenStorage } from "../lib/storage";
import { API_BASE, useBackendWrites } from "../lib/apiClient";
import { isSupabaseMode } from "../lib/supabase";
import { sbGetSettings, sbSaveSettings } from "../lib/supabaseData";

const BusinessStatusContext = createContext();

export const BusinessStatusProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [reason, setReason] = useState("");
  const [statusLoaded, setStatusLoaded] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [toggleError, setToggleError] = useState("");

  const loadStatus = async () => {
    try {
      if (useBackendWrites) {
        const res = await fetch(`${API_BASE}/api/settings/status`);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        setIsClosed(!!data.isClosed);
        setReason(data.reason || "We are currently fully booked.");
        return;
      }
      if (isSupabaseMode) {
        const data = await sbGetSettings();
        setIsClosed(!!data.isClosed);
        setReason(data.reason || "We are currently fully booked.");
      }
    } catch (err) {
      console.warn("Business status unavailable:", err);
    } finally {
      setStatusLoaded(true);
    }
  };

  useEffect(() => {
    loadStatus();
  }, []);

  const toggleStatus = async (newReason) => {
    const token = tokenStorage.get();
    if (!token) {
      setToggleError("Not logged in — open /admin/login");
      alert("You are not logged in. Please go to the login page.");
      return;
    }

    const nextState = !isClosed;
    const payload = {
      isClosed: nextState,
      reason: newReason || reason || "We are currently fully booked.",
    };

    // Optimistic UI so the toggle feels instant
    const prevClosed = isClosed;
    const prevReason = reason;
    setIsClosed(nextState);
    setReason(payload.reason);
    setToggling(true);
    setToggleError("");

    try {
      if (useBackendWrites) {
        const res = await fetch(`${API_BASE}/api/settings/toggle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(
            errorData.message ||
              `Action failed (${res.status}). Log out, log in again, keep backend on :8080.`,
          );
        }
        return;
      }

      if (isSupabaseMode) {
        await sbSaveSettings(payload);
        return;
      }

      throw new Error("No write target configured (API or Supabase).");
    } catch (err) {
      // Rollback
      setIsClosed(prevClosed);
      setReason(prevReason);
      console.error("Toggle failed", err);
      const msg = String(err?.message || err);
      setToggleError(msg);
      if (msg.toLowerCase().includes("row-level security")) {
        alert(
          "Storage permission blocked. Start backend (car_detailling_backend → npm run dev) and re-login.",
        );
      } else if (
        msg.toLowerCase().includes("invalid token") ||
        msg.includes("401")
      ) {
        alert("Session expired. Log out and log in again, then retry Open/Close.");
      } else {
        alert(msg || "Could not update status.");
      }
    } finally {
      setToggling(false);
    }
  };

  return (
    <BusinessStatusContext.Provider
      value={{
        isClosed,
        reason,
        toggleStatus,
        statusLoaded,
        toggling,
        toggleError,
        refreshStatus: loadStatus,
      }}
    >
      {children}
    </BusinessStatusContext.Provider>
  );
};

export const useBusinessStatus = () => useContext(BusinessStatusContext);
