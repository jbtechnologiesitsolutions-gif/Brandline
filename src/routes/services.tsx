import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  CTASection,
  D2CSection,
  DigitalMarketing,
  ServicesSection,
} from "@/components/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Services | BrandlineTech Ecommerce Growth",
      "Marketplace management, catalog, advertising, SEO, digital marketing and D2C website development from BrandlineTech.",
      "/services",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Everything you need to grow online."
        description="One partner for marketplace operations, catalog quality, advertising, SEO, digital marketing and owned D2C storefronts."
        secondaryCta="Request Seller Audit"
        secondaryHref="/#seller-audit"
      />
      <ServicesSection />
      <D2CSection />
      <DigitalMarketing />
      <CTASection />
    </main>
  );
}
