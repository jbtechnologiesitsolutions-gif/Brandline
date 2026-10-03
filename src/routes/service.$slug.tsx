import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/service/$slug")({
  component: ServiceDetailPage,
});

type ServiceCategory =
  | "seller"
  | "global"
  | "operations"
  | "quick-commerce"
  | "catalog"
  | "advertising"
  | "marketing"
  | "technology";

type ServiceEntry = {
  title: string;
  category: ServiceCategory;
};

const servicePages: Record<string, ServiceEntry> = {
  "amazon-seller-account-management": { title: "Amazon Seller Account Management", category: "seller" },
  "flipkart-seller-account-management": { title: "Flipkart Seller Account Management", category: "seller" },
  "meesho-seller-account-management": { title: "Meesho Seller Account Management", category: "seller" },
  "myntra-seller-account-management": { title: "Myntra Seller Account Management", category: "seller" },
  "ajio-seller-account-management": { title: "AJIO Seller Account Management", category: "seller" },
  "nykaa-seller-account-management": { title: "Nykaa Seller Account Management", category: "seller" },
  "jiomart-seller-account-management": { title: "JioMart Seller Account Management", category: "seller" },
  "multi-marketplace-management": { title: "Multi-Marketplace Management", category: "seller" },

  "amazon-global-selling-support": { title: "Amazon Global Selling Support", category: "global" },
  "etsy-marketplace-support": { title: "Etsy Marketplace Support", category: "global" },
  "ebay-marketplace-support": { title: "eBay Marketplace Support", category: "global" },
  "walmart-marketplace-support": { title: "Walmart Marketplace Support", category: "global" },
  "international-product-listings": { title: "International Product Listings", category: "global" },
  "cross-border-ecommerce-strategy": { title: "Cross-Border Ecommerce Strategy", category: "global" },
  "global-marketplace-expansion": { title: "Global Marketplace Expansion", category: "global" },

  "seller-account-setup": { title: "Seller Account Setup", category: "operations" },
  "account-health-monitoring": { title: "Account Health Monitoring", category: "operations" },
  "inventory-coordination": { title: "Inventory Coordination", category: "operations" },
  "order-management": { title: "Order Management", category: "operations" },
  "returns-claims-support": { title: "Returns & Claims Support", category: "operations" },
  "pricing-optimization": { title: "Pricing Optimization", category: "operations" },
  "performance-reporting": { title: "Performance Reporting", category: "operations" },

  "blinkit-onboarding-support": { title: "Blinkit Onboarding Support", category: "quick-commerce" },
  "zepto-onboarding-support": { title: "Zepto Onboarding Support", category: "quick-commerce" },
  "swiggy-instamart-onboarding": { title: "Swiggy Instamart Onboarding", category: "quick-commerce" },
  "quick-commerce-catalog-setup": { title: "Quick Commerce Catalog Setup", category: "quick-commerce" },
  "quick-commerce-growth-support": { title: "Quick Commerce Growth Support", category: "quick-commerce" },

  "product-listing-service": { title: "Product Listing Service", category: "catalog" },
  "catalog-optimization": { title: "Catalog Optimization", category: "catalog" },
  "title-optimization": { title: "Title Optimization", category: "catalog" },
  "description-optimization": { title: "Description Optimization", category: "catalog" },
  "keyword-optimization": { title: "Keyword Optimization", category: "catalog" },
  "product-attribute-setup": { title: "Product Attribute Setup", category: "catalog" },
  "image-optimization": { title: "Image Optimization", category: "catalog" },
  "a-plus-content-support": { title: "A+ Content Support", category: "catalog" },

  "amazon-marketplace-ads": { title: "Amazon Marketplace Ads", category: "advertising" },
  "flipkart-marketplace-ads": { title: "Flipkart Marketplace Ads", category: "advertising" },
  "meesho-advertising-support": { title: "Meesho Advertising Support", category: "advertising" },
  "sponsored-ads-management": { title: "Sponsored Ads Management", category: "advertising" },
  "keyword-research": { title: "Keyword Research", category: "advertising" },
  "bid-optimization": { title: "Bid Optimization", category: "advertising" },
  "campaign-monitoring": { title: "Campaign Monitoring", category: "advertising" },
  "ad-budget-management": { title: "Ad Budget Management", category: "advertising" },

  "search-engine-optimization": { title: "Search Engine Optimization", category: "marketing" },
  "marketplace-seo": { title: "Marketplace SEO", category: "marketing" },
  "google-ads": { title: "Google Ads", category: "marketing" },
  "meta-ads": { title: "Meta Ads", category: "marketing" },
  "social-media-marketing": { title: "Social Media Marketing", category: "marketing" },
  "content-marketing": { title: "Content Marketing", category: "marketing" },
  "influencer-marketing": { title: "Influencer Marketing", category: "marketing" },
  "online-reputation-management": { title: "Online Reputation Management", category: "marketing" },

  "d2c-website-development": { title: "D2C Website Development", category: "technology" },
  "shopify-development": { title: "Shopify Development", category: "technology" },
  "woocommerce-development": { title: "WooCommerce Development", category: "technology" },
  "wordpress-development": { title: "WordPress Development", category: "technology" },
  "custom-ecommerce-development": { title: "Custom Ecommerce Development", category: "technology" },
  "ui-ux-design": { title: "UI / UX Design", category: "technology" },
  "landing-page-development": { title: "Landing Page Development", category: "technology" },
  "payment-integration": { title: "Payment Integration", category: "technology" },
};

