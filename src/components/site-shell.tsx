import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const mobileLinks = [
  ["Home", "/"],
  ...desktopLinks,
] as const;

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]" aria-label="BrandlineTech home">
      <span className="font-display text-xl font-extrabold tracking-tight text-[#1F1F1F]">
        Brandline<span className="text-[#C89B5A] transition-colors group-hover:text-[#E4C27A]">Tech</span>
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
          ? "border-[#292526]/10 bg-[#F8F7F5]/90 shadow-sm py-1"
          : "border-transparent bg-[#F8F7F5]/70 py-2",
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
                className="group relative py-1 text-sm font-medium text-[#6B6868] transition-colors hover:text-[#1F1F1F]"
                activeProps={{ className: "text-[#1F1F1F] font-semibold" }}
              >
                {label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C89B5A] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button asChild variant="gold" size="lg" className="shadow-gold group relative overflow-hidden bg-[#C89B5A] text-[#1F1F1F] font-bold hover:bg-[#E4C27A]">
              <Link to="/contact">
                Get Free Consultation{" "}
                <ArrowRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden border-[#292526]/15 hover:bg-[#C89B5A]/10" aria-label="Open navigation">
              <Menu className="size-5 text-[#1F1F1F]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-md bg-[#F8F7F5] border-l border-[#292526]/10">
            <SheetHeader className="text-left">
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription className="text-xs text-[#6B6868]">
                Ecommerce growth, marketplace management and digital solutions.
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {mobileLinks.map(([label, to]) => (
                <SheetClose asChild key={label}>
                  <Link to={to} className="border-b border-[#292526]/10 py-3.5 font-display text-xl font-semibold text-[#1F1F1F] hover:text-[#C89B5A] transition-colors">
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Button asChild variant="gold" size="lg" className="mt-8 w-full bg-[#C89B5A] text-[#1F1F1F] font-bold hover:bg-[#E4C27A]">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </SheetClose>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[#6B6868]">
              <a href="tel:+919789104651" className="flex items-center gap-2.5 hover:text-[#C89B5A] transition-colors">
                <Phone className="size-4 text-[#C89B5A]" /> +91 9789 104 651
              </a>
              <a
                href="mailto:support@brandlinetech.com"
                className="flex items-center gap-2.5 hover:text-[#C89B5A] transition-colors"
              >
                <Mail className="size-4 text-[#C89B5A]" /> support@brandlinetech.com
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#292525] text-white">
      <div className="section-shell relative z-10 border-t border-white/15 py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_3fr] lg:gap-16">
          {/* Brand / contact */}
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-extrabold tracking-tight text-white"
            >
              Brandline<span className="text-[#C89B5A]">Tech</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
              Empowering Your Brand's Digital Journey
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              Your products. Every marketplace. One growth partner.
            </p>

            <div className="mt-7 space-y-3 text-sm text-white/65">
              <a
                href="tel:+919789104651"
                className="flex items-center gap-3 transition-colors hover:text-[#C89B5A]"
              >
                <Phone className="size-4 shrink-0" />
                +91 9789 104 651
              </a>
              <a
                href="mailto:support@brandlinetech.com"
                className="flex items-center gap-3 break-all transition-colors hover:text-[#C89B5A]"
              >
                <Mail className="size-4 shrink-0" />
                support@brandlinetech.com
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-x-10">
            <FooterCol
              title="Marketplace"
              links={[
                ["Amazon Management", "/marketplace-management"],
                ["Flipkart Management", "/marketplace-management"],
                ["Meesho Management", "/marketplace-management"],
                ["Myntra Management", "/marketplace-management"],
                ["Multi-Marketplace", "/marketplace-management"],
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                ["Catalog Management", "/services#catalog"],
                ["Marketplace Advertising", "/services#advertising"],
                ["SEO", "/services#seo"],
                ["Digital Marketing", "/services#marketing"],
                ["D2C Development", "/services#d2c"],
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                ["About", "/about"],
                ["Why Us", "/about#why-us"],
                ["Packages", "/packages"],
                ["Resources", "/resources"],
                ["Contact", "/contact"],
              ]}
            />

            <div>
              <p className="label-caps text-[#C89B5A]">Contact</p>
              <div className="mt-5 space-y-3 text-sm leading-5 text-white/60">
                <p>Coimbatore, Tamil Nadu</p>
                <p>Palakkad, Kerala</p>
                <a
                  href="tel:+919789104651"
                  className="block transition-colors hover:text-white"
                >
                  +91 9789 104 651
                </a>
                <a
                  href="mailto:support@brandlinetech.com"
                  className="block break-all transition-colors hover:text-white"
                >
                  support@brandlinetech.com
                </a>
              </div>

              <p className="mt-6 label-caps text-[#C89B5A]">Legal</p>
              <div className="mt-4 space-y-3 text-sm text-white/60">
                <Link
                  to="/privacy-policy"
                  className="block transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="block transition-colors hover:text-white"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BrandlineTech. All Rights Reserved.</p>
          <p>Brandline Tech Solutions Pvt. Ltd.</p>
        </div>

        {/* Oversized background wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-6 mt-16 select-none overflow-hidden whitespace-nowrap font-display text-[clamp(7rem,22vw,21rem)] font-extrabold leading-[0.72] tracking-[-0.07em] text-white/[0.035]"
        >
          Brandline
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <p className="label-caps text-gold">{title}</p>
      <div className="mt-5 space-y-3">
        {links.map(([label, to]) => (
          <Link
            key={label}
            to={to as "/"}
            className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
