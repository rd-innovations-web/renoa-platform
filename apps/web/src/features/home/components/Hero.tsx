import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
          alt="Contemporary interior designed by RENOA"
          className="h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/70 sm:text-sm">
            Interior Design · 2D · 3D · Execution
          </p>

          <h1 className="text-[clamp(3.2rem,12vw,8rem)] font-medium leading-[0.9] tracking-[-0.055em]">
            Spaces
            <br />
            <span className="text-white/60">with intent.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Thoughtful interior design, detailed visualization and
            end-to-end project execution for spaces that feel distinctly
            yours.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/start-project"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Start your project
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore projects
            </Link>
          </div>
        </motion.div>

        <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
          <ArrowDownRight size={15} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}