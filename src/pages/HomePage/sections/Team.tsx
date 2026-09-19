import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

export default function TeamSection(): React.JSX.Element {
  const teamMembers = [
    {
      name: "Cole Glines",
      role: "Co-CEO & Strategy",
      description: "Leading strategic vision, client partnerships, and business growth at Ascentra.",
      imageSrc: "https://storage.googleapis.com/webild/users/user_3JQU3pRqc2xbd0vbgOX0M4axBzx/uploaded-1789798780523-mg90s697.jpg",
      imageAlt: "Cole Glines - CEO of Ascentra",
    },
    {
      name: "Cole Atkinson",
      role: "Co-CEO & Technology",
      description: "Driving AI innovation, custom web architecture, and technical mastery at Ascentra.",
      imageSrc: "https://storage.googleapis.com/webild/users/user_3JQU3pRqc2xbd0vbgOX0M4axBzx/uploaded-1789798780524-ioljuu47.jpg",
      imageAlt: "Cole Atkinson - CEO of Ascentra",
    },
  ];

  return (
    <section id="team" aria-label="Team" className="relative py-12 bg-background" data-webild-section="team">
      <div className="w-content-width mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="px-3 py-1 text-sm card rounded w-fit">
            <p className="text-accent uppercase tracking-wider text-xs font-semibold">Leadership</p>
          </div>

          <TextAnimation
            text="The Team Behind Ascentra"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="text-4xl md:text-5xl font-semibold leading-tight text-center text-foreground"
          />

          <p className="text-lg text-accent max-w-2xl text-center">
            Led by two dedicated CEOs bringing deep industry expertise, modern strategy, and technical mastery.
          </p>
        </div>

        <ScrollReveal variant="slide-up" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card rounded p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 bg-accent/10 border-2 border-primary-cta/20 shadow-sm">
                  <ImageOrVideo
                    imageSrc={member.imageSrc}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <span className="px-3 py-1 primary-button rounded text-xs font-semibold uppercase tracking-wider text-primary-cta-text w-fit">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground mt-1">{member.name}</h3>
                  <p className="text-accent text-sm md:text-base leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
