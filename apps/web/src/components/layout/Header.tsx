import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 max-w-7xl px-3 sm:px-6">
        <div className="rounded-full border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2"
            >
              <span className="text-xl font-semibold tracking-[0.16em]">
                RENOA
              </span>

              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:inline">
                by Treeblock
              </span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-neutral-600 transition hover:text-neutral-950"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/start-project"
                className="rounded-full bg-neutral-950 px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
              >
                Start a Project
              </Link>
            </nav>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <nav className="border-t border-neutral-200 pb-2 pt-4 md:hidden">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-neutral-100 py-4 text-base"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/start-project"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-full bg-neutral-950 px-5 py-3 text-center text-sm text-white"
                >
                  Start a Project
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}