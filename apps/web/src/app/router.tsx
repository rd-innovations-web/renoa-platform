import { createBrowserRouter, Link } from "react-router-dom";

import { HomePage } from "../features/home/pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ServicesPage } from "../pages/ServicesPage";
import { StartProjectPage } from "../pages/StartProjectPage";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-5 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          RENOA
        </p>

        <h1 className="mt-5 text-6xl font-medium tracking-tight">404</h1>

        <p className="mt-4 text-sm text-neutral-500">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/start-project",
    element: <StartProjectPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);