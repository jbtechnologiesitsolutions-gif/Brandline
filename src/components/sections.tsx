import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleCheck,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  BookOpen,
  Calculator,
  Store,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ConsultationForm } from "@/components/consultation-form";
import {
  comparison,
  ecomTools,
  faqs,
  goalGroups,
  growthFramework,
  industries,
  journeyStages,
  marketplaceServices,
  packages,
  platformDetails,
  platforms,
  processSteps,
  quickCommercePlatforms,
  resourceArticles,
  resourceCategories,
  services,
  whyUs,
} from "@/lib/site-data";

// ─── Shared primitives ────────────────────────────────────────────────────────
export function Eyebrow({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <p className={`label-caps ${inverse ? "text-gold" : "text-muted-foreground"}`}>
      {children}
    </p>
  );
}

export function Heading({
  children,
  inverse = false,
  className = "",
}: {
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`section-title mt-5 max-w-4xl ${inverse ? "text-primary-foreground" : "text-foreground"} ${className}`}
    >
      {children}
    </h2>
  );
}

export function ArrowLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={to}
      className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-foreground"
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

// ─── Growth Dashboard ─────────────────────────────────────────────────────────
export function GrowthDashboard({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`float-in relative overflow-hidden rounded-2xl border p-5 shadow-card sm:p-7 ${dark ? "border-primary-foreground/15 bg-dark-secondary text-primary-foreground" : "bg-card"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-current/10 pb-4">
        <div>
          <p className="text-[11px] opacity-50">Ecommerce Overview</p>
          <p className="mt-1 font-display text-base font-bold">Growth Command Center</p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold text-gold">
          <span className="size-1.5 animate-pulse rounded-full bg-gold" />
          Live View
        </span>
      </div>

      {/* KPIs */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          ["Total Sales", "₹24.8L", "+28.4%", true],
          ["Orders", "12,480", "+14.2%", false],
          ["Products", "2,450+", "Active", false],
          ["Ad ROAS", "4.8x", "+0.6x", false],
        ].map(([k, v, sub, highlight]) => (
          <div
            key={k as string}
            className={`rounded-xl border border-current/10 p-4 ${highlight ? "bg-gold/15" : ""}`}
          >
            <p className="text-[10px] opacity-55">{k as string}</p>
            <p className="mt-1.5 font-display text-xl font-bold sm:text-2xl">{v as string}</p>
            <p className={`mt-1 text-[10px] font-semibold ${highlight ? "text-gold" : "opacity-45"}`}>
              {sub as string}
            </p>
          </div>
        ))}
      </div>

      {/* Mini KPI row */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {[
          ["Inventory Health", "92%"],
          ["Marketplace", "6 Active"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-current/10 px-4 py-3">
            <p className="text-[10px] opacity-50">{k}</p>
            <p className="mt-1 font-display text-sm font-bold">{v}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-3 rounded-xl border border-current/10 p-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] opacity-50">Marketplace performance</span>
          <span className="text-[10px] font-bold text-gold">+18.4% MoM</span>
        </div>
        <svg
          viewBox="0 0 500 120"
          className="mt-3 w-full"
          aria-label="Upward growth chart — illustrative placeholder"
          role="img"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 C55 88,75 100,115 76 S185 68,220 57 S285 72,330 38 S405 52,500 11 L500 120 L0 120 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M0 100 C55 88,75 100,115 76 S185 68,220 57 S285 72,330 38 S405 52,500 11"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="18"
          />
          <path
            d="M0 100 C55 88,75 100,115 76 S185 68,220 57 S285 72,330 38 S405 52,500 11"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            className="chart-draw"
          />
        </svg>
        <div className="mt-2 flex justify-between text-[9px] opacity-40">
          <span>Amazon</span>
          <span>Flipkart</span>
          <span>Meesho</span>
          <span>Shopify</span>
        </div>
      </div>

      <p className="mt-3 text-[9px] opacity-30 text-center">
        Illustrative placeholder — not BrandlineTech performance data
      </p>
    </div>
  );
}

// ─── Trust / Marketplace Strip ────────────────────────────────────────────────
export function TrustStrip() {
  const all = [...platforms, ...quickCommercePlatforms];
  const doubled = [...all, ...all];
  return (
    <section className="border-y bg-card py-10">
      <div className="section-shell">
        <p className="text-center text-sm font-semibold text-foreground">
          Built for the marketplaces where your customers shop.
        </p>
      </div>
      <div className="mt-7 overflow-hidden">
        <div className="marquee-track">
          {doubled.map((x, i) => (
            <span
              key={`${x}-${i}`}
              className="snap-item flex shrink-0 items-center gap-2 rounded-lg border bg-card px-5 py-2.5 font-display text-sm font-bold text-muted-foreground mx-2"
            >
              <span className="size-2 rounded-full bg-gold/60" />
              {x}
            </span>
          ))}
        </div>
      </div>
      <div className="section-shell mt-5">
        <p className="text-center text-xs text-muted-foreground">
          Platform expertise and operational support. No official partnership claim is implied.
        </p>
      </div>
    </section>
  );
}

// ─── Who We Help ──────────────────────────────────────────────────────────────
export function WhoWeHelp() {
  return (
    <section className="section-pad bg-surface" id="solutions">
      <div className="section-shell">
        <Eyebrow>Ecommerce journey</Eyebrow>
        <Heading>Built for every stage of your ecommerce journey.</Heading>
        <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-8">
          Whether you're just starting out or scaling to multiple platforms, we have the right support for your business.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {journeyStages.map((stage) => (
            <article
              key={stage.n}
              className="group relative flex flex-col rounded-2xl border bg-card p-7 shadow-card card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gold/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/10" />
              <span className="label-caps text-gold">{stage.n}</span>
              <h3 className="mt-5 text-xl font-bold">{stage.label}</h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stage.description}</p>
              <ul className="mt-6 space-y-2.5 border-t pt-5">
                {stage.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <ChevronRight className="size-3.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Grid ────────────────────────────────────────────────────────────
export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-pad" id="services">
      <div className="section-shell">
        <Eyebrow>Integrated capabilities</Eyebrow>
        <Heading>Everything you need to grow online.</Heading>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          From marketplace operations to digital marketing and D2C development, we provide end-to-end ecommerce growth support.
        </p>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <article
              id={s.id}
              key={s.title}
              className="group flex scroll-mt-24 flex-col rounded-2xl border bg-card p-7 shadow-card card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="label-caps text-muted-foreground">
                  {s.number} / {s.eyebrow}
                </span>
                <div className="grid size-9 place-items-center rounded-lg bg-gold/10">
                  <s.icon className="size-4 text-gold" />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.description}</p>
              <ul
                className={`mt-7 grid gap-x-4 gap-y-2.5 text-sm ${compact ? "" : "sm:grid-cols-2"}`}
              >
                {s.items.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="size-1 shrink-0 rounded-full bg-gold" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <ArrowLink to={s.href}>{s.cta}</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Growth Framework ─────────────────────────────────────────────────────────
export function GrowthFramework() {
  return (
    <section className="section-pad bg-dark text-primary-foreground">
      <div className="section-shell">
        <Eyebrow inverse>Our framework</Eyebrow>
        <Heading inverse>Our Ecommerce Growth Framework.</Heading>
        <p className="mt-5 max-w-2xl text-primary-foreground/60 leading-7">
          A structured approach to taking brands from launch to scale across every digital channel.
        </p>
        <div className="relative mt-14 grid gap-0 md:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20 md:block" />
          {growthFramework.map((step, i) => (
            <article key={step.n} className="relative flex flex-col">
              {/* Number bubble */}
              <div className="relative z-10 flex size-16 items-center justify-center rounded-full border-2 border-gold/40 bg-dark shadow-gold">
                <step.icon className="size-6 text-gold" />
              </div>
              {i < growthFramework.length - 1 && (
                <div className="absolute left-16 top-8 hidden h-px flex-1 bg-gold/20 md:block" style={{ right: 0 }} />
              )}
              <span className="mt-5 label-caps text-gold">{step.n}</span>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <ul className="mt-4 space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/55">
                    <span className="size-1 rounded-full bg-gold/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Marketplace Feature (tabbed dashboard) ───────────────────────────────────
export function MarketplaceFeature() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["Overview", "Products", "Orders", "Inventory", "Ads", "Returns", "Analytics"];

  const tabData: Record<string, { label: string; value: string; sub: string }[]> = {
    overview: [
      { label: "Active Products", value: "2,450+", sub: "Across all platforms" },
      { label: "Orders Processed", value: "12,480", sub: "This period" },
      { label: "Revenue Tracked", value: "₹24.8L", sub: "Placeholder" },
      { label: "Marketplace Count", value: "6", sub: "Active" },
    ],
    products: [
      { label: "Total SKUs", value: "2,450", sub: "Managed" },
      { label: "Optimized Listings", value: "98%", sub: "Quality score" },
      { label: "A+ Content", value: "340+", sub: "Products" },
      { label: "Catalog Health", value: "96%", sub: "Score" },
    ],
    orders: [
      { label: "Orders", value: "12,480", sub: "Processed" },
      { label: "Fulfillment Rate", value: "99.1%", sub: "On-time" },
      { label: "Returns", value: "2.4%", sub: "Return rate" },
      { label: "Avg. Order Value", value: "₹1,990", sub: "Placeholder" },
    ],
    inventory: [
      { label: "Inventory Health", value: "92%", sub: "Score" },
      { label: "In Stock", value: "2,240", sub: "SKUs" },
      { label: "Low Stock", value: "84", sub: "SKUs flagged" },
      { label: "Stockouts", value: "12", sub: "This period" },
    ],
    ads: [
      { label: "Ad ROAS", value: "4.8x", sub: "Return on ad spend" },
      { label: "Campaigns", value: "24", sub: "Active" },
      { label: "Impressions", value: "1.2M", sub: "This period" },
      { label: "CTR", value: "3.6%", sub: "Click-through rate" },
    ],
    returns: [
      { label: "Open Returns", value: "48", sub: "In review" },
      { label: "Claims Filed", value: "16", sub: "This period" },
      { label: "Recovery Rate", value: "71%", sub: "Placeholder" },
      { label: "Avg. Resolution", value: "3.2d", sub: "Turnaround" },
    ],
    analytics: [
      { label: "Visibility Score", value: "+42%", sub: "MoM growth" },
      { label: "Conversion Rate", value: "3.8%", sub: "Average" },
      { label: "Competitor Index", value: "Top 12%", sub: "Category rank" },
      { label: "Growth Trend", value: "↑ Upward", sub: "MoM" },
    ],
  };

  const current = tabData[activeTab] || tabData.overview;

  return (
    <section className="section-pad" id="marketplaces">
      <div className="section-shell">
        <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Marketplace operations</Eyebrow>
            <Heading>
              Your marketplace.{" "}
              <span className="text-gradient-gold">Our expertise.</span>
            </Heading>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
              Managing an online marketplace account involves much more than uploading products. We help businesses coordinate catalogs, pricing, inventory, orders, advertising and account performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {platforms.slice(0, 8).map((p) => (
                <span
                  key={p}
                  className="rounded-lg border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
            <Button asChild variant="gold" size="lg" className="mt-8">
              <a href="#contact">
                Explore Marketplace Services <ArrowRight />
              </a>
            </Button>
          </div>

          {/* Tabbed dashboard */}
          <div className="rounded-2xl border bg-card shadow-card overflow-hidden">
            <div className="flex overflow-x-auto border-b bg-surface">
              {tabs.map((tab) => {
                const key = tab.toLowerCase();
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(key)}
                    className={`shrink-0 px-4 py-3 text-xs font-bold transition-colors ${
                      activeTab === key
                        ? "border-b-2 border-gold text-gold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-px bg-border p-px">
              {current.map((item) => (
                <div key={item.label} className="bg-card p-5">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="mt-2 font-display text-2xl font-bold">{item.value}</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <p className="text-[9px] text-muted-foreground text-center">
                Illustrative dashboard interface — not BrandlineTech client data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Marketplace Services (12-card grid) ─────────────────────────────────────
export function MarketplaceServices() {
  return (
    <section className="section-pad bg-surface">
      <div className="section-shell">
        <Eyebrow>Operational coverage</Eyebrow>
        <Heading>From listing to growth, we manage the moving parts.</Heading>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {marketplaceServices.map((svc, i) => (
            <article
              key={svc.title}
              className="group flex flex-col gap-3 rounded-xl border bg-card p-6 shadow-card card-hover"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-10 place-items-center rounded-lg bg-gold/10">
                  <svc.icon className="size-5 text-gold" />
                </div>
                <span className="text-xs font-bold text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-2 font-display text-base font-bold">{svc.title}</h3>
              <p className="text-xs leading-5 text-muted-foreground">{svc.description}</p>
              <ArrowRight className="mt-auto size-4 text-gold transition-transform group-hover:translate-x-1" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Platform Section ─────────────────────────────────────────────────────────
export function PlatformSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <Eyebrow>Marketplace coverage</Eyebrow>
        <Heading>Sell where your customers shop.</Heading>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-7">
          We support seller operations across major Indian and global ecommerce platforms. Platform expertise, not official partnership.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {platformDetails.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-xl border bg-card p-6 shadow-card card-hover"
              style={{ borderTopColor: p.color, borderTopWidth: 3 }}
            >
              <div
                className="flex size-10 items-center justify-center rounded-lg text-sm font-bold"
                style={{ background: p.bg, color: p.color }}
              >
                {p.name.slice(0, 2)}
              </div>
              <h3 className="mt-4 font-display text-base font-bold">{p.name}</h3>
              <ul className="mt-4 space-y-1.5">
                {p.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="size-1 rounded-full bg-gold/60" />
                    {cap}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Quick-commerce note */}
        <div className="mt-10 rounded-xl border bg-surface p-6">
          <p className="label-caps text-muted-foreground">Also Available</p>
          <p className="mt-2 font-display font-bold">Quick-Commerce Platforms</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {quickCommercePlatforms.map((p) => (
              <span key={p} className="rounded-lg border bg-card px-4 py-2 text-sm font-semibold">
                {p}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Quick-commerce support available based on category eligibility and business requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Seller Audit CTA ─────────────────────────────────────────────────────────
export function SellerAudit() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="subtle-grid bg-dark py-20 text-primary-foreground" id="seller-audit">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow inverse>Seller audit</Eyebrow>
            <h2 className="section-title mt-5 text-primary-foreground max-w-2xl">
              Not sure where your marketplace is{" "}
              <span className="text-gold">losing sales?</span>
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-primary-foreground/60">
              Get a structured review of your marketplace presence and identify opportunities across catalog, visibility, pricing, advertising and account operations.
            </p>
            <div className="mt-10 space-y-4">
              {[
                "Catalog & listing quality review",
                "Keyword & SEO gap analysis",
                "Advertising performance check",
                "Account health assessment",
                "Pricing & competitor comparison",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="grid size-6 place-items-center rounded-full bg-gold/20">
                    <Check className="size-3 text-gold" />
                  </div>
                  <span className="text-sm text-primary-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-primary-foreground/10 bg-dark-secondary p-7">
            <p className="font-display text-xl font-bold">Request a Seller Audit</p>
            <p className="mt-2 text-sm text-primary-foreground/50">
              Fill in your details and we'll get back to you.
            </p>
            {submitted ? (
              <div className="mt-8 rounded-xl border border-gold/30 bg-gold/10 p-6 text-center">
                <CircleCheck className="mx-auto size-10 text-gold" />
                <p className="mt-3 font-bold text-gold">Request Received</p>
                <p className="mt-2 text-sm text-primary-foreground/60">
                  We'll review your details and reach out within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    placeholder="Full Name *"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <input
                    name="business"
                    placeholder="Business Name"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Phone *"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email *"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <select
                  name="marketplace"
                  className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <option value="">Select Marketplace</option>
                  {["Amazon", "Flipkart", "Meesho", "Myntra", "AJIO", "Multiple Marketplaces", "Other"].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="skus"
                    placeholder="Number of SKUs"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <input
                    name="sales"
                    placeholder="Current Monthly Sales"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <textarea
                  name="requirements"
                  rows={3}
                  placeholder="Requirements / anything else you'd like us to know"
                  className="w-full rounded-lg border border-primary-foreground/15 bg-dark px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Request Seller Audit <ArrowRight />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Section ──────────────────────────────────────────────────────────
export function PricingSection({ comparisonTable = true }: { comparisonTable?: boolean }) {
  return (
    <section className="bg-surface section-pad" id="packages">
      <div className="section-shell">
        <Eyebrow>Packages</Eyebrow>
        <Heading>Choose the support your business needs.</Heading>
        <p className="mt-5 text-muted-foreground">
          Choose a plan based on your marketplace scale and operational requirements.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border bg-card p-7 shadow-card card-hover"
            >
              <p className="label-caps text-gold">{p.name} Package</p>
              <div className="mt-6">
                <span className="font-display text-3xl font-bold">{p.price}</span>
                <span className="ml-2 text-sm text-muted-foreground">{p.suffix}</span>
              </div>
              <p className="mt-3 min-h-10 text-sm text-muted-foreground">{p.audience}</p>
              <ul className="mt-7 space-y-3 border-t pt-6">
                {p.features.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {x}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="gold"
                size="lg"
                className="mt-8 w-full"
              >
                <a href="#contact">{p.cta}</a>
              </Button>
            </article>
          ))}
        </div>
        {comparisonTable && <ComparisonTable />}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          All packages can be customized. Contact us to discuss your specific requirements.
        </p>
      </div>
    </section>
  );
}

export function ComparisonTable() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold">Compare packages</h3>
      <div className="mt-7 overflow-x-auto rounded-xl border shadow-card">
        <table className="w-full min-w-xl border-collapse bg-card text-left text-sm">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="p-4 font-semibold">Capability</th>
              <th className="p-4 font-semibold">Basic</th>
              <th className="p-4 font-semibold">Elite</th>
              <th className="p-4 font-semibold">Premium</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((r) => (
              <tr key={r[0]} className="border-t hover:bg-surface transition-colors">
                <th className="p-4 font-medium">{r[0]}</th>
                {r.slice(1).map((c, i) => (
                  <td key={i} className="p-4 text-muted-foreground">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Addons ───────────────────────────────────────────────────────────────────
export function Addons() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <Eyebrow>Custom support</Eyebrow>
            <Heading>Need something specific?</Heading>
            <p className="mt-5 text-muted-foreground">
              Build a package around your exact business goals and requirements.
            </p>
            <Button asChild className="mt-7" size="lg">
              <a href="#contact">
                Build a Custom Package <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Product Photography", "₹500 / product", "Professional product photography and editing for marketplace-ready images."],
              ["Video Content", "Starting ₹5,000", "Listing videos and promotional content for product pages and ads."],
              ["Influencer Campaigns", "Customized pricing", "Influencer-based campaigns designed around your product and audience."],
            ].map((x) => (
              <article key={x[0]} className="rounded-xl border bg-card p-6 card-hover">
                <h3 className="font-bold">{x[0]}</h3>
                <p className="mt-4 font-display text-lg font-bold text-gold">{x[1]}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export function Stats() {
  return (
    <section className="bg-dark py-16 text-primary-foreground">
      <div className="section-shell">
        <p className="text-center label-caps text-gold mb-10">Built for measurable growth</p>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 lg:grid-cols-4">
          {[
            ["[XX]+", "Brands Supported"],
            ["[XX]+", "Products Managed"],
            ["[XX]+", "Marketplace Accounts"],
            ["[XX]+", "Campaigns Managed"],
          ].map((x) => (
            <div key={x[1]} className="bg-dark p-8 text-center">
              <p className="font-display text-4xl font-bold text-gold sm:text-5xl counter-animate">
                {x[0]}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/50">
                {x[1]}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-primary-foreground/30">
          Figures are editable placeholders — not published performance claims.
        </p>
      </div>
    </section>
  );
}

// ─── Why BrandlineTech ────────────────────────────────────────────────────────
export function WhyIndustries() {
  return (
    <>
      <section className="section-pad" id="why-us">
        <div className="section-shell">
          <Eyebrow>Why BrandlineTech</Eyebrow>
          <Heading>Why businesses choose a dedicated ecommerce partner.</Heading>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map(([title, text, Icon], i) => (
              <article
                key={title as string}
                className="group rounded-xl border bg-card p-6 card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-lg bg-gold/10">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <span className="text-xs text-muted-foreground/40">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y bg-surface py-16">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <Eyebrow>Category coverage</Eyebrow>
              <Heading>We understand ecommerce across categories.</Heading>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((x) => (
                <span
                  key={x}
                  className="rounded-xl border bg-card px-5 py-3 text-sm font-semibold card-hover"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Capabilities shown by sector; no specific client engagement claim is implied.
          </p>
        </div>
      </section>
    </>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────
export function CaseStudies() {
  return (
    <section className="section-pad bg-surface">
      <div className="section-shell">
        <Eyebrow>Results</Eyebrow>
        <Heading>Selected Case Studies.</Heading>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-7">
          Detailed case studies with verified results are being compiled. Check back soon.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <article
              key={n}
              className="flex flex-col rounded-xl border border-dashed bg-card p-7 text-center"
            >
              <div className="mx-auto grid size-12 place-items-center rounded-full bg-gold/10">
                <BookOpen className="size-5 text-gold/60" />
              </div>
              <p className="mt-5 text-sm font-semibold text-muted-foreground">
                Case study content coming soon
              </p>
              <p className="mt-2 text-xs text-muted-foreground/60">
                Real results will be shared with client approval.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── D2C Section ──────────────────────────────────────────────────────────────
export function D2CSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>D2C development</Eyebrow>
            <Heading>
              Don't build your entire business on someone else's marketplace.
            </Heading>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
              Build your own digital storefront and create a direct relationship with your customers. Own your data, your pricing and your brand experience.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Shopify",
                "WooCommerce",
                "WordPress",
                "Custom E-commerce",
                "Payment Integration",
                "Analytics",
                "CRM Integration",
                "Marketing Automation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <Check className="size-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" size="lg" className="mt-8">
              <a href="#contact">
                Build Your D2C Store <ArrowRight />
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="rounded-2xl border bg-card p-7 shadow-card">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-red-400/60" />
                <span className="size-3 rounded-full bg-yellow-400/60" />
                <span className="size-3 rounded-full bg-green-400/60" />
              </div>
              <div className="h-6 flex-1 rounded-md bg-surface" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["Shopify", "WooCommerce", "WordPress", "Custom", "Landing\nPages", "D2C\nStore"].map((x) => (
                <div
                  key={x}
                  className="flex aspect-square flex-col items-center justify-center rounded-xl border bg-surface p-3 text-center"
                >
                  <Store className="size-5 text-gold/70 mb-1" />
                  <span className="text-[10px] font-bold leading-tight">{x}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gold/10 p-4 text-center">
              <Smartphone className="mx-auto size-5 text-gold" />
              <p className="mt-2 text-xs font-bold">Mobile-First Design</p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                Optimized for all devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Digital Marketing ────────────────────────────────────────────────────────
export function DigitalMarketing() {
  return (
    <section className="bg-dark section-pad text-primary-foreground">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow inverse>Digital marketing</Eyebrow>
          <Heading inverse>
            Marketplace growth doesn't stop at the marketplace.
          </Heading>
          <p className="mt-6 max-w-xl leading-8 text-primary-foreground/60">
            Build visibility, attract customers and drive consistent demand through structured digital marketing across all channels.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-primary-foreground/70">
            {["SEO", "Google Ads", "Meta Ads", "Social Media", "Influencer Marketing", "Content Marketing", "Email Marketing", "ORM"].map((x) => (
              <span key={x} className="flex items-center gap-2.5">
                <span className="size-1.5 rounded-full bg-gold" />
                {x}
              </span>
            ))}
          </div>
          <Button asChild variant="gold" size="lg" className="mt-8">
            <a href="#contact">
              Explore Digital Marketing <ArrowRight />
            </a>
          </Button>
        </div>

        <div className="rounded-2xl border border-primary-foreground/10 bg-dark-secondary p-6">
          <p className="text-xs font-bold text-primary-foreground/40 uppercase tracking-wider mb-5">
            Marketing Analytics
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Organic Traffic", "+00%"],
              ["Campaign Reach", "00K"],
              ["Leads Generated", "000+"],
              ["Conversion Rate", "00%"],
            ].map((x) => (
              <div key={x[0]} className="rounded-xl border border-primary-foreground/10 p-5">
                <p className="text-xs text-primary-foreground/40">{x[0]}</p>
                <p className="mt-2 font-display text-2xl font-bold text-gold">{x[1]}</p>
              </div>
            ))}
          </div>
          {/* mini chart */}
          <div className="mt-4 rounded-xl border border-primary-foreground/10 p-4">
            <p className="text-[10px] text-primary-foreground/40 mb-3">Channel Performance</p>
            <svg viewBox="0 0 400 80" className="w-full" aria-label="Marketing analytics chart — placeholder" role="img">
              <path d="M0 70 C50 55,80 70,120 48 S190 38,230 28 S300 42,340 15 S380 28,400 8" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="16" />
              <path d="M0 70 C50 55,80 70,120 48 S190 38,230 28 S300 42,340 15 S380 28,400 8" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" className="chart-draw" />
            </svg>
          </div>
          <p className="mt-3 text-[9px] text-primary-foreground/30 text-center">
            Illustrative placeholder — not BrandlineTech performance data
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Technology Section ───────────────────────────────────────────────────────
export function WebTechnology() {
  return (
    <section className="section-pad bg-surface">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Technology</Eyebrow>
            <Heading>Technology that supports your growth.</Heading>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
              From high-converting storefronts to analytics integrations, we work with the platforms that power modern ecommerce.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#contact">
                Start a Web Project <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border">
            {[
              "Shopify",
              "WooCommerce",
              "WordPress",
              "Google Analytics",
              "Meta Ads",
              "Google Ads",
              "Custom Development",
              "UI/UX Design",
            ].map((x) => (
              <div key={x} className="bg-card p-5 font-display text-sm font-bold hover:bg-surface transition-colors">
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process Section ──────────────────────────────────────────────────────────
export function ProcessSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <Eyebrow>How we work</Eyebrow>
        <Heading>How we work with your business.</Heading>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-7">
          A structured, transparent approach designed to turn digital activity into measurable business progress.
        </p>
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 before:absolute before:left-0 before:right-0 before:top-5 before:hidden before:h-px before:bg-border lg:before:block">
          {processSteps.map(([title, text], i) => (
            <article key={title} className="relative">
              <span className="relative z-10 grid size-10 place-items-center rounded-full border-2 border-gold/40 bg-background font-display text-xs font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Goal Section ─────────────────────────────────────────────────────────────
export function GoalSection() {
  return (
    <section className="border-y bg-surface section-pad">
      <div className="section-shell">
        <Eyebrow>Outcome-led services</Eyebrow>
        <Heading>Built around your business goals.</Heading>
        <div className="mt-14 divide-y border-y">
          {goalGroups.map((g) => (
            <div
              key={g.n}
              className="grid gap-3 py-7 sm:grid-cols-[5rem_12rem_1fr] sm:items-center hover:bg-surface/50 transition-colors -mx-4 px-4 rounded-lg"
            >
              <span className="label-caps text-gold">{g.n}</span>
              <h3 className="text-xl font-bold">{g.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{g.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Resources / Blog ─────────────────────────────────────────────────────────
export function ResourcesSection() {
  return (
    <section className="section-pad bg-surface" id="resources">
      <div className="section-shell">
        <Eyebrow>Resources</Eyebrow>
        <Heading>Ecommerce Guides & Insights.</Heading>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 platform-scroll">
          {resourceCategories.map((cat) => (
            <span
              key={cat}
              className="snap-item rounded-full border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resourceArticles.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col rounded-xl border bg-card p-6 shadow-card card-hover"
            >
              <span className="label-caps text-gold">{article.category}</span>
              <h3 className="mt-4 font-display text-base font-bold leading-snug">
                {article.title}
              </h3>
              <p className="mt-3 text-xs leading-5 text-muted-foreground flex-1">
                {article.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-muted-foreground/60">{article.readTime}</span>
                <BookOpen className="size-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center">
          Full articles available soon. Content is for informational purposes.
        </p>
      </div>
    </section>
  );
}

// ─── Ecommerce Tools ──────────────────────────────────────────────────────────
export function ToolsSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <Eyebrow>Free tools</Eyebrow>
        <Heading>Free Ecommerce Tools.</Heading>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-7">
          Calculators and tools to help you make informed decisions about your marketplace business.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ecomTools.map((tool) => (
            <article
              key={tool.title}
              className="group flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-card card-hover"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-lg bg-gold/10">
                  <tool.icon className="size-5 text-gold" />
                </div>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-display text-base font-bold">{tool.title}</h3>
              <p className="text-xs leading-5 text-muted-foreground">{tool.description}</p>
              <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-muted-foreground/50">
                <Calculator className="size-3.5" />
                Free to use
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Block ──────────────────────────────────────────────────────────────
export function AboutBlock() {
  return (
    <section className="section-pad bg-surface" id="about">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>About BrandlineTech</Eyebrow>
          <Heading>
            More than a service provider.{" "}
            <span className="text-gradient-gold">A digital growth partner.</span>
          </Heading>
          <p className="mt-6 leading-8 text-muted-foreground">
            BrandlineTech brings together ecommerce operations, marketplace management, digital marketing and technology to help businesses establish and scale their online presence.
          </p>
          <p className="mt-4 leading-8 text-muted-foreground">
            From establishing an online marketplace presence to building D2C stores and managing digital channels, our approach combines structured strategy with practical execution.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-8">
            <a href="#contact">
              Let's Work Together <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="rounded-2xl border bg-card p-7 shadow-card sm:p-9">
          <div className="grid gap-3 sm:grid-cols-2">
            {["Strategy", "Technology", "Marketing", "Execution"].map((x) => (
              <div
                key={x}
                className="rounded-xl border bg-surface p-5 text-center font-display font-bold uppercase tracking-wide text-sm"
              >
                {x}
              </div>
            ))}
          </div>
          <div className="my-6 text-center text-2xl text-gold">↓</div>
          <div className="rounded-xl bg-primary p-7 text-center font-display text-2xl font-bold text-primary-foreground">
            Ecommerce Growth
          </div>
          <div className="mt-4 rounded-xl bg-gold/10 p-4 text-center">
            <p className="text-xs font-bold text-gold">
              "Your products. Every marketplace. One growth partner."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Value Section ────────────────────────────────────────────────────────────
export function ValueSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <Eyebrow>Our commitment</Eyebrow>
        <Heading>Partnership without the performance theatre.</Heading>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Clear ownership", "Defined responsibilities and visible progress across every engagement."],
            ["Commercial context", "Recommendations shaped around your products, channels and operating reality."],
            ["Continuous improvement", "Regular review, practical learning and focused optimization over time."],
          ].map((x) => (
            <article key={x[0]} className="border-t-2 border-gold pt-6">
              <h3 className="text-xl font-bold">{x[0]}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{x[1]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export function FAQ() {
  return (
    <section className="section-pad bg-surface" id="faq">
      <div className="section-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <Eyebrow>Common questions</Eyebrow>
          <Heading>Answers before we begin.</Heading>
          <p className="mt-5 text-muted-foreground leading-7">
            Have more questions? Contact us directly.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-7">
            <a href="#contact">
              Contact Us <ArrowRight />
            </a>
          </Button>
        </div>
        <Accordion type="single" collapsible className="border-t">
          {faqs.map(([q, a], i) => (
            <AccordionItem value={`q-${i}`} key={q}>
              <AccordionTrigger className="py-6 text-base font-bold hover:no-underline text-left">
                {q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
export function CTASection() {
  return (
    <section className="subtle-grid bg-dark py-24 text-primary-foreground">
      <div className="section-shell text-center">
        <Eyebrow inverse>Your next move</Eyebrow>
        <h2 className="section-title mt-5 text-primary-foreground mx-auto max-w-3xl">
          Ready to grow your online business?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/60 leading-7">
          Tell us where you are today and where you want to go. Let's build the right ecommerce growth plan for your business.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <a href="#contact">
              Get Free Consultation <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="darkOutline" size="lg">
            <a href="/#seller-audit">Request Seller Audit</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export function ContactSection() {
  return (
    <section className="section-pad" id="contact">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <Heading>Let's talk about your ecommerce goals.</Heading>
            <div className="mt-9 space-y-6 text-sm">
              <ContactLine icon={Phone} title="Phone">
                <a href="tel:+919789104651" className="hover:text-gold transition-colors">
                  +91 9789 104 651
                </a>
              </ContactLine>
              <ContactLine icon={Mail} title="Email">
                <a href="mailto:support@brandlinetech.com" className="hover:text-gold transition-colors">
                  support@brandlinetech.com
                </a>
              </ContactLine>
              <ContactLine icon={CircleCheck} title="Website">
                www.thebrandlinetech.com
              </ContactLine>
              <ContactLine icon={MapPin} title="Head Office">
                <address className="not-italic leading-6">
                  Brandline Tech Solutions Pvt. Ltd.
                  <br />
                  Complex, Avinashi Road
                  <br />
                  Coimbatore – 641 004
                  <br />
                  Tamil Nadu, India
                </address>
              </ContactLine>
              <ContactLine icon={MapPin} title="Branch Office">
                <address className="not-italic leading-6">
                  45, Kavilpada near Am Engineering Workshop
                  <br />
                  Palakkad
                  <br />
                  678 001
                </address>
              </ContactLine>
            </div>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gold/10">
        <Icon className="size-4 text-gold" />
      </span>
      <div>
        <p className="font-bold">{title}</p>
        <div className="mt-1 text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
