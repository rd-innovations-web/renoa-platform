import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Section } from "../components/ui/Section";

export function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#faf9f6]">
        {/* Intro */}
        <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              About RENOA
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Thoughtful design.
              <br />
              <span className="text-neutral-400">
                Experienced execution.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              RENOA is an interior design studio focused on creating
              thoughtful, functional and visually refined spaces for
              residential and commercial clients.
            </p>
          </div>
        </section>

        {/* Founder */}
        <Section className="bg-white">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div className="overflow-hidden bg-neutral-100">
              <img
                src="/founder-abhilasha.png"
                alt="Abhilasha Chaudhary, Founder and Design Lead at RENOA"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Founder & Design Lead
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Abhilasha Chaudhary
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
                Abhilasha leads RENOA's design direction, bringing together
                spatial planning, interior design, 2D documentation and 3D
                visualization to develop spaces that balance aesthetics,
                functionality and the client's requirements.
              </p>

              <div className="mt-8 border-t border-neutral-200 pt-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      Education
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      B.Des. in Interior Design
                      <br />
                      Galgotias University
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      Experience
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      5+ years of design experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* RENOA + Treeblock */}
        <Section>
          <div className="rounded-[2rem] bg-neutral-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Design × Execution
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                  RENOA by Treeblock
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-white/65">
                  RENOA works alongside Treeblock as part of a coordinated
                  design and execution ecosystem. RENOA focuses on design,
                  visualization and spatial planning, while the wider
                  execution network supports the journey from approved design
                  through project completion.
                </p>

                <p className="mt-5 text-sm leading-7 text-white/45">
                  This collaborative approach helps clients move from an
                  initial concept to a finished space with greater continuity
                  between design and execution.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Capabilities */}
        <Section className="bg-white">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Our approach
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Design that considers the whole space.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Residential interiors",
                "Commercial interiors",
                "2D planning & layouts",
                "3D visualization",
                "Material & finish direction",
                "Project execution coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-t border-neutral-200 py-5"
                >
                  <Check size={17} className="shrink-0 text-neutral-500" />
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Start a conversation
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Have a space in mind?
              </h2>
            </div>

            <Link
              to="/start-project"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Start a project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}