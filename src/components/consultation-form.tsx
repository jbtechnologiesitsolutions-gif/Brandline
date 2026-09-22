import { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border bg-card p-12 text-center shadow-card">
        <div className="grid size-16 place-items-center rounded-full bg-gold/15">
          <CircleCheck className="size-8 text-gold" />
        </div>
        <h3 className="mt-5 text-xl font-bold">Request Received</h3>
        <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
          Thank you for reaching out. We'll review your details and get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-card p-7 shadow-card sm:p-9">
      <h3 className="font-display text-xl font-bold">Request a Consultation</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill in your details and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-name">
              Full Name *
            </label>
            <input
              required
              id="cf-name"
              name="name"
              placeholder="Your full name"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-company">
              Company Name
            </label>
            <input
              id="cf-company"
              name="company"
              placeholder="Your company"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-phone">
              Phone *
            </label>
            <input
              required
              id="cf-phone"
              name="phone"
              type="tel"
              placeholder="+91 xxxxxxxxxx"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-email">
              Email *
            </label>
            <input
              required
              id="cf-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-btype">
              Business Type
            </label>
            <select
              id="cf-btype"
              name="businessType"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              <option value="">Select type</option>
              {["New Seller", "Existing Marketplace Seller", "D2C Brand", "Manufacturer", "Retailer", "SME", "Established Brand"].map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-marketplace">
              Current Marketplace
            </label>
            <select
              id="cf-marketplace"
              name="marketplace"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              <option value="">Select marketplace</option>
              {["Amazon", "Flipkart", "Meesho", "Myntra", "AJIO", "Nykaa", "Multiple Marketplaces", "Not on any yet", "Other"].map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-services">
              Services Required
            </label>
            <select
              id="cf-services"
              name="services"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              <option value="">Select service</option>
              {["Marketplace Management", "Catalog Management", "Marketplace Advertising", "SEO", "Digital Marketing", "D2C Website", "Multiple Services"].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-budget">
              Monthly Budget
            </label>
            <select
              id="cf-budget"
              name="budget"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              <option value="">Select budget</option>
              {["Under ₹10,000", "₹10,000 – ₹20,000", "₹20,000 – ₹40,000", "₹40,000 – ₹80,000", "₹80,000+", "To be discussed"].map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold" htmlFor="cf-message">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            placeholder="Tell us about your business and what you're looking to achieve..."
            className="w-full rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
          />
        </div>

        <Button type="submit" variant="gold" size="lg" className="w-full">
          Request Consultation <ArrowRight />
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We'll respond within 1–2 business days. No spam, ever.
        </p>
      </form>
    </div>
  );
}
