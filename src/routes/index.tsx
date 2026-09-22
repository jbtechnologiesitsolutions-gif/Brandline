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
  const headlineLines = ["Grow Your Brand", "Across Every", "Digital Shelf."];

  return (
    <main className="overflow-hidden bg-[#F8F7F5] text-[#1F1F1F]">
      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative subtle-grid overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,90,0.12),transparent_55%)]">
        {/* Minimal floating particles / ambient glow dots */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/6 size-2 rounded-full bg-[#C89B5A]/30"
            animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 size-3 rounded-full bg-[#E4C27A]/20"
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left Column — Hero Content */}
          <div className="flex flex-col items-start">
            {/* 1. Small Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#C89B5A]/30 bg-[#C89B5A]/10 px-3.5 py-1.5 shadow-sm"
            >
              <Sparkles className="size-3.5 text-[#C89B5A]" />
              <p className="label-caps text-[#C89B5A] text-[10px] font-bold tracking-widest">
                E-Commerce &nbsp;•&nbsp; Marketplaces &nbsp;•&nbsp; Digital Growth
              </p>
            </motion.div>

            {/* 2. Main Headline (Staggered line-by-line reveal with blur) */}
            <h1 className="display-title mt-7 max-w-3xl font-display font-extrabold tracking-tight text-[#1F1F1F]">
              {headlineLines.map((line, index) => {
                const isGold = index > 0;
                return (
                  <motion.span
                    key={line}
                    initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.18 + index * 0.14,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className={`block ${
                      isGold
                        ? "bg-gradient-to-r from-[#C89B5A] via-[#E4C27A] to-[#C89B5A] bg-[length:200%_auto] text-transparent bg-clip-text"
                        : ""
                    }`}
                  >
                    {line}
                  </motion.span>
                );
              })}
            </h1>

            {/* 3. Supporting Text */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 max-w-xl font-display text-xl font-bold leading-snug text-[#292526] sm:text-2xl"
            >
              Your products. Every marketplace. One growth partner.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-5 max-w-xl text-base leading-8 text-[#6B6868]"
            >
              From marketplace onboarding and catalog management to advertising,
              inventory coordination and D2C growth, BrandlineTech helps businesses
              build, manage and scale their online operations.
            </motion.p>

            {/* 4. Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  asChild
                  variant="gold"
                  size="lg"
                  className="group relative z-10 overflow-hidden bg-[#C89B5A] px-7 py-3.5 font-display text-sm font-bold text-[#1F1F1F] shadow-gold transition-colors hover:bg-[#E4C27A]"
                >
                  <Link to="/contact">
                    Get Free Consultation{" "}
                    <ArrowRight className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </Button>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group border border-[#292526]/20 bg-white/80 px-6 py-3.5 font-display text-sm font-semibold text-[#1F1F1F] shadow-sm transition-colors hover:bg-[#C89B5A]/10 hover:border-[#C89B5A]/50"
                >
                  <a href="#services">
                    Explore Our Services{" "}
                    <MoveDownRight className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* 5. Micro-label Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="mt-9 text-[11px] font-bold uppercase tracking-widest text-[#6B6868]"
            >
              Strategy{" "}
              <span className="mx-2 text-[#C89B5A]">•</span> Technology{" "}
              <span className="mx-2 text-[#C89B5A]">•</span> Marketing{" "}
              <span className="mx-2 text-[#C89B5A]">•</span> Execution
            </motion.p>
          </div>

          {/* Right Column — Growth Command Center Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
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
