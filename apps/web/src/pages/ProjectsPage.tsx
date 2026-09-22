import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

const projectTypes = [
  ["Residential", "Homes, apartments, bedrooms, living spaces and kitchens."],
  ["Commercial", "Offices, stores, restaurants, cafés, gyms and other spaces."],
  ["Visualization", "2D planning, concepts, 3D visualization and design development."],
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-950">
      <Header />

      <main>
        <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Projects
            </p>

            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Spaces shaped around how people live and work.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              RENOA works across residential and commercial interiors,
              combining planning, visualization and design development with a
              connected execution workflow.
            </p>
          </div>
        </section>

        <section className="border-y border-neutral-200">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-200 md:grid-cols-3">
              {projectTypes.map(([title, description], index) => (
                <article
                  key={title}
                  className="bg-[#faf9f6] p-7 sm:p-9"
                >
                  <span className="text-xs text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-12 text-2xl font-medium">{title}</h2>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <p className="max-w-2xl text-sm leading-7 text-neutral-500">
                Our detailed project portfolio is being prepared for this
                website. We will publish completed work with project-specific
                information and imagery rather than presenting stock imagery
                as client work.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-neutral-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Have a project?
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Your space could be the next project we shape.
            </h2>

            <Link
              to="/start-project"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}