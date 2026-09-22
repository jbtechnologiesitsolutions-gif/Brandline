import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Megaphone,
  MoveDownRight,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
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
  const headlineWords = ["We", "build", "digital", "products", "that", "move", "businesses", "forward."];

  const services = [
    {
      icon: Code2,
      number: "01",
      title: "Web Development",
      description: "Fast, conversion-focused websites and web applications built around your business.",
    },
    {
      icon: Smartphone,
      number: "02",
      title: "Mobile Apps",
      description: "Modern Flutter applications for Android and iOS from one scalable codebase.",
    },
    {
      icon: ShoppingBag,
      number: "03",
      title: "E-commerce",
      description: "Customer experiences, seller systems and marketplace solutions that scale.",
    },
    {
      icon: Megaphone,
      number: "04",
      title: "Digital Growth",
      description: "Performance marketing, automation and growth systems that turn traffic into action.",
    },
  ];

  const technologies = [
    "Flutter",
    "React",
    "TypeScript",
    "Laravel",
    "Node.js",
    "AI",
    "MySQL",
    "Figma",
  ];

  return (
    <main className="overflow-hidden bg-[#070707] text-white">
      {/* ── Animate-UI inspired hero ─────────────────────────────────────── */}
      <section className="relative isolate min-h-[760px] overflow-hidden border-b border-white/10 bg-[#070707]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#C89B5A]/10 blur-[120px]" />
          <div className="absolute bottom-[-18rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#C89B5A]/5 blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>

        <div className="section-shell relative flex min-h-[760px] flex-col items-center justify-center py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 shadow-[0_0_35px_rgba(200,155,90,.08)] backdrop-blur"
          >
            <Sparkles className="size-3.5 text-[#C89B5A]" />
            Digital products • ecommerce • growth
          </motion.div>

          <h1 className="mx-auto mt-8 max-w-6xl font-display text-[clamp(3.4rem,8vw,7.8rem)] font-extrabold leading-[0.92] tracking-[-0.055em]">
            {headlineWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.055,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`mr-[0.22em] inline-block ${
                  index >= 5
                    ? "bg-gradient-to-r from-[#C89B5A] via-[#F0D08A] to-[#C89B5A] bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7 }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
          >
            We design, build and grow digital experiences for startups and businesses —
            from websites and mobile apps to ecommerce platforms and AI-powered systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.82 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-xl bg-[#C89B5A] px-7 font-display text-sm font-bold text-[#111] shadow-[0_12px_45px_-15px_rgba(200,155,90,.75)] hover:bg-[#E4C27A]"
              >
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-white/15 bg-white/[0.04] px-7 font-display text-sm font-semibold text-white hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <a href="#services">
                  Explore services
                  <MoveDownRight className="ml-1.5 size-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/30"
          >
            <span>Strategy</span>
            <span className="text-[#C89B5A]">•</span>
            <span>Design</span>
            <span className="text-[#C89B5A]">•</span>
            <span>Technology</span>
            <span className="text-[#C89B5A]">•</span>
            <span>Growth</span>
          </motion.div>
        </div>
      </section>

      {/* ── Technology marquee ──────────────────────────────────────────── */}
      <section className="overflow-hidden border-b border-white/10 bg-[#070707] py-7">
        <div className="overflow-hidden">
          <div className="marquee-track gap-3">
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mx-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/45"
              >
                <span className="size-1.5 rounded-full bg-[#C89B5A]" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service cards ───────────────────────────────────────────────── */}
      <section id="services" className="relative bg-[#0b0b0b] py-24 md:py-32">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89B5A]">
              What we build
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              One team for your digital growth.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/45">
              From the first screen to the final conversion, we build the digital systems
              your business needs to move forward.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative min-h-[310px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-[#C89B5A]/35 hover:bg-white/[0.055]"
                >
                  <div className="absolute -right-12 -top-12 size-32 rounded-full bg-[#C89B5A]/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative flex items-center justify-between">
                    <div className="grid size-11 place-items-center rounded-xl border border-[#C89B5A]/20 bg-[#C89B5A]/10 text-[#C89B5A] transition-all duration-300 group-hover:bg-[#C89B5A] group-hover:text-[#111]">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-white/20">{service.number}</span>
                  </div>

                  <h3 className="relative mt-16 font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-white/40">
                    {service.description}
                  </p>

                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs font-semibold text-white/30 transition-colors group-hover:text-[#C89B5A]">
                    Explore
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proof / capabilities ───────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-[#070707] py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89B5A]">
              Built to move
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Strategy, technology and execution working as one.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Responsive by default",
              "Scalable architecture",
              "Conversion-focused UX",
              "AI-ready workflows",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold text-white/55"
              >
                <CheckCircle2 className="size-4 text-[#C89B5A]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Existing business sections ─────────────────────────────────── */}
      <div className="bg-[#F8F7F5] text-[#1F1F1F]">
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
      </div>
    </main>
  );
}

