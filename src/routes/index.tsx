import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MoveDownRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/animated-section";
import { GlowEffect } from "@/components/core/glow-effect";
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
    <main className="overflow-hidden">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="subtle-grid overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5"
            >
              <Sparkles className="size-3.5 text-gold" />
              <p className="label-caps text-gold text-[10px]">
                E-Commerce &nbsp;•&nbsp; Marketplaces &nbsp;•&nbsp; Digital Growth
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="display-title mt-7 max-w-3xl"
            >
              Grow Your Brand
              <br />
              <span className="text-gradient-gold">Across Every Digital Shelf.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 max-w-xl font-display text-xl font-semibold leading-snug text-muted-foreground sm:text-2xl"
            >
              Your products. Every marketplace. One growth partner.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 max-w-xl text-base leading-8 text-muted-foreground"
            >
              From marketplace onboarding and catalog management to advertising,
              inventory coordination and D2C growth, BrandlineTech helps businesses
              build, manage and scale their online operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <div className="group relative inline-flex">
                <motion.div className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <GlowEffect
                    colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
                    mode="colorShift"
                    blur="soft"
                    duration={3}
                  />
                </motion.div>
                <Button asChild variant="gold" size="lg" className="relative z-10">
                  <Link to="/contact">
                    Get Free Consultation <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
              <Button asChild variant="outline" size="lg">
                <a href="#services">
                  Explore Our Services <MoveDownRight className="ml-1 size-4" />
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Strategy{" "}
              <span className="mx-2 text-gold">•</span> Technology{" "}
              <span className="mx-2 text-gold">•</span> Marketing{" "}
              <span className="mx-2 text-gold">•</span> Execution
            </motion.p>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <GrowthDashboard />
          </motion.div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────────────────── */}
      <AnimatedSection direction="fade" delay={0.1}>
        <TrustStrip />
      </AnimatedSection>

      {/* ── Who We Help ───────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <WhoWeHelp />
      </AnimatedSection>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <ServicesSection />
      </AnimatedSection>

      {/* ── Growth Framework ──────────────────────────────────────────────── */}
      <AnimatedSection direction="left">
        <GrowthFramework />
      </AnimatedSection>

      {/* ── Marketplace Feature (tabbed dashboard) ────────────────────────── */}
      <AnimatedSection direction="up">
        <MarketplaceFeature />
      </AnimatedSection>

      {/* ── Marketplace Services 12-card grid ─────────────────────────────── */}
      <AnimatedSection direction="up">
        <MarketplaceServices />
      </AnimatedSection>

      {/* ── Platform Section ──────────────────────────────────────────────── */}
      <AnimatedSection direction="right">
        <PlatformSection />
      </AnimatedSection>

      {/* ── Seller Audit (dark lead-gen) ──────────────────────────────────── */}
      <AnimatedSection direction="up">
        <SellerAudit />
      </AnimatedSection>

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <PricingSection />
      </AnimatedSection>

      {/* ── Add-ons ───────────────────────────────────────────────────────── */}
      <AnimatedSection direction="left">
        <Addons />
      </AnimatedSection>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <AnimatedSection direction="zoom">
        <Stats />
      </AnimatedSection>

      {/* ── Why BrandlineTech + Industries ────────────────────────────────── */}
      <AnimatedSection direction="right">
        <WhyIndustries />
      </AnimatedSection>

      {/* ── Case Studies ──────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <CaseStudies />
      </AnimatedSection>

      {/* ── D2C Section ───────────────────────────────────────────────────── */}
      <AnimatedSection direction="left">
        <D2CSection />
      </AnimatedSection>

      {/* ── Digital Marketing ─────────────────────────────────────────────── */}
      <AnimatedSection direction="right">
        <DigitalMarketing />
      </AnimatedSection>

      {/* ── Technology ────────────────────────────────────────────────────── */}
      <AnimatedSection direction="left">
        <WebTechnology />
      </AnimatedSection>

      {/* ── Goal/Outcome Section ──────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <GoalSection />
      </AnimatedSection>

      {/* ── Process ───────────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <ProcessSection />
      </AnimatedSection>

      {/* ── Resources ─────────────────────────────────────────────────────── */}
      <AnimatedSection direction="right">
        <ResourcesSection />
      </AnimatedSection>

      {/* ── Tools ─────────────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <ToolsSection />
      </AnimatedSection>

      {/* ── About Block ───────────────────────────────────────────────────── */}
      <AnimatedSection direction="left">
        <AboutBlock />
      </AnimatedSection>

      {/* ── Value Section ─────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <ValueSection />
      </AnimatedSection>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <FAQ />
      </AnimatedSection>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <AnimatedSection direction="zoom">
        <CTASection />
      </AnimatedSection>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <AnimatedSection direction="up">
        <ContactSection />
      </AnimatedSection>
    </main>
  );
}
