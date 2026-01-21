import React, { createContext, useContext, useState, useEffect } from "react";

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
        setReason(data.reason);
      });
  }, []);

  const toggleStatus = async (newReason) => {
    const nextState = !isClosed;
    // Save to Database
    await fetch(`${API_URL}/settings/toggle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isClosed: nextState, reason: newReason }),
    });

    setIsClosed(nextState);
    setReason(newReason);
  };

  return (
    <BusinessStatusContext.Provider value={{ isClosed, reason, toggleStatus }}>
      {children}
    </BusinessStatusContext.Provider>
  );
};

export const useBusinessStatus = () => useContext(BusinessStatusContext);
