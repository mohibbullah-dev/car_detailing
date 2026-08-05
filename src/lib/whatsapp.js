export const generateWhatsAppLink = (
  serviceName = "",
  price = "",
  business = {},
) => {
  const digits = String(
    business.whatsappNumber || business.phoneTel || "",
  ).replace(/\D/g, "");

  const baseUrl = `https://wa.me/${digits}`;
  const name = business.name || "Royal Shine Detailing";

  let message = `Hi ${name}! 🚗 `;

  if (serviceName) {
    message += `I'm interested in the *${serviceName}* package (${price}). `;
  } else {
    message += `I'd like to book an appointment for a professional detail. `;
  }

  message += `Could you let me know your next available slot?`;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
