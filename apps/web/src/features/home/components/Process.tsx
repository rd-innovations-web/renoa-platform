import { Section } from "../../../components/ui/Section";

const steps = [
  ["01", "Understand", "We understand your space, requirements and aspirations."],
  ["02", "Design", "We develop layouts, concepts and detailed visualizations."],
  ["03", "Approve", "You review the proposal, estimate and design direction."],
  ["04", "Build", "The approved project moves into coordinated execution."],
  ["05", "Handover", "Your completed space is delivered and documented."],
];

export function Process() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          The process
        </p>

        <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
          From first conversation to final handover.
        </h2>
      </div>

      <div className="mt-12 grid border-t border-neutral-200 md:grid-cols-5">
        {steps.map(([number, title, description]) => (
          <article
            key={number}
            className="border-b border-neutral-200 py-7 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0"
          >
            <span className="text-xs text-neutral-400">{number}</span>

            <h3 className="mt-8 text-xl font-medium">{title}</h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              {description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}