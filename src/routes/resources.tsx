import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CTASection, ResourcesSection, ToolsSection } from "@/components/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead(
      "Resources | BrandlineTech Ecommerce Guides",
      "Marketplace guides, listing and advertising primers, and upcoming seller calculators from BrandlineTech.",
      "/resources",
    ),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Guides, insights and seller tools."
        description="Practical reading on catalogs, listings, multi-marketplace strategy and advertising — plus calculators coming soon."
      />
      <ResourcesSection />
      <ToolsSection />
      <CTASection />
    </main>
  );
}
