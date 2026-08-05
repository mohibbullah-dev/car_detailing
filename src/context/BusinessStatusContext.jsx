import React, { createContext, useContext, useState, useEffect } from "react";
import { tokenStorage } from "../lib/storage";
import { API_BASE } from "../lib/apiClient";
import { isSupabaseMode } from "../lib/supabase";
import { sbGetSettings, sbSaveSettings } from "../lib/supabaseData";

const BusinessStatusContext = createContext();

export const BusinessStatusProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [reason, setReason] = useState("");
  const [statusLoaded, setStatusLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        if (isSupabaseMode) {
          const data = await sbGetSettings();
          setIsClosed(!!data.isClosed);
          setReason(data.reason || "We are currently fully booked.");
        } else {
          const res = await fetch(`${API_BASE}/api/settings/status`);
          if (!res.ok) throw new Error(`Status ${res.status}`);
          const data = await res.json();
          setIsClosed(!!data.isClosed);
          setReason(data.reason || "We are currently fully booked.");
        }
      } catch (err) {
        console.warn("Business status unavailable:", err);
      } finally {
        setStatusLoaded(true);
      }
    };
    load();
  }, []);

  const toggleStatus = async (newReason) => {
    const token = tokenStorage.get();
    if (!token) {
      alert("You are not logged in. Please go to the login page.");
      return;
    }

    const nextState = !isClosed;
    const payload = {
      isClosed: nextState,
      reason: newReason || "We are currently fully booked.",
    };

    try {
      if (isSupabaseMode) {
        await sbSaveSettings(payload);
        setIsClosed(nextState);
        setReason(payload.reason);
        return;
      }

      const res = await fetch(`${API_BASE}/api/settings/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsClosed(nextState);
        setReason(payload.reason);
      } else {
        const errorData = await res.json().catch(() => ({}));
        alert(
          `Action failed (Error ${res.status}): ${errorData.message || "Please log in again."}`,
        );
      }
    } catch (err) {
      console.error("Toggle failed", err);
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <BusinessStatusContext.Provider
      value={{ isClosed, reason, toggleStatus, statusLoaded }}
    >
      {children}
    </BusinessStatusContext.Provider>
  );
};

export const useBusinessStatus = () => useContext(BusinessStatusContext);
