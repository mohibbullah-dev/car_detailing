import React, { createContext, useContext, useState, useEffect } from "react";
import { tokenStorage } from "../lib/storage";
import { API_BASE } from "../lib/apiClient";

const BusinessStatusContext = createContext();

export const BusinessStatusProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [reason, setReason] = useState("");
  const [statusLoaded, setStatusLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/settings/status`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setIsClosed(!!data.isClosed);
        setReason(data.reason || "We are currently fully booked.");
      })
      .catch((err) => {
        console.warn("Business status unavailable:", err);
      })
      .finally(() => setStatusLoaded(true));
  }, []);

  const toggleStatus = async (newReason) => {
    const token = tokenStorage.get();

    if (!token) {
      alert("You are not logged in. Please go to the login page.");
      return;
    }

    const nextState = !isClosed;

    try {
      const res = await fetch(`${API_BASE}/api/settings/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isClosed: nextState, reason: newReason }),
      });

      if (res.ok) {
        setIsClosed(nextState);
        setReason(newReason);
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
