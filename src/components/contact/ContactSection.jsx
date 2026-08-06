import ContactBackground from "./ContactBackground";
import ContactIntro from "./ContactIntro";
import ContactInfoGrid from "./ContactInfoGrid";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import ContactFeaturesBar from "./ContactFeaturesBar";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section relative min-h-[100svh] overflow-hidden bg-[#050505] py-20 font-[Inter,system-ui,sans-serif] sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <ContactBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <ContactIntro />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="flex flex-col gap-4 lg:col-span-5 xl:col-span-5">
            <ContactInfoGrid />
            <ContactMap />
          </div>

          <div className="lg:col-span-7 xl:col-span-7">
            <ContactForm />
          </div>
        </div>

        <ContactFeaturesBar />
      </div>
    </section>
  );
}
