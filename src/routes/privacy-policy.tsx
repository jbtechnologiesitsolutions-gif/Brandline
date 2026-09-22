import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead(
      "Privacy Policy | BrandlineTech",
      "How BrandlineTech collects, uses and stores information submitted through this website.",
      "/privacy-policy",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains how Brandline Tech Solutions Pvt. Ltd. handles information collected through this website. It is a general notice, not legal advice."
      />
      <section className="section-pad">
        <div className="section-shell max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <p>Last updated: September 2026</p>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Information we collect</h2>
            <p className="mt-3">
              When you submit a consultation or seller audit form, we collect the details you provide, such as name, company, phone, email, marketplace, SKU volume and message content.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">How we use it</h2>
            <p className="mt-3">
              We use submitted information to respond to your enquiry, discuss services and, if you become a client, to coordinate work. We do not sell your contact details.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Storage and access</h2>
            <p className="mt-3">
              Form submissions on this version of the site are handled in the browser until a backend is connected. Once a production pipeline is in place, information will be stored only as needed to fulfil the request.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Contact</h2>
            <p className="mt-3">
              Questions about this notice: support@brandlinetech.com or +91 9789 104 651.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
