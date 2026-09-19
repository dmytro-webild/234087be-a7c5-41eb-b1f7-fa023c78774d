// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import ServicesSection from './HomePage/sections/Services';
import PromiseSection from './HomePage/sections/Promise';
import MetricsSection from './HomePage/sections/Metrics';
import TeamSection from './HomePage/sections/Team';
import FaqSection from './HomePage/sections/Faq';

export default function HomePage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="lightRaysCorner" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <HeroSection />

      <ServicesSection />

      <PromiseSection />

      <MetricsSection />

      <TeamSection />

      <FaqSection />
    </StyleProvider>
  );
}