const categoryContent: Record<
  ServiceCategory,
  { eyebrow: string; intro: string; includes: string[]; benefits: string[]; process: string[] }
> = {
  seller: {
    eyebrow: "Marketplace Account Management",
    intro:
      "BrandlineTech provides structured seller account management for brands that want smoother marketplace operations, stronger listings and consistent account monitoring.",
    includes: [
      "Seller account setup and configuration",
      "Product listing and catalog coordination",
      "Marketplace SEO and content optimization",
      "Inventory, order and returns coordination",
      "Advertising and promotion support",
      "Account health and performance monitoring",
    ],
    benefits: [
      "Cleaner day-to-day marketplace operations",
      "Better listing quality and discoverability",
      "Faster identification of account-health issues",
      "Clearer performance tracking for growth decisions",
    ],
    process: ["Account audit", "Priority setup", "Execution", "Monitoring", "Optimization"],
  },
  global: {
    eyebrow: "Global Ecommerce Growth",
    intro:
      "BrandlineTech helps businesses prepare, structure and manage marketplace expansion beyond their current selling region with practical operational support.",
    includes: [
      "Marketplace readiness review",
      "International catalog preparation",
      "Listing localization and content checks",
      "Marketplace onboarding coordination",
      "Pricing and operational planning",
      "Performance reporting and expansion support",
    ],
    benefits: [
      "More structured market-entry planning",
      "Consistent product information across channels",
      "Reduced operational gaps during expansion",
      "A single growth workflow across multiple marketplaces",
    ],
    process: ["Readiness review", "Market plan", "Setup", "Launch", "Scale"],
  },
  operations: {
    eyebrow: "Marketplace Operations",
    intro:
      "This service is designed to strengthen the operational layer behind your marketplace business so routine execution stays accurate, visible and easier to manage.",
    includes: [
      "Current-process review",
      "Operational checklist setup",
      "Daily or scheduled monitoring",
      "Exception and issue tracking",
      "Marketplace coordination support",
      "Performance and status reporting",
    ],
    benefits: [
      "More consistent operational execution",
      "Fewer missed marketplace actions",
      "Better visibility into issues and status",
      "A clearer workflow for scaling operations",
    ],
    process: ["Review", "Structure", "Operate", "Track", "Improve"],
  },
  "quick-commerce": {
    eyebrow: "Quick Commerce",
    intro:
      "BrandlineTech supports quick-commerce onboarding and catalog operations for businesses preparing to sell through fast-delivery platforms.",
    includes: [
      "Platform onboarding preparation",
      "Catalog and attribute setup",
      "Product content checks",
      "Pricing and inventory coordination",
      "Operational monitoring",
      "Growth and visibility support",
    ],
    benefits: [
      "Faster onboarding preparation",
      "More accurate catalog data",
      "Better coordination of stock and content",
      "Clearer launch and growth tracking",
    ],
    process: ["Eligibility review", "Catalog prep", "Onboarding", "Go live", "Optimize"],
  },
  catalog: {
    eyebrow: "Listing & Catalog Management",
    intro:
      "BrandlineTech improves the quality, structure and search-readiness of ecommerce product content so listings are easier to discover and easier for customers to understand.",
    includes: [
      "Catalog quality audit",
      "Title and description optimization",
      "Keyword and search-term research",
      "Product attribute completion",
      "Image and content checks",
      "Ongoing catalog maintenance",
    ],
    benefits: [
      "Cleaner product information",
      "Improved search relevance",
      "More consistent catalog presentation",
      "Reduced listing-quality issues",
    ],
    process: ["Catalog audit", "Research", "Content update", "Quality check", "Maintenance"],
  },
  advertising: {
    eyebrow: "Marketplace Advertising",
    intro:
      "BrandlineTech structures marketplace advertising around campaign clarity, relevant keywords, controlled budgets and ongoing performance review.",
    includes: [
      "Advertising account review",
      "Campaign and ad-group setup",
      "Keyword and targeting research",
      "Bid and budget optimization",
      "Campaign monitoring",
      "Performance reporting",
    ],
    benefits: [
      "More organized campaign structure",
      "Better control over budget allocation",
      "Clearer performance visibility",
      "Continuous optimization based on campaign data",
    ],
    process: ["Audit", "Plan", "Launch", "Monitor", "Optimize"],
  },
  marketing: {
    eyebrow: "Digital Marketing",
    intro:
      "BrandlineTech helps ecommerce businesses build visibility and demand across search, paid media, social channels and content through a coordinated digital approach.",
    includes: [
      "Channel and audience review",
      "Keyword and content planning",
      "Campaign setup and execution",
      "Creative and messaging coordination",
      "Analytics and performance monitoring",
      "Ongoing optimization",
    ],
    benefits: [
      "More consistent digital visibility",
      "Clearer campaign direction",
      "Better alignment between traffic and ecommerce goals",
      "Measurable performance tracking",
    ],
    process: ["Discovery", "Strategy", "Execution", "Measure", "Optimize"],
  },
  technology: {
    eyebrow: "Web & D2C Technology",
    intro:
      "BrandlineTech builds and improves ecommerce experiences that support product discovery, conversion, payments and ongoing digital operations.",
    includes: [
      "Business and technical discovery",
      "UI / UX planning",
      "Responsive ecommerce development",
      "Catalog and payment integrations",
      "Testing and launch support",
      "Ongoing optimization and maintenance",
    ],
    benefits: [
      "Responsive customer experience",
      "Clearer purchase journeys",
      "Reliable ecommerce integrations",
      "A stronger owned digital storefront",
    ],
    process: ["Discover", "Design", "Develop", "Test", "Launch"],
  },
};

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const entry = servicePages[slug];

  if (!entry) {
    return (
      <main className="min-h-screen px-5 py-24">
        <div className="section-shell">
          <p className="label-caps text-[#EB175D]">Service</p>
          <h1 className="mt-5 text-4xl font-extrabold text-[#363636]">Service page not found</h1>
          <a href="/services" className="mt-8 inline-flex rounded-full bg-[#EB175D] px-6 py-3 font-semibold text-white">
            View all services
          </a>
        </div>
      </main>
    );
  }

  const content = categoryContent[entry.category];

  return (
    <main className="min-h-screen text-[#363636]">
      <section className="section-pad">
        <div className="section-shell">
          <p className="label-caps text-[#EB175D]">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {entry.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#666163]">
            {content.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#EB175D] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#CC527A]">
              Get Free Consultation <ArrowRight className="size-4" />
            </a>
            <a href="/services" className="inline-flex items-center rounded-full border border-[#AAA7A7]/45 bg-white/55 px-6 py-3.5 font-semibold text-[#363636] backdrop-blur-sm">
              Explore all services
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/35 bg-white/55 p-7 backdrop-blur-md sm:p-9">
            <p className="label-caps text-[#EB175D]">What&apos;s included</p>
            <h2 className="mt-4 font-display text-3xl font-bold">End-to-end support for {entry.title}</h2>
            <div className="mt-7 grid gap-4">
              {content.includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#EB175D]" />
                  <span className="leading-6 text-[#474747]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/35 bg-white/42 p-7 backdrop-blur-md sm:p-9">
            <p className="label-caps text-[#EB175D]">Business value</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Why businesses use this service</h2>
            <div className="mt-7 grid gap-4">
              {content.benefits.map((item) => (
                <div key={item} className="rounded-2xl border border-[#AAA7A7]/25 bg-white/45 p-4 text-[#474747]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-shell">
          <div className="rounded-3xl bg-[#363636] p-7 text-white sm:p-10">
            <p className="label-caps text-[#CC527A]">How we work</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold sm:text-4xl">A clear service workflow from review to optimization.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {content.process.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/12 bg-white/[0.05] p-5">
                  <span className="text-xs font-bold text-[#CC527A]">0{index + 1}</span>
                  <p className="mt-3 font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="section-shell">
          <div className="rounded-3xl border border-white/35 bg-white/45 p-8 text-center backdrop-blur-md sm:p-12">
            <p className="label-caps text-[#EB175D]">BrandlineTech</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold sm:text-4xl">
              Need help with {entry.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#666163]">
              Tell us what you currently manage, where the challenges are, and what outcome you want to improve. We&apos;ll map the next practical steps.
            </p>
            <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#EB175D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#CC527A]">
              Talk to BrandlineTech <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
