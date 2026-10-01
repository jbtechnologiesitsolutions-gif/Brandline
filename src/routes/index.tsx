import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/animated-section";
import { IntegratedCapabilities } from "@/components/integrated-capabilities";
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
    <main className="home-theme-flow overflow-hidden text-foreground">
      {/* Clean full-screen video banner */}
      <section className="relative h-[100svh] min-h-[34rem] w-full overflow-hidden bg-[#AAA7A7]">
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

      {/* TOP ZONE — LIGHT GREY */}
      <div className="theme-zone theme-zone-grey">
        <AnimatedSection className="theme-section" direction="fade" delay={0.1}><TrustStrip /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><WhoWeHelp /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><IntegratedCapabilities /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="left"><GrowthFramework /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><MarketplaceFeature /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><MarketplaceServices /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="right"><PlatformSection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><SellerAudit /></AnimatedSection>
      </div>

      {/* MIDDLE ZONE — PINK */}
      <div className="theme-zone theme-zone-pink">
        <AnimatedSection className="theme-section" direction="up"><PricingSection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="left"><Addons /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="zoom"><Stats /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="right"><WhyIndustries /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><CaseStudies /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="left"><D2CSection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="right"><DigitalMarketing /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="left"><WebTechnology /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><GoalSection /></AnimatedSection>
      </div>

      {/* BOTTOM ZONE — CHARCOAL / BLACK */}
      <div className="theme-zone theme-zone-dark">
        <AnimatedSection className="theme-section" direction="up"><ProcessSection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="right"><ResourcesSection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><ToolsSection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="left"><AboutBlock /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><ValueSection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><FAQ /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="zoom"><CTASection /></AnimatedSection>
        <AnimatedSection className="theme-section" direction="up"><ContactSection /></AnimatedSection>
      </div>
    </main>
  );
}
