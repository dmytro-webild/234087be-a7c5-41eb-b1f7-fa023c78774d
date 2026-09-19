import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { ExternalLink } from "lucide-react";

export default function WorkSection() {
  const projects = [
    {
      title: "Apex Luxe Realty",
      category: "Website Creation & Upgrade",
      description: "Custom luxury real estate web platform with interactive virtual tours, ultra-fast load times, and seamless lead capture.",
      result: "+140% Qualified Leads",
      imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Solis Medical Center",
      category: "AI Receptionist Services",
      description: "Intelligent 24/7 voice and text AI agent that qualifies patient inquiries, books appointments, and reduces staff call load.",
      result: "98% Calls Automated",
      imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Vanguard Fitness Co.",
      category: "Meta Advertisements",
      description: "High-converting ad funnel targeting premium fitness subscribers with personalized creative variations and scaled ROI.",
      result: "4.2x ROAS in 60 Days",
      imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id="work" aria-label="Featured Work" className="bg-background">
      <div className="w-content-width mx-auto flex flex-col">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="px-3 py-1 text-sm card rounded w-fit text-accent">
            <p>Our Portfolio</p>
          </div>

          <TextAnimation
            text="Recent Client Work"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] text-balance text-foreground"
          />

          <TextAnimation
            text="Explore how Ascentra elevates brands through cutting-edge web design, AI integration, and high-ROI ad performance."
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl text-accent text-balance"
          />
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="card rounded-theme overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden bg-card">
                  <ImageOrVideo
                    imageSrc={project.imageSrc}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 card rounded-full text-xs font-semibold text-primary-cta">
                    {project.result}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="size-4 text-accent group-hover:text-primary-cta transition-colors" />
                  </h3>
                  <p className="text-sm text-accent leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex justify-center mt-4">
          <Button text="View All Case Studies" href="#contact" variant="secondary" />
        </div>
      </div>
    </section>
  );
}