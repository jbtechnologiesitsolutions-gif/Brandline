import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
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
    <main className="overflow-hidden bg-[#F8F7F5] text-[#1F1F1F]">
      {/* ── Full-screen Home Banner ───────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#0E2133]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="BrandlineTech digital marketing and SEO home banner"
        >
          <source src="/brandline-home-banner.mp4" type="video/mp4" />
        </video>

        {/* Readability overlays while keeping the video fully visible */}
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

        <div className="section-shell relative z-10 flex min-h-[100svh] w-full items-center py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E4C27A] sm:text-xs"
            >
              E-Commerce • Marketplaces • Digital Growth
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              Grow Your Brand
              <span className="block bg-gradient-to-r from-[#E4C27A] via-[#F2D79A] to-[#C89B5A] bg-clip-text text-transparent">
                Across Every Digital Shelf.
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl font-display text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl"
            >
              Your products. Every marketplace. One growth partner.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 md:text-lg"
            >
              From marketplace onboarding and catalog management to advertising,
              inventory coordination and D2C growth, BrandlineTech helps businesses
              build, manage and scale their online operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Button
                asChild
                variant="gold"
                size="lg"
                className="group w-full bg-[#C89B5A] px-7 py-3.5 font-display text-sm font-bold text-[#1F1F1F] shadow-gold transition-colors hover:bg-[#E4C27A] sm:w-auto"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/50 bg-white/10 px-7 py-3.5 font-display text-sm font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-[#1F1F1F] sm:w-auto"
              >
                <a href="#services">Explore Our Services</a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="mt-8 text-[10px] font-bold uppercase leading-5 tracking-[0.18em] text-white/70 sm:text-[11px]"
            >
              Strategy <span className="mx-2 text-[#E4C27A]">•</span> Technology
              <span className="mx-2 text-[#E4C27A]">•</span> Marketing
              <span className="mx-2 text-[#E4C27A]">•</span> Execution
            </motion.p>
          </div>
        </div>

        <a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white sm:bottom-7"
        >
          <span className="block h-10 w-6 rounded-full border border-white/50 p-1">
            <span className="mx-auto block h-2 w-1 animate-bounce rounded-full bg-[#E4C27A]" />
          </span>
        </a>
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
