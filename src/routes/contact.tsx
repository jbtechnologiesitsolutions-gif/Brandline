import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ContactSection, CTASection } from "@/components/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact BrandlineTech | Free Consultation",
      "Request a free consultation with BrandlineTech. Phone +91 9789 104 651. Offices in Coimbatore and Palakkad.",
      "/contact",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your ecommerce goals."
        description="Tell us where you sell today, what you want to grow, and we will outline a practical marketplace and digital plan."
        primaryCta="Request Consultation"
        primaryHref="/contact#contact"
        secondaryCta="Request Seller Audit"
        secondaryHref="/#seller-audit"
      />
      <ContactSection />
      <CTASection />
    </main>
  );
}
