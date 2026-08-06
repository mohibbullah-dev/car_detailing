import ProcessBackground from "./ProcessBackground";
import ProcessIntro from "./ProcessIntro";
import ProcessSteps from "./ProcessSteps";
import ProcessCTA from "./ProcessCTA";

export default function ProcessSection({ onOpenBooking }) {
  return (
    <section
      id="process"
      className="process-section relative overflow-hidden bg-[#050505] py-20 font-[Inter,system-ui,sans-serif] sm:py-24 lg:py-28"
      aria-labelledby="process-heading"
    >
      <ProcessBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div id="process-heading">
          <ProcessIntro />
        </div>
        <ProcessSteps />
        <ProcessCTA onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}
