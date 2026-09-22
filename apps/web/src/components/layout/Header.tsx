import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === "/#process") {
      return location.pathname === "/";
    }

    return location.pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 max-w-7xl px-3 sm:px-6">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/90 shadow-lg backdrop-blur-xl sm:rounded-full">
          <div className="flex min-h-[60px] items-center justify-between px-4 sm:px-6">
            <Link
                to="/"
                onClick={closeMenu}
                className="group flex min-w-0 items-center"
                >
                <img
                  src="/renoa-logo-black.png"
                  alt="RENOA by Treeblock"
                  className="block h-9 w-auto object-contain sm:h-10"
                />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-6 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm transition ${
                    isActive(item.href)
                      ? "font-medium text-neutral-950"
                      : "text-neutral-600 hover:text-neutral-950"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <span
                title="Client portal is currently under development"
                className="cursor-not-allowed whitespace-nowrap text-sm text-neutral-400"
              >
                Client Portal
                <span className="ml-1.5 text-[9px] uppercase tracking-[0.12em]">
                  Soon
                </span>
              </span>

              <Link
                to="/start-project"
                className="rounded-full bg-neutral-950 px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
              >
                Start a Project
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-transparent text-neutral-950 transition hover:bg-neutral-100 md:hidden"
            >
              {open ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {open && (
            <nav className="border-t border-neutral-200/80 px-4 pb-5 pt-2 md:hidden">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className={`border-b border-neutral-100 py-4 text-[15px] ${
                      isActive(item.href)
                        ? "font-medium text-neutral-950"
                        : "text-neutral-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div
                  title="Client portal is currently under development"
                  className="flex cursor-not-allowed items-center justify-between border-b border-neutral-100 py-4 text-[15px] text-neutral-400"
                >
                  <span>Client Portal</span>
                  <span className="text-[9px] uppercase tracking-[0.15em]">
                    Coming Soon
                  </span>
                </div>

                <Link
                  to="/start-project"
                  onClick={closeMenu}
                  className="mt-5 rounded-full bg-neutral-950 px-5 py-3.5 text-center text-sm font-medium text-white"
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