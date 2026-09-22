import {
  BarChart3,
  Boxes,
  Code2,
  Compass,
  Globe,
  Layers,
  Megaphone,
  Package,
  Search,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";

// ─── Platforms ───────────────────────────────────────────────────────────────
export const platforms = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "AJIO",
  "Nykaa",
  "JioMart",
  "Tata CLiQ",
  "Shopify",
  "WooCommerce",
];

export const quickCommercePlatforms = ["Blinkit", "Zepto", "Swiggy Instamart"];

export const platformDetails = [
  {
    name: "Amazon",
    color: "#FF9900",
    bg: "#FFF8EC",
    capabilities: [
      "Seller Central",
      "Listing Management",
      "Sponsored Ads",
      "FBA Coordination",
      "Account Health",
    ],
  },
  {
    name: "Flipkart",
    color: "#2874F0",
    bg: "#EEF4FF",
    capabilities: [
      "Seller Hub",
      "Catalog Management",
      "Smart ROI Ads",
      "Inventory Sync",
      "Returns",
    ],
  },
  {
    name: "Meesho",
    color: "#9B2EAA",
    bg: "#F9EEFB",
    capabilities: [
      "Supplier Panel",
      "Product Listing",
      "Pricing Strategy",
      "Order Management",
      "Growth",
    ],
  },
  {
    name: "Myntra",
    color: "#FF3F6C",
    bg: "#FFF0F3",
    capabilities: [
      "Brand Onboarding",
      "Fashion Catalog",
      "Image Standards",
      "Campaign Setup",
      "Analytics",
    ],
  },
  {
    name: "AJIO",
    color: "#1A1A2E",
    bg: "#F2F2F7",
    capabilities: [
      "Partner Onboarding",
      "Catalog Listing",
      "Style Standards",
      "Inventory",
      "Performance",
    ],
  },
  {
    name: "Nykaa",
    color: "#FC2779",
    bg: "#FFF0F6",
    capabilities: [
      "Beauty Catalog",
      "Brand Setup",
      "Content Standards",
      "Advertising",
      "Reviews",
    ],
  },
  {
    name: "JioMart",
    color: "#0059A9",
    bg: "#EEF5FF",
    capabilities: [
      "Seller Onboarding",
      "Product Listing",
      "Order Fulfillment",
      "Inventory",
      "Reporting",
    ],
  },
  {
    name: "Tata CLiQ",
    color: "#241535",
    bg: "#F5F2F8",
    capabilities: [
      "Brand Onboarding",
      "Catalog Setup",
      "Content Quality",
      "Campaign",
      "Analytics",
    ],
  },
  {
    name: "Shopify",
    color: "#96BF48",
    bg: "#F3F8EC",
    capabilities: [
      "Store Development",
      "Theme Customization",
      "Payment Integration",
      "Apps & Plugins",
      "Analytics",
    ],
  },
  {
    name: "WooCommerce",
    color: "#7F54B3",
    bg: "#F6F2FC",
    capabilities: [
      "Store Setup",
      "WordPress Integration",
      "Plugin Configuration",
      "Payment Gateway",
      "SEO",
    ],
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    id: "marketplace",
    number: "01",
    eyebrow: "Operations",
    title: "Marketplace Account Management",
    description:
      "End-to-end management of your marketplace operations across Amazon, Flipkart, Meesho, Myntra, AJIO and other platforms.",
    items: [
      "Seller account management",
      "Catalog management",
      "Listing management",
      "Account health monitoring",
      "Order monitoring",
      "Inventory coordination",
      "Returns & claims",
      "Performance reporting",
    ],
    href: "/marketplace-management",
    cta: "Explore Marketplace Management",
    icon: ShoppingBag,
  },
  {
    id: "catalog",
    number: "02",
    eyebrow: "Catalog",
    title: "Product Listing & Catalog Management",
    description:
      "Turn your product catalog into a conversion-ready digital shelf with optimized titles, descriptions and content.",
    items: [
      "Product listing",
      "Title optimization",
      "Description optimization",
      "Keyword optimization",
      "Product attributes",
      "Image optimization",
      "A+ content",
      "Catalog maintenance",
    ],
    href: "/services#catalog",
    cta: "Explore Catalog Services",
    icon: Package,
  },
  {
    id: "advertising",
    number: "03",
    eyebrow: "Advertising",
    title: "Marketplace Advertising",
    description:
      "Turn marketplace visibility into measurable business opportunities through structured ad campaigns and bid management.",
    items: [
      "Sponsored Ads",
      "Campaign setup",
      "Keyword research",
      "Bid optimization",
      "Campaign monitoring",
      "Performance analysis",
      "Budget management",
    ],
    href: "/services#advertising",
    cta: "Explore Marketplace Ads",
    icon: Target,
  },
  {
    id: "seo",
    number: "04",
    eyebrow: "Visibility",
    title: "Ecommerce SEO",
    description:
      "Improve visibility across search engines and marketplaces through structured keyword and content optimization.",
    items: [
      "Keyword research",
      "On-page SEO",
      "Marketplace SEO",
      "Content optimization",
      "Technical SEO",
      "Competitor analysis",
    ],
    href: "/services#seo",
    cta: "Explore SEO",
    icon: Search,
  },
  {
    id: "marketing",
    number: "05",
    eyebrow: "Marketing",
    title: "Digital Marketing",
    description:
      "Build visibility beyond the marketplace across Google, Meta, social media and digital channels.",
    items: [
      "Google Ads",
      "Meta Ads",
      "Social Media",
      "Content Marketing",
      "Influencer Marketing",
      "Email Marketing",
      "ORM",
    ],
    href: "/services#marketing",
    cta: "Explore Digital Marketing",
    icon: Megaphone,
  },
  {
    id: "d2c",
    number: "06",
    eyebrow: "Technology",
    title: "D2C Website Development",
    description:
      "Build a digital storefront you own on Shopify, WooCommerce or custom platforms.",
    items: [
      "Shopify",
      "WooCommerce",
      "WordPress",
      "Custom e-commerce",
      "UI/UX",
      "Landing pages",
      "Payment integration",
      "Analytics",
    ],
    href: "/services#d2c",
    cta: "Build Your D2C Store",
    icon: Code2,
  },
];

