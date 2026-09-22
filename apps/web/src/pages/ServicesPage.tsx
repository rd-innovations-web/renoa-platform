import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

const services = [
  {
    number: "01",
    title: "2D Floor Plans & Space Planning",
    description:
      "Layouts and planning that establish circulation, proportions, furniture placement and the functional foundation of the space.",
  },
  {
    number: "02",
    title: "3D Visualization",
    description:
      "Detailed visualizations that help clients understand the proposed space, materials, atmosphere and design direction before execution.",
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Complete interior concepts covering spatial experience, materials, furniture, lighting, finishes and visual language.",
  },
  {
    number: "04",
    title: "Residential Interiors",
    description:
      "Design support for homes and individual spaces including living rooms, bedrooms, kitchens and bathrooms.",
  },
  {
    number: "05",
    title: "Commercial Interiors",
    description:
      "Interior design for offices, retail spaces, restaurants, cafés, gyms, clubs and other commercial environments.",
  },
  {
    number: "06",
    title: "Design Development",
    description:
      "Revisions, design refinement, presentation and approval support to bring the project direction into focus.",
  },
  {
    number: "07",
    title: "Execution Coordination",
    description:
      "Approved design can move into the connected Treeblock execution workflow for coordinated project delivery.",
  },
  {
    number: "08",
    title: "Estimation & BOQ Support",
    description:
      "Project information can be developed toward estimation and quantity-based planning as the project progresses.",
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-950">
      <Header />

      <main>
        <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Services
            </p>

            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              From spatial thinking to a finished direction.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              RENOA combines interior design, 2D planning and 3D
              visualization with a connected execution workflow through
              Treeblock.
            </p>
          </div>
        </section>

        <section className="border-y border-neutral-200">
          <div className="mx-auto max-w-7xl">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-5 border-b border-neutral-200 px-5 py-8 last:border-b-0 sm:px-8 lg:grid-cols-[90px_0.8fr_1.2fr] lg:gap-10 lg:px-12 lg:py-10"
              >
                <span className="text-xs text-neutral-400">
                  {service.number}
                </span>

                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {service.title}
                </h2>

                <p className="max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#e7e0d4] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Discuss your requirements
            </p>

            <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                Have a residential or commercial space in mind?
              </h2>

              <Link
                to="/start-project"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Start a Project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}