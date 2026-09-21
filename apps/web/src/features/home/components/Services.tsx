import { ArrowUpRight } from "lucide-react";
import { Section } from "../../../components/ui/Section";

const services = [
  {
    number: "01",
    title: "2D Design",
    description:
      "Detailed layouts, plans and technical drawings that establish the foundation of your space.",
  },
  {
    number: "02",
    title: "3D Visualization",
    description:
      "Photorealistic visualizations that help you experience the proposed space before construction.",
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Complete interior concepts covering materials, furniture, lighting, finishes and spatial experience.",
  },
  {
    number: "04",
    title: "Project Execution",
    description:
      "Coordinated construction and execution through our project delivery network.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            What we do
          </p>

          <h2 className="mt-5 max-w-lg text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Design from idea to reality.
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-5 py-7 sm:grid-cols-[80px_1fr_auto] sm:items-start"
            >
              <span className="text-xs text-neutral-400">
                {service.number}
              </span>

              <div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                  {service.description}
                </p>
              </div>

              <ArrowUpRight
                className="hidden transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                size={20}
              />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}