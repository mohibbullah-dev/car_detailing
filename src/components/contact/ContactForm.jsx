import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useBusiness } from "../../context/SiteContentContext";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  message: "",
};

export default function ContactForm() {
  const business = useBusiness();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const detailBlock =
      `\n\n--- Contact Form ---` +
      `\nName: ${form.name}` +
      `\nEmail: ${form.email}` +
      `\nPhone: ${form.phone}` +
      `\nVehicle: ${form.vehicle}` +
      `\nMessage: ${form.message}`;

    const message =
      `Hi ${business.name}! I have a question.` + detailBlock;

    const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card relative h-full overflow-hidden p-6 sm:p-8 lg:p-10"
    >
      <div
        className="contact-form-brand-bar absolute inset-x-0 top-0 h-1.5"
        aria-hidden="true"
      />

      <div className="mb-8">
        <h3 className="font-hero-display text-2xl uppercase leading-none tracking-[-0.02em] text-white sm:text-3xl">
          Send Us a Message
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-zinc-500">
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="contact-input"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="contact-input"
          />
          <input
            type="text"
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            placeholder="Vehicle Make/Model"
            className="contact-input"
          />
        </div>

        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="contact-input min-h-[140px] resize-y"
        />

        <button
          type="submit"
          className="hero-primary-btn group mt-2 inline-flex h-16 w-full items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300"
        >
          Send Message
          <ChevronRight
            size={16}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>

        {submitted && (
          <p className="text-center text-[12px] text-[#E10600]" role="status">
            Message sent! We&apos;ll reply within 24 hours.
          </p>
        )}
      </form>
    </motion.div>
  );
}
