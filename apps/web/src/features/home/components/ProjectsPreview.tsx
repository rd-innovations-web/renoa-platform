import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../../../components/ui/Section";

const projects = [
  {
    title: "Contemporary Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Modern Workspace",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Refined Living",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
];

export function ProjectsPreview() {
  return (
    <Section className="bg-[#f1eee7]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Selected work
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Spaces we've shaped.
          </h2>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium"
        >
          View all projects
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            to="/projects"
            key={project.title}
            className={`group ${index === 0 ? "md:col-span-2" : ""}`}
          >
            <div
              className={`overflow-hidden bg-neutral-200 ${
                index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex justify-between gap-4 pt-4">
              <div>
                <h3 className="font-medium">{project.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {project.category}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}