import FeaturesBento from "@/components/sections/features/FeaturesBento";

export default function ServicesSection() {
  return (
    <div id="services" data-webild-section="Services">
      <FeaturesBento
        tag="Services"
        title="Solutions Built to Scale Your Business"
        description="Comprehensive digital solutions engineered for modern growth, from web platforms to AI automation."
        textAnimation="slide-up"
        features={[
          {
            title: "Website Creation & Upgrade",
            description: "High-performing, modern websites engineered to drive conversions and grow your brand.",
            bentoComponent: "checklist-timeline",
            heading: "Development Workflow",
            subheading: "From concepts to live launch",
            checklistItems: [
              { label: "Design & Prototype", detail: "Modern UI/UX tailored to your brand" },
              { label: "Custom Development", detail: "Fast, responsive React & Vite builds" },
              { label: "Launch & SEO", detail: "Optimized for maximum visibility" }
            ],
            completedLabel: "Ready to Launch"
          },
          {
            title: "AI Receptionist Services",
            description: "24/7 intelligent voice and chat assistants that capture leads and automate scheduling.",
            bentoComponent: "chat-marquee",
            aiIcon: "Bot",
            userIcon: "User",
            exchanges: [
              {
                userMessage: "Can I schedule a consultation for tomorrow?",
                aiResponse: "I have openings at 10 AM and 2 PM tomorrow. Which works best?"
              },
              {
                userMessage: "10 AM works great!",
                aiResponse: "You're all set for 10 AM. A confirmation email has been sent!"
              }
            ],
            placeholder: "Type a message..."
          },
          {
            title: "Meta Advertisements",
            description: "Targeted campaign strategies and ad creative that maximize ROAS across Facebook and Instagram.",
            bentoComponent: "info-card-marquee",
            infoCards: [
              { icon: "TrendingUp", label: "Average ROAS", value: "4.8x" },
              { icon: "Target", label: "Conversion Rate", value: "+142%" },
              { icon: "Users", label: "Audience Reach", value: "250K+" }
            ]
          }
        ]}
      />
    </div>
  );
}