// ─── Who We Help ──────────────────────────────────────────────────────────────
export const journeyStages = [
  {
    n: "01",
    label: "Starting Out",
    headline: "Launching your first online store?",
    description:
      "For new sellers launching their first online marketplace presence.",
    items: [
      "Seller onboarding",
      "Product listings",
      "Catalog setup",
      "Marketplace setup",
    ],
    accent: "bg-gold-soft",
  },
  {
    n: "02",
    label: "Growing",
    headline: "Already generating sales?",
    description:
      "For sellers already generating marketplace sales and wanting to scale faster.",
    items: [
      "Catalog optimization",
      "SEO",
      "Advertising",
      "Inventory management",
      "Performance monitoring",
    ],
    accent: "",
  },
  {
    n: "03",
    label: "Scaling",
    headline: "Selling across multiple platforms?",
    description:
      "For brands selling across multiple platforms and needing operational support.",
    items: [
      "Multi-marketplace management",
      "Marketplace advertising",
      "Pricing optimization",
      "Inventory coordination",
      "Competitor analysis",
    ],
    accent: "",
  },
  {
    n: "04",
    label: "Going Global",
    headline: "Expanding beyond India?",
    description:
      "For businesses expanding beyond India into international markets.",
    items: [
      "Global marketplace setup",
      "International listings",
      "D2C websites",
      "Digital marketing",
      "Cross-border strategy",
    ],
    accent: "",
  },
];

