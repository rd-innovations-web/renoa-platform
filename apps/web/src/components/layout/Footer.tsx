import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-2xl font-semibold tracking-[0.16em]">
              RENOA
            </div>

            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              by Treeblock
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
              Interior design, 2D planning, 3D visualization and coordinated
              project execution for residential and commercial spaces.
            </p>

            <div className="mt-6 text-sm text-neutral-500">
              Founded and led by Abhilasha Chaudhary.
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Explore</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">
              <Link
                to="/projects"
                className="transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                to="/services"
                className="transition hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/about"
                className="transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Contact</h3>

            <div className="mt-4 flex flex-col gap-4 text-sm text-neutral-400">
              <a
                href="mailto:email-renoa.admin@gmail.com"
                className="flex gap-3 transition hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />
                <span className="break-all">
                  email-renoa.admin@gmail.com
                </span>
              </a>

              <a
                href="tel:+917053113009"
                className="flex gap-3 transition hover:text-white"
              >
                <Phone size={17} className="mt-0.5 shrink-0" />
                <span>+91 70531 13009</span>
              </a>

              <div className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0" />

                <span className="leading-6">
                  E-219, Sector 63
                  <br />
                  Noida, Uttar Pradesh 201301
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} RENOA by Treeblock. All rights
              reserved.
            </span>

            <span>Interior Design · 2D · 3D · Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}