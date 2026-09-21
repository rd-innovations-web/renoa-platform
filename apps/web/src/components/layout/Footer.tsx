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

            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
              Interior design and project execution for residential and
              commercial spaces.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Explore</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">
              <Link to="/projects">Projects</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Start</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">
              <Link to="/start-project">Start a project</Link>
              <a href="mailto:hello@renoa.in">hello@renoa.in</a>
              <a href="tel:+919999999999">Call us</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} RENOA by Treeblock. All rights reserved.
        </div>
      </div>
    </footer>
  );
}