import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Addons, CTASection, FAQ, PricingSection } from "@/components/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  head: () =>
    pageHead(
      "Packages | BrandlineTech Marketplace Support",
      "Marketplace management packages for startups, growing sellers and established brands. Custom scopes available.",
      "/packages",
    ),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Packages"
        title="Choose the support your business needs."
        description="Structured monthly marketplace support based on SKU volume, platforms and operational depth. Packages can be customized."
      />
      <PricingSection />
      <Addons />
      <FAQ />
      <CTASection />
    </main>
  );
}
