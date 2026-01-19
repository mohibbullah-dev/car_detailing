// lib/whatsapp.js
import { business } from "../data/business";

export const generateWhatsAppLink = (serviceName = "", price = "") => {
  const baseUrl = `https://wa.me/${business.phoneTel.replace(/\s+/g, "")}`;

  // Custom message logic
  let message = `Hi ${business.name}! 🚗 `;

  if (serviceName) {
    message += `I'm interested in the *${serviceName}* package (${price}). `;
  } else {
    message += `I'd like to book an appointment for a professional detail. `;
  }

  message += `Could you let me know your next available slot?`;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
