import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/animated-section";
import {
  AboutBlock,
  Addons,
  CaseStudies,
  ContactSection,
  CTASection,
  D2CSection,
  DigitalMarketing,
  FAQ,
  GoalSection,
  GrowthFramework,
  MarketplaceFeature,
  MarketplaceServices,
  PlatformSection,
  PricingSection,
  ProcessSection,
  ResourcesSection,
  SellerAudit,
  ServicesSection,
  Stats,
  ToolsSection,
  TrustStrip,
  ValueSection,
  WebTechnology,
  WhoWeHelp,
  WhyIndustries,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrandlineTech | Ecommerce & Marketplace Growth Partner" },
      {
        name: "description",
        content:
          "BrandlineTech helps brands and sellers grow online through marketplace management, ecommerce operations, digital marketing and D2C solutions.",
      },
      {
        property: "og:title",
        content: "BrandlineTech | Ecommerce & Marketplace Growth Partner",
      },
      {
        property: "og:description",
        content:
          "Your products. Every marketplace. One growth partner. Marketplace management, catalog, advertising, SEO, D2C and digital marketing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "marketplace management, amazon seller management, flipkart seller, ecommerce growth, D2C website, marketplace advertising, catalog management, Brandlinetech",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* Full-screen video banner — intentionally clean with no text overlay */}
      <section className="relative h-[100svh] min-h-[34rem] w-full overflow-hidden bg-[#363636]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="BrandlineTech digital marketing and SEO home banner"
        >
          <source src="/brandline-home-banner.mp4" type="video/mp4" />
        </video>
      </section>

      <AnimatedSection direction="fade" delay={0.1}>
        <TrustStrip />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <WhoWeHelp />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <GrowthFramework />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <MarketplaceFeature />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <MarketplaceServices />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <PlatformSection />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <SellerAudit />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <PricingSection />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <Addons />
      </AnimatedSection>

      <AnimatedSection direction="zoom">
        <Stats />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <WhyIndustries />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <CaseStudies />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <D2CSection />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <DigitalMarketing />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <WebTechnology />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <GoalSection />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <ProcessSection />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <ResourcesSection />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <ToolsSection />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <AboutBlock />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <ValueSection />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <FAQ />
      </AnimatedSection>

      <AnimatedSection direction="zoom">
        <CTASection />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <ContactSection />
      </AnimatedSection>
    </main>
  );
}
