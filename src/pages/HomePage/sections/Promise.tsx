import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";

export default function PromiseSection() {
  const promises = [
    {
      title: "Uncompromised Quality",
      description: "Modern, high-converting websites designed specifically for your brand with lightning-fast performance.",
      highlight: "100% Custom Built",
    },
    {
      title: "AI-Powered Operations",
      description: "Intelligent AI receptionists that handle customer inquiries, booking, and support 24 hours a day.",
      highlight: "24/7 Availability",
    },
    {
      title: "Guaranteed ROI Focus",
      description: "Data-driven Meta advertisement campaigns crafted to generate high-quality leads and predictable growth.",
      highlight: "Data-Driven Results",
    },
  ];

  return (
    <section id="promise" aria-label="Our Promise" className="bg-background">
      <div className="w-content-width mx-auto flex flex-col">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="px-3 py-1 text-sm card rounded w-fit text-accent">
            <p>Our Promise</p>
          </div>

          <TextAnimation
            text="The Ascentra Guarantee"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] text-balance text-foreground"
          />

          <TextAnimation
            text="We partner with ambitious businesses to engineer digital experiences, automation, and advertising that deliver real commercial impact."
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl text-accent text-balance"
          />
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map((item) => (
              <div
                key={item.title}
                className="card rounded-theme p-8 flex flex-col justify-between gap-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-8 primary-button rounded-full shrink-0">
                      <Check className="size-4 text-primary-cta-text" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-primary-cta">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-base text-accent leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex justify-center mt-4">
          <Button text="Start Your Project" href="#contact" variant="primary" />
        </div>
      </div>
    </section>
  );
}