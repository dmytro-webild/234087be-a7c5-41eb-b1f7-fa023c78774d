import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { Mail, Calendar } from "lucide-react";

export default function ContactPersonalSection() {
  return (
    <section id="contact-personal" data-webild-section="contact-personal" className="bg-background py-12">
  <div className="w-content-width mx-auto flex flex-col gap-10">
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="px-3 py-1 text-sm card rounded w-fit">
        <p className="text-accent uppercase tracking-wider text-xs font-semibold">Direct Access</p>
      </div>

      <TextAnimation
        text="Contact Us Personally"
        variant="slide-up"
        gradientText={true}
        tag="h2"
        className="text-4xl md:text-5xl font-semibold leading-tight text-foreground"
      />

      <TextAnimation
        text="Get direct consultation and strategy guidance for your business directly from our executive leadership."
        variant="slide-up"
        gradientText={false}
        tag="p"
        className="text-lg text-accent max-w-content-width"
      />
    </div>

    <ScrollReveal variant="slide-up">
      <div className="flex flex-col gap-6">
        <div className="card rounded-theme p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 border-2 border-primary-cta/20 shadow-md">
              <ImageOrVideo
                imageSrc="https://storage.googleapis.com/webild/users/user_3JQU3pRqc2xbd0vbgOX0M4axBzx/uploaded-1789798780523-mg90s697.jpg?_wi=1"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 primary-button rounded text-xs font-semibold uppercase tracking-wider text-primary-cta-text w-fit mx-auto sm:mx-0">
                Co-CEO & Strategy
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Cole Glines</h3>
              <p className="text-accent text-sm md:text-base max-w-xl leading-relaxed">
                Ready to elevate your digital presence? Reach out directly to Cole Glines for custom web strategies, AI receptionist integration, and Meta ad campaign performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
            <a
              href="mailto:coleglinesascentra@gmail.com"
              className="secondary-button p-4 rounded flex items-center justify-center sm:justify-start gap-3 text-foreground hover:-translate-y-0.5 transition-transform"
            >
              <div className="p-2 primary-button rounded-full text-primary-cta-text">
                <Mail className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-xs text-accent">Email Directly</p>
                <p className="text-sm font-semibold">coleglinesascentra@gmail.com</p>
              </div>
            </a>

            <a
              href="#contact"
              className="primary-button p-4 rounded flex items-center justify-center sm:justify-start gap-3 text-primary-cta-text hover:-translate-y-0.5 transition-transform"
            >
              <div className="p-2 bg-background/20 rounded-full text-primary-cta-text">
                <Calendar className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-xs opacity-80">Book Direct Strategy Call</p>
                <p className="text-sm font-semibold">Schedule with Cole G.</p>
              </div>
            </a>
          </div>
        </div>

        <div className="card rounded-theme p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 border-2 border-primary-cta/20 shadow-md">
              <ImageOrVideo
                imageSrc="https://storage.googleapis.com/webild/users/user_3JQU3pRqc2xbd0vbgOX0M4axBzx/uploaded-1789798780524-ioljuu47.jpg?_wi=1"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 primary-button rounded text-xs font-semibold uppercase tracking-wider text-primary-cta-text w-fit mx-auto sm:mx-0">
                Co-CEO & Technology
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Cole Atkinson</h3>
              <p className="text-accent text-sm md:text-base max-w-xl leading-relaxed">
                Looking for technical direction or custom AI systems? Connect directly with Cole Atkinson for high-performance web architecture, custom software development, and AI engineering.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
            <a
              href="mailto:coleatkinsonascentra@gmail.com"
              className="secondary-button p-4 rounded flex items-center justify-center sm:justify-start gap-3 text-foreground hover:-translate-y-0.5 transition-transform"
            >
              <div className="p-2 primary-button rounded-full text-primary-cta-text">
                <Mail className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-xs text-accent">Email Directly</p>
                <p className="text-sm font-semibold">coleatkinsonascentra@gmail.com</p>
              </div>
            </a>

            <a
              href="#contact"
              className="primary-button p-4 rounded flex items-center justify-center sm:justify-start gap-3 text-primary-cta-text hover:-translate-y-0.5 transition-transform"
            >
              <div className="p-2 bg-background/20 rounded-full text-primary-cta-text">
                <Calendar className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-xs opacity-80">Book Direct Strategy Call</p>
                <p className="text-sm font-semibold">Schedule with Cole A.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
  );
}