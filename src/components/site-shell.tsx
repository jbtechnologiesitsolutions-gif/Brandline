import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
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

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] text-white">
      <div className="section-shell pt-8 sm:pt-10 lg:pt-12">
        <div className="border-t border-white/12" />

        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.35fr_.7fr_.8fr_.8fr_.8fr] lg:gap-10 lg:py-20">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 font-display text-xl font-bold tracking-tight text-white">
              <span className="flex size-8 items-center justify-center rounded-md bg-white text-sm font-black text-[#090909]">B</span>
              <span>Brandline<span className="text-[#EB175D]">Tech</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/48">
              Empowering Your Brand&apos;s Digital Journey through marketplace management, ecommerce operations and digital growth.
            </p>
            <p className="mt-6 text-sm text-white/42">© 2026 BrandlineTech. All rights reserved.</p>
          </div>

          <FooterCol title="Pages" links={[
            ["Services", "/services"],
            ["Marketplaces", "/marketplace-management"],
            ["Solutions", "/solutions"],
            ["Packages", "/packages"],
            ["Resources", "/resources"],
          ]} />

          <FooterCol title="Company" links={[
            ["About", "/about"],
            ["Why Us", "/about#why-us"],
            ["Contact", "/contact"],
            ["Get Consultation", "/contact"],
          ]} />

          <FooterCol title="Legal" links={[
            ["Privacy Policy", "/privacy-policy"],
            ["Terms & Conditions", "/terms"],
          ]} />

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-white/72">
              <a href="tel:+919789104651" className="block transition-colors hover:text-[#EB175D]">+91 9789 104 651</a>
              <a href="mailto:support@brandlinetech.com" className="block break-all transition-colors hover:text-[#EB175D]">support@brandlinetech.com</a>
              <p className="leading-6 text-white/48">Coimbatore, Tamil Nadu</p>
              <p className="leading-6 text-white/48">Palakkad, Kerala</p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none select-none overflow-hidden pb-0 pt-1" aria-hidden="true">
          <div className="whitespace-nowrap font-display text-[18vw] font-extrabold leading-[.72] tracking-[-0.07em] text-white/[0.045] sm:text-[15vw] lg:text-[12.5vw]">
            BrandlineTech
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-5 space-y-4">
        {links.map(([label, to]) => (
          <a key={label} href={to} className="block text-sm text-white/72 transition-colors hover:text-[#EB175D]">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
