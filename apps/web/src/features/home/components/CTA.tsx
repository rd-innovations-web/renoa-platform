import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "../../../components/ui/Section";

export function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] bg-[#e7e0d4] px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Start something beautiful
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            Tell us about your space.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
            Share your requirements, measurements and ideas. Our team will
            get back to you to understand the project.
          </p>

          <Link
            to="/start-project"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm text-white"
          >
            Start your project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </Section>
  );
}