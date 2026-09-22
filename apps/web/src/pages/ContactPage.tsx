import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

const email = "renoa.admin@gmail.com";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-950">
      <Header />

      <main>
        <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Contact RENOA
            </p>

            <h1 className="mt-5 max-w-5xl text-[clamp(3.2rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Let's talk about your space.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              Tell us what you are planning, what kind of space you have and
              what you want to achieve. We can start with a conversation about
              the project.
            </p>
          </div>
        </section>

        <section className="bg-neutral-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                General enquiries
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Start with an email.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-white/55">
                For design enquiries, project discussions and business
                communication, contact the RENOA team directly.
              </p>
            </div>

            <div className="flex items-end">
              <a
                href={`mailto:${email}`}
                className="group flex w-full items-center justify-between border-t border-white/15 py-6"
              >
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-white/50" />

                  <span className="break-all text-lg sm:text-2xl">
                    {email}
                  </span>
                </div>

                <ArrowUpRight
                  size={22}
                  className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Design
              </p>
              <h3 className="mt-3 text-xl font-medium">
                Residential & Commercial
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                Discuss a new interior, renovation, workspace or commercial
                environment.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Visualization
              </p>
              <h3 className="mt-3 text-xl font-medium">2D + 3D</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                Bring plans, concepts and proposed spaces into a clearer
                visual direction.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Project
              </p>
              <h3 className="mt-3 text-xl font-medium">Start a Conversation</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                Share the basics first. Detailed project management features
                will be introduced as the RENOA platform develops.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-7xl">
            <Link
              to="/start-project"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
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