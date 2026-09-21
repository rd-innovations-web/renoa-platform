import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { Process } from "../components/Process";
import { TrustSection } from "../components/TrustSection";
import { CTA } from "../components/CTA";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-950">
      <Header />

      <main>
        <Hero />
        <Services />
        <ProjectsPreview />
        <Process />
        <TrustSection />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}