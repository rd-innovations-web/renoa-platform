import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function StartProjectPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 pb-20 pt-36 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Portfolio
          </p>

          <h1 className="mt-5 text-5xl font-medium tracking-tight sm:text-7xl">
            Selected projects.
          </h1>
        </div>
      </main>

      <Footer />
    </>
  );
}