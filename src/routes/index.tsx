import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MoveDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  GrowthDashboard,
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
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="subtle-grid overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left */}
          <div className="reveal">
            <p className="label-caps text-gold">
              E-Commerce &nbsp;•&nbsp; Marketplaces &nbsp;•&nbsp; Digital Growth
            </p>
            <h1 className="display-title mt-7 max-w-3xl">
              Grow Your Brand
              <br />
              <span className="text-gradient-gold">Across Every Digital Shelf.</span>
            </h1>
            <h2 className="mt-6 max-w-xl font-display text-xl font-semibold leading-snug text-muted-foreground sm:text-2xl">
              Your products. Every marketplace. One growth partner.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              From marketplace onboarding and catalog management to advertising,
              inventory coordination and D2C growth, BrandlineTech helps businesses
              build, manage and scale their online operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Get Free Consultation <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#services">
                Explore Our Services <MoveDownRight />
              </a>
            </Button>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Strategy{" "}
              <span className="mx-2 text-gold">•</span> Technology{" "}
              <span className="mx-2 text-gold">•</span> Marketing{" "}
              <span className="mx-2 text-gold">•</span> Execution
            </p>
          </div>

          {/* Right — Dashboard */}
          <GrowthDashboard />
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────────────────── */}
      <TrustStrip />

      {/* ── Who We Help ───────────────────────────────────────────────────── */}
      <WhoWeHelp />

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── Growth Framework ──────────────────────────────────────────────── */}
      <GrowthFramework />

      {/* ── Marketplace Feature (tabbed dashboard) ────────────────────────── */}
      <MarketplaceFeature />

      {/* ── Marketplace Services 12-card grid ─────────────────────────────── */}
      <MarketplaceServices />

      {/* ── Platform Section ──────────────────────────────────────────────── */}
      <PlatformSection />

      {/* ── Seller Audit (dark lead-gen) ──────────────────────────────────── */}
      <SellerAudit />

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <PricingSection />

      {/* ── Add-ons ───────────────────────────────────────────────────────── */}
      <Addons />

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <Stats />

      {/* ── Why BrandlineTech + Industries ────────────────────────────────── */}
      <WhyIndustries />

      {/* ── Case Studies ──────────────────────────────────────────────────── */}
      <CaseStudies />

      {/* ── D2C Section ───────────────────────────────────────────────────── */}
      <D2CSection />

      {/* ── Digital Marketing ─────────────────────────────────────────────── */}
      <DigitalMarketing />

      {/* ── Technology ────────────────────────────────────────────────────── */}
      <WebTechnology />

      {/* ── Goal/Outcome Section ──────────────────────────────────────────── */}
      <GoalSection />

      {/* ── Process ───────────────────────────────────────────────────────── */}
      <ProcessSection />

      {/* ── Resources ─────────────────────────────────────────────────────── */}
      <ResourcesSection />

      {/* ── Tools ─────────────────────────────────────────────────────────── */}
      <ToolsSection />

      {/* ── About Block ───────────────────────────────────────────────────── */}
      <AboutBlock />

      {/* ── Value Section ─────────────────────────────────────────────────── */}
      <ValueSection />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <ContactSection />
    </main>
  );
}
