import React, { createContext, useContext, useState, useEffect } from "react";
import { tokenStorage } from "../lib/storage";

const BusinessStatusContext = createContext();

export const BusinessStatusProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [reason, setReason] = useState("");

  // Load status from Database on mount (Does NOT require a token)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/api/settings/status`)
      .then((res) => res.json())
      .then((data) => {
        setIsClosed(data.isClosed);
        setReason(data.reason || "We are currently fully booked.");
      })
      .catch((err) => console.error("Error loading status:", err));
  }, []);

  const toggleStatus = async (newReason) => {
    const token = tokenStorage.get();

    // Check if token exists before even trying to fetch
    if (!token) {
      alert("You are not logged in. Please go to the login page.");
      return;
    }

    const nextState = !isClosed;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/api/settings/toggle`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ensure "Bearer " is present
          },
          body: JSON.stringify({ isClosed: nextState, reason: newReason }),
        },
      );

      if (res.ok) {
        setIsClosed(nextState);
        setReason(newReason);
      } else {
        // Show the specific error code to help debugging
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
    <BusinessStatusContext.Provider value={{ isClosed, reason, toggleStatus }}>
      {children}
    </BusinessStatusContext.Provider>
  );
};

export const useBusinessStatus = () => useContext(BusinessStatusContext);
