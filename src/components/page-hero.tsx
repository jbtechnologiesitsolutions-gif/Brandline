import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/sections";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = "Get Free Consultation",
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="subtle-grid border-b bg-surface py-20 md:py-28">
      <div className="section-shell">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-title mt-6 max-w-5xl">{title}</h1>
        <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link to={primaryHref as "/contact"}>
                {primaryCta} <ArrowRight />
              </Link>
            </Button>
            {secondaryCta && secondaryHref ? (
              <Button asChild variant="outline" size="lg">
                <Link to={secondaryHref as "/"}>{secondaryCta}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
