import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-950">
      <Header />

      <main>
        <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              About RENOA
            </p>

            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Design thinking with an execution ecosystem behind it.
            </h1>

            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
              <p className="max-w-2xl text-lg leading-8 text-neutral-600">
                RENOA is the interior design and visualization arm of the
                RENOA by Treeblock workflow, bringing together spatial
                planning, 2D documentation, 3D visualization and interior
                design.
              </p>

              <p className="max-w-2xl text-base leading-8 text-neutral-500">
                The goal is simple: understand the space, develop the design,
                communicate it clearly and help move the approved vision
                toward execution with a coordinated process.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                RENOA × Treeblock
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Two connected capabilities. One coordinated project journey.
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-white/15 pt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  RENOA
                </p>

                <h3 className="mt-4 text-xl font-medium">
                  Design & Visualization
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Space planning, 2D layouts, 3D visualization, interior
                  concepts, materials and design development.
                </p>
              </div>

              <div className="border-t border-white/15 pt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Treeblock
                </p>

                <h3 className="mt-4 text-xl font-medium">
                  Construction & Execution
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Coordinated project execution and construction through the
                  connected delivery workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  What matters to us
                </p>

                <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Clarity before construction.
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  [
                    "Understand",
                    "Every project starts by understanding the space, requirements and intended use.",
                  ],
                  [
                    "Visualize",
                    "2D and 3D design help turn an idea into something tangible before execution.",
                  ],
                  [
                    "Refine",
                    "Design direction is reviewed and refined before the project moves forward.",
                  ],
                  [
                    "Deliver",
                    "The approved design transitions into a coordinated execution workflow.",
                  ],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="border-t border-neutral-200 pt-5"
                  >
                    <h3 className="text-xl font-medium">{title}</h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-500">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-14 inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Talk to RENOA
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}