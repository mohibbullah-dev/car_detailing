import React, { createContext, useContext, useState, useEffect } from "react";
import { tokenStorage } from "../lib/storage";

const BusinessStatusContext = createContext();

export const BusinessStatusProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [reason, setReason] = useState("");

  // Load status from Database on mount (Fixes Incognito/Refresh)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/settings/status`)
      .then((res) => res.json())
      .then((data) => {
        setIsClosed(data.isClosed);
        setReason(data.reason || "We are currently fully booked.");
      })
      .catch((err) => console.error("Error loading status:", err));
  }, []);

  const toggleStatus = async (newReason) => {
    const token = tokenStorage.get();
    const nextState = !isClosed;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/settings/toggle`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ isClosed: nextState, reason: newReason }),
        },
      );

      if (res.ok) {
        setIsClosed(nextState);
        setReason(newReason);
      } else {
        alert("Action failed. Please log in again.");
      }
    } catch (err) {
      console.error("Toggle failed", err);
    }
  };

  return (
    <BusinessStatusContext.Provider value={{ isClosed, reason, toggleStatus }}>
      {children}
    </BusinessStatusContext.Provider>
  );
};

export const useBusinessStatus = () => useContext(BusinessStatusContext);