// ─── Growth Framework ─────────────────────────────────────────────────────────
export const growthFramework = [
  {
    n: "01",
    title: "Build the Foundation",
    items: [
      "Product audit",
      "Market research",
      "Catalog setup",
      "Marketplace strategy",
    ],
    icon: Layers,
  },
  {
    n: "02",
    title: "Drive More Sales",
    items: [
      "Marketplace SEO",
      "Advertising",
      "Content optimization",
      "Conversion optimization",
    ],
    icon: TrendingUp,
  },
  {
    n: "03",
    title: "Optimize Operations",
    items: ["Inventory", "Pricing", "Orders", "Returns", "Account health"],
    icon: Settings,
  },
  {
    n: "04",
    title: "Scale",
    items: [
      "Multi-marketplace expansion",
      "D2C",
      "Digital marketing",
      "Global selling",
    ],
    icon: Globe,
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
export const processSteps = [
  ["Discover", "Understand your business, products, markets and goals in depth."],
  ["Audit", "Review your current marketplace and digital presence for opportunities."],
  ["Strategize", "Create a practical ecommerce growth roadmap tailored to your business."],
  ["Execute", "Manage listings, campaigns, websites and operational tasks."],
  ["Optimize", "Continuously review performance data and refine what's working."],
  ["Scale", "Expand across platforms, channels and markets as you grow."],
];

// ─── Marketplace Services (12 cards) ─────────────────────────────────────────
export const marketplaceServices = [
  {
    title: "Seller Account Setup",
    description: "Full onboarding on Amazon, Flipkart, Meesho, Myntra and other platforms.",
    icon: ShoppingCart,
  },
  {
    title: "Product Catalog",
    description: "Structured product catalog creation and ongoing maintenance.",
    icon: Package,
  },
  {
    title: "Listing Optimization",
    description: "Titles, descriptions and attributes optimized for conversion and search.",
    icon: Star,
  },
  {
    title: "Marketplace SEO",
    description: "Keyword research and content optimization for marketplace search visibility.",
    icon: Search,
  },
  {
    title: "Advertising",
    description: "Campaign setup, bid management and performance monitoring.",
    icon: Target,
  },
  {
    title: "Inventory Coordination",
    description: "Inventory tracking and coordination to minimize stockout and overstock.",
    icon: Boxes,
  },
  {
    title: "Order Management",
    description: "Order monitoring, processing coordination and fulfillment support.",
    icon: Truck,
  },
  {
    title: "Returns & Claims",
    description: "Structured handling of returns, replacements and marketplace claims.",
    icon: Settings,
  },
  {
    title: "Account Health",
    description: "Monitoring and maintenance of marketplace account health metrics.",
    icon: Zap,
  },
  {
    title: "Competitor Analysis",
    description: "Tracking competitor pricing, listings and strategies for better positioning.",
    icon: BarChart3,
  },
  {
    title: "Performance Reporting",
    description: "Clear, structured reporting on marketplace performance and progress.",
    icon: TrendingUp,
  },
  {
    title: "Pricing Optimization",
    description: "Competitive pricing strategies to improve visibility and conversion.",
    icon: Layers,
  },
];

// ─── Goal Groups ──────────────────────────────────────────────────────────────
export const goalGroups = [
  { n: "01", title: "Attract", items: "SEO · Paid Ads · Social Media · Content" },
  { n: "02", title: "Convert", items: "Landing Pages · E-commerce · Web Design · UI/UX" },
  { n: "03", title: "Sell", items: "Marketplace Management · Product Listings · Catalog Optimization · Marketplace Ads" },
  { n: "04", title: "Retain", items: "Customer Communication · Reputation Management · Analytics · Performance Optimization" },
  { n: "05", title: "Scale", items: "Marketplace Expansion · Digital Strategy · Automation · Growth Consulting" },
];

// ─── Packages ─────────────────────────────────────────────────────────────────
export const packages = [
  {
    name: "Basic",
    price: "₹8,000",
    suffix: "/ month",
    audience: "For startups and small sellers.",
    cta: "Get Started",
    features: [
      "Up to 50 SKUs",
      "Product listing",
      "Title optimization",
      "Description optimization",
      "Keyword optimization",
      "Order processing",
      "Basic customer communication",
      "Weekly reporting",
      "Returns update",
    ],
  },
  {
    name: "Elite",
    price: "₹15,000 – ₹18,000",
    suffix: "/ month",
    audience: "For medium-size sellers managing multiple SKUs.",
    cta: "Discuss Your Requirements",
    features: [
      "Up to 200 SKUs",
      "Full catalog optimization",
      "Order processing",
      "Inventory coordination",
      "Ad campaign setup",
      "Ad monitoring",
      "Returns & claims",
      "Weekly performance reporting",
      "Competitor analysis",
      "1–2 marketplace platforms",
    ],
  },
  {
    name: "Premium",
    price: "₹25,000 – ₹40,000",
    suffix: "/ month",
    audience: "For established brands with high-volume sales.",
    cta: "Talk to an Expert",
    features: [
      "Unlimited product listings",
      "Multi-platform management",
      "End-to-end catalog management",
      "Account health monitoring",
      "Marketplace advertising",
      "Dedicated returns & claims handling",
      "Inventory optimization",
      "Pricing optimization",
      "Competitor tracking",
      "Daily reporting",
      "Monthly strategy review",
    ],
  },
];

// ─── Comparison Table ─────────────────────────────────────────────────────────
export const comparison = [
  ["SKU Capacity", "Up to 50", "Up to 200", "Unlimited"],
  ["Catalog Optimization", "Essential", "Full", "End-to-end"],
  ["Order Processing", "Included", "Included", "Included"],
  ["Inventory Coordination", "—", "Included", "Included"],
  ["Advertising", "—", "Setup & monitoring", "Full management"],
  ["Returns Management", "Updates", "Included", "Dedicated"],
  ["Competitor Analysis", "—", "Included", "Included"],
  ["Reporting", "Weekly", "Weekly", "Daily"],
  ["Marketplace Count", "1", "1–2", "Multiple"],
  ["Account Health Monitoring", "—", "—", "Included"],
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const faqs = [
  ["What marketplaces can you manage?", "We support operations across Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ and other platforms based on your business requirements."],
  ["Can you manage multiple marketplaces?", "Yes. Marketplace management can be structured to cover one or multiple platforms simultaneously, depending on your requirements and chosen package."],
  ["Do you work with new sellers?", "Yes. We work with both new sellers who are just getting started and established brands looking to optimize or expand their marketplace presence."],
  ["Can you manage Amazon and Flipkart together?", "Yes. Multi-marketplace management is available and can be customized based on your SKU volume and operational requirements."],
  ["Do you provide product listing services?", "Yes. Product listing, title optimization, description optimization, keyword research and catalog setup are part of our catalog management services."],
  ["Do you manage marketplace advertising?", "Yes. We manage sponsored ad campaigns including setup, keyword research, bid optimization, monitoring and performance reporting."],
  ["Can you build our D2C website?", "Yes. We develop D2C websites on Shopify, WooCommerce and WordPress, including custom e-commerce solutions with payment integration."],
  ["Do you provide SEO?", "Yes. We provide both marketplace SEO and search engine SEO, including keyword research, on-page optimization and content optimization."],
  ["Can packages be customized?", "Yes. Custom packages can be structured based on your SKU volume, marketplace count, services required and business objectives."],
  ["How do we get started?", "Submit the consultation form on this page or contact us directly. We will review your requirements and discuss the right service approach for your business."],
];

// ─── Why Us ───────────────────────────────────────────────────────────────────
export const whyUs = [
  ["Marketplace Expertise", "Support across major Indian ecommerce channels including Amazon, Flipkart, Meesho, Myntra, AJIO and more.", ShoppingBag],
  ["Dedicated Account Support", "Structured communication and ongoing account coordination across all active services.", Users],
  ["Data-Driven Optimization", "Using marketplace and campaign data to identify opportunities and improve performance.", BarChart3],
  ["Multi-Channel Capability", "Marketplace, D2C, advertising and digital marketing under one coordinated team.", Sparkles],
  ["Transparent Reporting", "Clear performance reporting and regular structured communication.", Compass],
  ["Scalable Services", "Start with a focused requirement and expand services as your business grows.", Boxes],
];

// ─── Industries ───────────────────────────────────────────────────────────────
export const industries = [
  "Fashion",
  "Beauty",
  "Electronics",
  "Home & Kitchen",
  "Food & Grocery",
  "Health & Wellness",
  "Baby & Kids",
  "Jewellery",
  "Lifestyle",
  "Consumer Products",
];

// ─── Resources ────────────────────────────────────────────────────────────────
export const resourceCategories = [
  "Marketplace Guides",
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "E-commerce",
  "Digital Marketing",
  "D2C",
  "SEO",
];

export const resourceArticles = [
  {
    category: "Marketplace Guides",
    title: "How to Prepare Your Product Catalog for Marketplace Selling",
    description: "A structured guide to getting your catalog marketplace-ready before you go live.",
    readTime: "8 min read",
  },
  {
    category: "Amazon",
    title: "Marketplace Listing Optimization: What Sellers Should Know",
    description: "Key elements that influence how your products rank and convert on major marketplaces.",
    readTime: "6 min read",
  },
  {
    category: "E-commerce",
    title: "How to Build a Multi-Marketplace Selling Strategy",
    description: "A practical framework for managing products across Amazon, Flipkart, Meesho and more.",
    readTime: "10 min read",
  },
  {
    category: "Digital Marketing",
    title: "Marketplace Advertising Basics for Growing Brands",
    description: "Understanding sponsored ads, bidding and campaign structure for marketplace sellers.",
    readTime: "7 min read",
  },
];

// ─── Ecommerce Tools ──────────────────────────────────────────────────────────
export const ecomTools = [
  { title: "Marketplace Fee Calculator", description: "Estimate platform fees across Amazon, Flipkart and other marketplaces.", icon: BarChart3 },
  { title: "Amazon Profit Calculator", description: "Calculate your net margins after fees, shipping and advertising costs.", icon: TrendingUp },
  { title: "Marketplace Pricing Calculator", description: "Set competitive prices while maintaining healthy margins.", icon: Target },
  { title: "Advertising ROAS Calculator", description: "Evaluate return on ad spend across your marketplace campaigns.", icon: Zap },
  { title: "Ecommerce Margin Calculator", description: "Understand your true margin after all costs are factored in.", icon: Compass },
  { title: "GST Calculator", description: "Quick GST calculations for products across tax slabs.", icon: Layers },
];
