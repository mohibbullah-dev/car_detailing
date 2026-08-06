import React, { createContext, useContext, useState, useEffect } from "react";
import { tokenStorage } from "../lib/storage";
import { API_BASE, preferLocalBackend } from "../lib/apiClient";
import { isSupabaseMode } from "../lib/supabase";
import { sbGetSettings, sbSaveSettings } from "../lib/supabaseData";

const BusinessStatusContext = createContext();

async function postToggle(url, token, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || `Toggle failed (${res.status})`);
  }
  return data;
}

export const BusinessStatusProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [reason, setReason] = useState("");
  const [statusLoaded, setStatusLoaded] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [toggleError, setToggleError] = useState("");

  const loadStatus = async () => {
    try {
      if (preferLocalBackend()) {
        const res = await fetch(`${API_BASE}/api/settings/status`);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        setIsClosed(!!data.isClosed);
        setReason(data.reason || "We are currently fully booked.");
        return;
      }

      if (isSupabaseMode) {
        try {
          const res = await fetch(`/api/settings/status?t=${Date.now()}`, {
            cache: "no-store",
          });
          if (res.ok) {
            const data = await res.json();
            setIsClosed(!!data.isClosed);
            setReason(data.reason || "We are currently fully booked.");
            return;
          }
        } catch {
          /* public JSON fallback */
        }
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

    const prevClosed = isClosed;
    const prevReason = reason;
    setIsClosed(nextState);
    setReason(payload.reason);
    setToggling(true);
    setToggleError("");

    try {
      if (preferLocalBackend()) {
        await postToggle(`${API_BASE}/api/settings/toggle`, token, payload);
        return;
      }

      // Vercel same-origin serverless (service role)
      try {
        await postToggle("/api/settings/toggle", token, payload);
        return;
      } catch (err) {
        // Local vite has no /api — fall through to supabase helper
        if (!String(err.message || "").includes("404")) {
          // still try sbSaveSettings which may proxy via /api/admin/json in PROD
        }
      }

      if (isSupabaseMode) {
        await sbSaveSettings(payload);
        return;
      }

      throw new Error("Could not update status.");
    } catch (err) {
      setIsClosed(prevClosed);
      setReason(prevReason);
      console.error("Toggle failed", err);
      const msg = String(err?.message || err);
      setToggleError(msg);
      alert(msg || "Could not update status.");
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
