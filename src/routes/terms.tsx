import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "Terms & Conditions | BrandlineTech",
      "Terms of use for the BrandlineTech website and service enquiries.",
      "/terms",
    ),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms cover use of this website and enquiries made to Brandline Tech Solutions Pvt. Ltd. They are a general notice, not a client contract."
      />
      <section className="section-pad">
        <div className="section-shell max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <p>Last updated: September 2026</p>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Website use</h2>
            <p className="mt-3">
              Content on this site is for information about BrandlineTech services. Marketplace names are used to describe operational coverage, not to imply official platform partnerships unless separately confirmed in writing.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Enquiries and packages</h2>
            <p className="mt-3">
              Package prices shown are indicative starting ranges. Scope, platforms and commercial terms are confirmed in a written agreement before work begins. Submitting a form is a request for contact, not a contract.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Illustrative data</h2>
            <p className="mt-3">
              Dashboard figures, charts and metric placeholders on this website are visual examples only. They are not client results, audited performance or guarantees.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Contact</h2>
            <p className="mt-3">
              Brandline Tech Solutions Pvt. Ltd., Complex, Avinashi Road, Coimbatore – 641 004, Tamil Nadu, India. support@brandlinetech.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
