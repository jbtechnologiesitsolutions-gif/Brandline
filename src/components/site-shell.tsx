import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, Mail } from "lucide-react";
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
    <Link to="/" className="flex items-center gap-2.5" aria-label="BrandlineTech home">
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
        B
      </span>
      <span className="font-display text-lg font-bold text-foreground">
        Brandline<span className="text-gold">Tech</span>
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
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-nav"
          : "border-transparent bg-background/70",
      )}
    >
      <div className="section-shell flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            {desktopLinks.map(([label, to]) => (
              <Link
                key={label}
                to={to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">
              Get Free Consultation <ArrowRight />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-md bg-background">
            <SheetHeader className="text-left">
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>
                Ecommerce growth, marketplace management and digital solutions.
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
              {mobileLinks.map(([label, to]) => (
                <SheetClose asChild key={label}>
                  <Link to={to} className="border-b py-4 font-display text-2xl font-semibold">
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Button asChild variant="gold" size="lg" className="mt-8 w-full">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight />
                </Link>
              </Button>
            </SheetClose>
            <div className="mt-6 flex gap-5 text-sm text-muted-foreground">
              <a href="tel:+919789104651" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="size-4" /> Call Us
              </a>
              <a
                href="mailto:support@brandlinetech.com"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="size-4" /> Email Us
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark text-primary-foreground">
      <div className="section-shell py-16 lg:py-20">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-display text-2xl font-bold">
              Brandline<span className="text-gold">Tech</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-primary-foreground/60">
              Empowering Your Brand's Digital Journey
            </p>
            <p className="mt-4 max-w-xs text-xs leading-6 text-primary-foreground/40">
              Your products. Every marketplace. One growth partner.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <a
                href="tel:+919789104651"
                className="flex items-center gap-2.5 text-primary-foreground/60 hover:text-gold transition-colors"
              >
                <Phone className="size-4 shrink-0" />
                +91 9789 104 651
              </a>
              <a
                href="mailto:support@brandlinetech.com"
                className="flex items-center gap-2.5 break-all text-primary-foreground/60 hover:text-gold transition-colors"
              >
                <Mail className="size-4 shrink-0" />
                support@brandlinetech.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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
              <p className="label-caps text-gold">Contact</p>
              <div className="mt-5 space-y-3 text-sm text-primary-foreground/60">
                <p>Coimbatore, Tamil Nadu</p>
                <p>Palakkad, Kerala</p>
                <a href="tel:+919789104651" className="block hover:text-primary-foreground">
                  +91 9789 104 651
                </a>
                <a href="mailto:support@brandlinetech.com" className="block break-all hover:text-primary-foreground">
                  support@brandlinetech.com
                </a>
              </div>
              <p className="mt-5 label-caps text-gold">Legal</p>
              <div className="mt-3 space-y-2 text-sm">
                <Link to="/privacy-policy" className="block text-primary-foreground/60 hover:text-primary-foreground">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-primary-foreground/60 hover:text-primary-foreground">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BrandlineTech. All Rights Reserved.</p>
          <p>Brandline Tech Solutions Pvt. Ltd.</p>
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
