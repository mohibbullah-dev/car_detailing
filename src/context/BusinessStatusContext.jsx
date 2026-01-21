import React, { createContext, useContext, useState, useEffect } from "react";

const BusinessStatusContext = createContext();

export const BusinessStatusProvider = ({ children }) => {
  // Initial state: Open by default
  const [status, setStatus] = useState({
    isClosed: false,
    reason: "We are currently fully booked. Please check back later!",
  });

  // Sync with LocalStorage so it remembers the setting on refresh
  useEffect(() => {
    const savedStatus = localStorage.getItem("business_status");
    if (savedStatus) setStatus(JSON.parse(savedStatus));
  }, []);

  const toggleStatus = (newReason = "") => {
    const updatedStatus = {
      isClosed: !status.isClosed,
      reason: newReason || status.reason,
    };
    setStatus(updatedStatus);
    localStorage.setItem("business_status", JSON.stringify(updatedStatus));
  };

  return (
    <BusinessStatusContext.Provider value={{ ...status, toggleStatus }}>
      {children}
    </BusinessStatusContext.Provider>
  );
};

export const useBusinessStatus = () => useContext(BusinessStatusContext);
