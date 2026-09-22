import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  AboutBlock,
  CTASection,
  ProcessSection,
  ValueSection,
  WhyIndustries,
} from "@/components/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About BrandlineTech | Ecommerce Growth Partner",
      "BrandlineTech is a technology-driven ecommerce growth partner helping brands launch, manage and scale online.",
      "/about",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="More than a service provider. A digital growth partner."
        description="BrandlineTech brings together ecommerce operations, marketplace management, digital marketing and technology to help businesses establish and scale their online presence."
      />
      <AboutBlock />
      <WhyIndustries />
      <ValueSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
