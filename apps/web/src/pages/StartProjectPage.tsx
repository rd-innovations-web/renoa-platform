import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

const email = "renoa.admin@gmail.com";

const projectTypes = [
  "Residential Interior",
  "Commercial Interior",
  "Renovation",
  "2D / Space Planning",
  "3D Visualization",
  "Design + Execution",
];

export function StartProjectPage() {
  const subject = encodeURIComponent("New Project Enquiry — RENOA");

  const body = encodeURIComponent(
    `Hello RENOA team,

I would like to discuss a project.

Project type:
Location:
Approximate area:
Requirements:
Expected timeline:

Please let me know the next steps.

Regards,`,
  );

  const emailHref = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-950">
      <Header />

      <main>
        <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Start a Project
            </p>

            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Tell us what you are building.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              Start with the basics. Our team can understand the requirement,
              discuss the design direction and guide you through the next
              stage.
            </p>

            <a
              href={emailHref}
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Email your project
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="border-y border-neutral-200">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Projects we can discuss
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
              {projectTypes.map((type) => (
                <div
                  key={type}
                  className="bg-[#faf9f6] p-6 sm:p-8"
                >
                  <div className="text-lg font-medium">{type}</div>
                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    Discuss requirements, scope and design direction with the
                    RENOA team.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                What to include
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                A few details are enough to begin.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "Type of space",
                "Location",
                "Approximate area or dimensions",
                "What you want to change or create",
                "Preferred timeline",
                "Any reference images or ideas you already have",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-neutral-200 pb-5"
                >
                  <span className="text-xs text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}

              <a
                href={emailHref}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium"
              >
                <Mail size={17} />
                {email}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Platform features
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              A more connected project experience is coming.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Client profiles, project tracking, approvals, estimates,
              payments and a dedicated project workspace are being developed
              for a future release.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Contact RENOA
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}