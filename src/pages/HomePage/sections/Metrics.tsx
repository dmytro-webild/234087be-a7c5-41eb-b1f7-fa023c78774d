import React from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MetricsSection(): React.JSX.Element {
  return (
    <section id="metrics" aria-label="Metrics and Experience" className="relative">
      <div className="w-content-width mx-auto flex flex-col items-center">
        <div className="px-3 py-1 text-sm card rounded w-fit">
          <p className="text-accent uppercase tracking-wider text-xs font-semibold">Proven Expertise</p>
        </div>

        <ScrollReveal variant="slide-up">
          <div className="max-w-content-width text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
              2+ years of experience with industry expertise, global clientele, proven methodology, and personal experience in the field.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-blur" delay={0.2} className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mt-6">
            <div className="card rounded p-6 text-center flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-foreground">2+</span>
              <span className="text-sm md:text-base text-accent mt-2">Years Experience</span>
            </div>
            <div className="card rounded p-6 text-center flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-foreground">Global</span>
              <span className="text-sm md:text-base text-accent mt-2">Clientele</span>
            </div>
            <div className="card rounded p-6 text-center flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-foreground">Proven</span>
              <span className="text-sm md:text-base text-accent mt-2">Methodology</span>
            </div>
            <div className="card rounded p-6 text-center flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-foreground">100%</span>
              <span className="text-sm md:text-base text-accent mt-2">Personal Field Work</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}