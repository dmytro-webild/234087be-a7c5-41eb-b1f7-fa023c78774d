import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TeamSection(): React.JSX.Element {
  const teamMembers = [
    {
      name: "Cole Glines",
      role: "CEO",
      description: "Co-CEO leading strategic vision, business growth, and client partnerships at Ascentra.",
      imageAlt: "Cole Glines - CEO of Ascentra",
    },
    {
      name: "Cole Atkinson",
      role: "CEO",
      description: "Co-CEO driving technological innovation, AI integrations, and web architecture at Ascentra.",
      imageAlt: "Cole Atkinson - CEO of Ascentra",
    },
  ];

  return (
    <section id="team" aria-label="Team" className="relative">
      <div className="w-content-width mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="px-3 py-1 text-sm card rounded w-fit">
            <p className="text-accent uppercase tracking-wider text-xs font-semibold">Leadership</p>
          </div>

          <TextAnimation
            text="The Team Behind Ascentra"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="text-4xl md:text-6xl font-semibold leading-tight text-center"
          />

          <p className="text-lg text-accent max-w-content-width text-center">
            Led by two dedicated CEOs bringing deep industry expertise, modern strategy, and technical mastery.
          </p>
        </div>

        <ScrollReveal variant="slide-up" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-content-width mx-auto w-full">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card rounded p-8 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 border-2 border-primary-cta/30 bg-accent/10 flex items-center justify-center">
                  <img
                    src=""
                    alt={member.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                <div className="mt-2 mb-4 px-3 py-1 primary-button rounded text-xs font-semibold uppercase tracking-wider text-primary-cta-text">
                  {member.role}
                </div>
                <p className="text-accent text-base leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}