import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  CTASection,
  MarketplaceFeature,
  MarketplaceServices,
  PlatformSection,
  SellerAudit,
} from "@/components/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/marketplace-management")({
  head: () =>
    pageHead(
      "Marketplace Management | BrandlineTech",
      "End-to-end marketplace operations across Amazon, Flipkart, Meesho, Myntra, AJIO and other ecommerce channels.",
      "/marketplace-management",
    ),
  component: MarketplacePage,
});

function MarketplacePage() {
  return (
    <main>
      <PageHero
        eyebrow="Marketplaces"
        title="Your marketplace. Our expertise."
        description="Catalog, pricing, inventory, orders, advertising and account health — coordinated as one ecommerce operation, not a pile of disconnected tasks."
        secondaryCta="Request Seller Audit"
        secondaryHref="/#seller-audit"
      />
      <MarketplaceFeature />
      <MarketplaceServices />
      <PlatformSection />
      <SellerAudit />
      <CTASection />
    </main>
  );
}
