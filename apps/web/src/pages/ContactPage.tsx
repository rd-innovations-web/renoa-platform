import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";

export function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#faf9f6] px-5 pb-20 pt-36 sm:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Contact RENOA
            </p>

            <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Let's discuss
              <br />
              <span className="text-neutral-400">your space.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              Tell us about your project, requirements and vision. We will
              connect with you to understand the space and discuss the next
              steps.
            </p>
          </div>

          <div className="mt-16 grid gap-5 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="mailto:email-renoa.admin@gmail.com"
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-400"
            >
              <Mail size={20} />

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-400">
                Email
              </p>

              <p className="mt-2 break-all text-sm font-medium">
                email-renoa.admin@gmail.com
              </p>
            </a>

            <a
              href="tel:+917053113009"
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-400"
            >
              <Phone size={20} />

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-400">
                Phone
              </p>

              <p className="mt-2 text-sm font-medium">
                +91 70531 13009
              </p>
            </a>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:col-span-2 lg:col-span-1">
              <MapPin size={20} />

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-400">
                Studio
              </p>

              <p className="mt-2 text-sm font-medium leading-6">
                E-219, Sector 63
                <br />
                Noida, Uttar Pradesh 201301
                <br />
                India
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-neutral-950 px-6 py-10 text-white sm:px-10 sm:py-14">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Ready to begin?
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Share your project requirements with RENOA.
            </h2>

            <Link
              to="/start-project"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Start a project
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}