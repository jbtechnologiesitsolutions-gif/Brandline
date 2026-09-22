import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  CTASection,
  GoalSection,
  GrowthFramework,
  ProcessSection,
  WhoWeHelp,
} from "@/components/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () =>
    pageHead(
      "Solutions | BrandlineTech Ecommerce Partner",
      "Ecommerce solutions for new sellers, growing marketplace brands, multi-platform operators and businesses expanding beyond India.",
      "/solutions",
    ),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Built for every stage of your ecommerce journey."
        description="From first marketplace listing to multi-channel scale, BrandlineTech structures operations around where your business is today."
      />
      <WhoWeHelp />
      <GrowthFramework />
      <GoalSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
