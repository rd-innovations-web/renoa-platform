import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../features/home/pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ContactPage } from "../pages/ContactPage";
import { StartProjectPage } from "../pages/StartProjectPage";

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
]);