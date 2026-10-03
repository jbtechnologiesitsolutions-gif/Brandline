import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, Mail, MapPin, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlideArrowButton from "@/components/slide-arrow-button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const desktopLinks = [
  ["Services", "/services"],
  ["Marketplaces", "/marketplace-management"],
  ["Solutions", "/solutions"],
  ["Packages", "/packages"],
  ["Resources", "/resources"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

const mobileLinks = [["Home", "/"], ...desktopLinks] as const;

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]" aria-label="BrandlineTech home">
      <span className="font-display text-xl font-extrabold tracking-tight text-[#363636]">
        Brandline<span className="text-[#EB175D] transition-colors group-hover:text-[#CC527A]">Tech</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-[#AAA7A7]/35 bg-[#F3ECEF]/94 shadow-sm py-1"
          : "border-transparent bg-[#EEE7EA]/82 py-2",
      )}
    >
      <div className="section-shell flex h-[4.25rem] items-center justify-between gap-4">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            {desktopLinks.map(([label, to]) => (
              <Link
                key={label}
                to={to}
                className="group relative py-1 text-sm font-medium text-[#666163] transition-colors hover:text-[#363636]"
                activeProps={{ className: "text-[#363636] font-semibold" }}
              >
                {label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#EB175D] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <SlideArrowButton href="/contact" text="Get Free Consultation" primaryColor="#EB175D" />
          </motion.div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="border-[#AAA7A7]/45 bg-white/55 lg:hidden hover:bg-[#CC527A]/10" aria-label="Open navigation">
              <Menu className="size-5 text-[#363636]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-md border-l border-[#AAA7A7]/30 bg-[#F6F1F3]">
            <SheetHeader className="text-left">
              <SheetTitle><Logo /></SheetTitle>
              <SheetDescription className="text-xs text-[#666163]">
                Ecommerce growth, marketplace management and digital solutions.
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {mobileLinks.map(([label, to]) => (
                <SheetClose asChild key={label}>
                  <Link to={to} className="border-b border-[#AAA7A7]/30 py-3.5 font-display text-xl font-semibold text-[#363636] transition-colors hover:text-[#EB175D]">
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <SlideArrowButton href="/contact" text="Get Free Consultation" primaryColor="#EB175D" className="mt-8 w-full justify-start" />
            </SheetClose>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[#666163]">
              <a href="tel:+919789104651" className="flex items-center gap-2.5 transition-colors hover:text-[#EB175D]">
                <Phone className="size-4 text-[#EB175D]" /> +91 9789 104 651
              </a>
              <a href="mailto:support@brandlinetech.com" className="flex items-center gap-2.5 transition-colors hover:text-[#EB175D]">
                <Mail className="size-4 text-[#EB175D]" /> support@brandlinetech.com
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

const footerGroups = [
  {
    title: "Ecommerce Seller Account Management",
    links: [
      ["Amazon Seller Account Management", "/marketplace-management"],
      ["Flipkart Seller Account Management", "/marketplace-management"],
      ["Meesho Seller Account Management", "/marketplace-management"],
      ["Myntra Seller Account Management", "/marketplace-management"],
      ["AJIO Seller Account Management", "/marketplace-management"],
      ["Nykaa Seller Account Management", "/marketplace-management"],
      ["JioMart Seller Account Management", "/marketplace-management"],
      ["Multi-Marketplace Management", "/marketplace-management"],
    ],
  },
  {
    title: "Global Ecommerce Growth",
    links: [
      ["Amazon Global Selling Support", "/solutions"],
      ["Etsy Marketplace Support", "/solutions"],
      ["eBay Marketplace Support", "/solutions"],
      ["Walmart Marketplace Support", "/solutions"],
      ["International Product Listings", "/solutions"],
      ["Cross-Border Ecommerce Strategy", "/solutions"],
      ["Global Marketplace Expansion", "/solutions"],
    ],
  },
  {
    title: "Marketplace Operations",
    links: [
      ["Seller Account Setup", "/marketplace-management"],
      ["Account Health Monitoring", "/marketplace-management"],
      ["Inventory Coordination", "/marketplace-management"],
      ["Order Management", "/marketplace-management"],
      ["Returns & Claims Support", "/marketplace-management"],
      ["Pricing Optimization", "/marketplace-management"],
      ["Performance Reporting", "/marketplace-management"],
    ],
  },
  {
    title: "Quick Commerce",
    links: [
      ["Blinkit Onboarding Support", "/solutions"],
      ["Zepto Onboarding Support", "/solutions"],
      ["Swiggy Instamart Onboarding", "/solutions"],
      ["Quick Commerce Catalog Setup", "/solutions"],
      ["Quick Commerce Growth Support", "/solutions"],
    ],
  },
  {
    title: "Listing / Catalog Management",
    links: [
      ["Product Listing Service", "/services#catalog"],
      ["Catalog Optimization", "/services#catalog"],
      ["Title Optimization", "/services#catalog"],
      ["Description Optimization", "/services#catalog"],
      ["Keyword Optimization", "/services#catalog"],
      ["Product Attribute Setup", "/services#catalog"],
      ["Image Optimization", "/services#catalog"],
      ["A+ Content Support", "/services#catalog"],
    ],
  },
  {
    title: "Advertising Services",
    links: [
      ["Amazon Marketplace Ads", "/services#advertising"],
      ["Flipkart Marketplace Ads", "/services#advertising"],
      ["Meesho Advertising Support", "/services#advertising"],
      ["Sponsored Ads Management", "/services#advertising"],
      ["Keyword Research", "/services#advertising"],
      ["Bid Optimization", "/services#advertising"],
      ["Campaign Monitoring", "/services#advertising"],
      ["Ad Budget Management", "/services#advertising"],
    ],
  },
  {
    title: "Digital Marketing",
    links: [
      ["Search Engine Optimization", "/services#seo"],
      ["Marketplace SEO", "/services#seo"],
      ["Google Ads", "/services#marketing"],
      ["Meta Ads", "/services#marketing"],
      ["Social Media Marketing", "/services#marketing"],
      ["Content Marketing", "/services#marketing"],
      ["Influencer Marketing", "/services#marketing"],
      ["Online Reputation Management", "/services#marketing"],
    ],
  },
  {
    title: "Web & D2C Technology",
    links: [
      ["D2C Website Development", "/services#d2c"],
      ["Shopify Development", "/services#d2c"],
      ["WooCommerce Development", "/services#d2c"],
      ["WordPress Development", "/services#d2c"],
      ["Custom Ecommerce Development", "/services#d2c"],
      ["UI / UX Design", "/services#d2c"],
      ["Landing Page Development", "/services#d2c"],
      ["Payment Integration", "/services#d2c"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      <div className="section-shell py-12 sm:py-14 lg:py-16">
        <div className="mb-10 border-t border-white/12" />

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {footerGroups.map((group) => (
            <FooterDirectoryGroup key={group.title} title={group.title} links={group.links} />
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.1fr_.9fr_.9fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 font-display text-xl font-bold tracking-tight text-white">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white text-sm font-black text-[#111111]">B</span>
              <span>Brandline<span className="text-[#EB175D]">Tech</span></span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Marketplace management, ecommerce operations, digital marketing and D2C technology support for growing brands and sellers.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/65">
              <a href="/about" className="transition-colors hover:text-[#EB175D]">About</a>
              <a href="/packages" className="transition-colors hover:text-[#EB175D]">Packages</a>
              <a href="/resources" className="transition-colors hover:text-[#EB175D]">Resources</a>
              <a href="/contact" className="transition-colors hover:text-[#EB175D]">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.08em] text-white">Contact Info</p>
            <div className="mt-5 space-y-4 text-sm text-white/68">
              <a href="tel:+919789104651" className="flex items-start gap-3 transition-colors hover:text-[#EB175D]">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#EB175D]" />
                <span><strong className="block text-white/90">Phone</strong>+91 9789 104 651</span>
              </a>
              <a href="mailto:support@brandlinetech.com" className="flex items-start gap-3 transition-colors hover:text-[#EB175D]">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#EB175D]" />
                <span className="break-all"><strong className="block text-white/90">Email</strong>support@brandlinetech.com</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.08em] text-white">Locations & Policies</p>
            <div className="mt-5 space-y-4 text-sm text-white/68">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#EB175D]" />
                <div>
                  <strong className="block text-white/90">Service Locations</strong>
                  <p className="mt-1 leading-6 text-white/55">Coimbatore, Tamil Nadu</p>
                  <p className="leading-6 text-white/55">Palakkad, Kerala</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                <a href="/privacy-policy" className="transition-colors hover:text-[#EB175D]">Privacy Policy</a>
                <a href="/terms" className="transition-colors hover:text-[#EB175D]">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BrandlineTech. All rights reserved.</p>
          <p>Empowering Your Brand&apos;s Digital Journey.</p>
        </div>

        <div className="pointer-events-none select-none overflow-hidden pt-10" aria-hidden="true">
          <div className="whitespace-nowrap font-display text-[17vw] font-extrabold leading-[.72] tracking-[-0.07em] text-white/[0.035] sm:text-[14vw] lg:text-[11.5vw]">
            BrandlineTech
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterDirectoryGroup({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <p className="text-[11px] font-extrabold uppercase tracking-[.04em] text-white/95">{title}</p>
      <div className="mt-4 space-y-2.5">
        {links.map(([label, to]) => (
          <a
            key={label}
            href={to}
            className="group flex items-start gap-2 text-[13px] leading-5 text-white/72 transition-colors hover:text-[#EB175D]"
          >
            <ChevronRight className="mt-[3px] size-3.5 shrink-0 text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:text-[#EB175D]" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}