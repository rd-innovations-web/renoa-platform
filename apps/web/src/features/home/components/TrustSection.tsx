import { Section } from "../../../components/ui/Section";

export function TrustSection() {
  return (
    <Section className="bg-neutral-950 text-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            RENOA by Treeblock
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Design expertise with an execution ecosystem behind it.
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-white/60">
            RENOA brings together interior design, spatial planning,
            visualization and project execution into a coordinated
            experience — helping clients move from an initial idea to a
            finished space with clarity at every stage.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-8 border-t border-white/15 pt-8">
            <div>
              <div className="text-3xl font-medium">5+</div>
              <p className="mt-2 text-sm text-white/45">
                Years of design experience
              </p>
            </div>

            <div>
              <div className="text-3xl font-medium">2D + 3D</div>
              <p className="mt-2 text-sm text-white/45">
                Design visualization
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}