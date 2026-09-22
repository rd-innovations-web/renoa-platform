import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const email = "renoa.admin@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-2xl font-semibold tracking-[0.16em]">
              RENOA
            </div>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              by Treeblock
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
              Interior design, visualization and coordinated project
              execution for residential and commercial spaces.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-white transition hover:text-neutral-300"
            >
              <Mail size={16} />
              {email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Explore</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-400">
              <Link className="transition hover:text-white" to="/projects">
                Projects
              </Link>

              <Link className="transition hover:text-white" to="/services">
                Services
              </Link>

              <Link className="transition hover:text-white" to="/about">
                About
              </Link>

              <Link className="transition hover:text-white" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Start</h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-neutral-400">
              <Link
                to="/start-project"
                className="inline-flex items-center gap-2 text-white transition hover:text-neutral-300"
              >
                Start a project
                <ArrowUpRight size={15} />
              </Link>

              <a
                href={`mailto:${email}`}
                className="transition hover:text-white"
              >
                Send an enquiry
              </a>

              <span className="text-neutral-600">
                Client portal · Coming Soon
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} RENOA by Treeblock. All rights
            reserved.
          </span>

          <span>Interior Design · 2D · 3D · Execution</span>
        </div>
      </div>
    </footer>
  );
}