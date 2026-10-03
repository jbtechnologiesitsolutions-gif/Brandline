import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { pageHead } from "@/lib/seo";

type TestimonialRow = {
  id: number;
  client: string;
  company: string;
  rating: number;
  quote: string;
  status: "Published" | "Draft";
  date: string;
};

const defaults: TestimonialRow[] = [
  {
    id: 1,
    client: "Sample Client",
    company: "D2C Brand",
    rating: 5,
    quote: "BrandlineTech helped us organize our marketplace operations.",
    status: "Published",
    date: "20 Sep 2026",
  },
];

export const Route = createFileRoute("/testimonials")({
  head: () => pageHead("Testimonials | BrandlineTech", "See feedback from brands and sellers supported by BrandlineTech.", "/testimonials"),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [rows, setRows] = useState<TestimonialRow[]>(defaults);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("brandline_admin_testimonials");
      if (raw) setRows(JSON.parse(raw) as TestimonialRow[]);
    } catch {
      setRows(defaults);
    }
  }, []);

  const published = rows.filter((row) => row.status === "Published");

  return (
    <main>
      <PageHero
        eyebrow="Testimonials"
        title="What our clients say about working with us."
        description="Feedback from brands and sellers supported across marketplace operations, ecommerce and digital growth."
      />
      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {published.map((item) => (
            <article key={item.id} className="rounded-3xl border border-[#AAA7A7]/25 bg-white/75 p-6 shadow-sm backdrop-blur-xl">
              <div className="flex gap-1 text-[#EB175D]">
                {Array.from({ length: item.rating }).map((_, index) => <Star key={index} className="size-4" fill="currentColor" />)}
              </div>
              <p className="mt-5 text-base leading-7 text-[#474747]">“{item.quote}”</p>
              <div className="mt-6 border-t border-[#AAA7A7]/20 pt-4">
                <p className="font-display font-extrabold text-[#363636]">{item.client}</p>
                <p className="mt-1 text-xs uppercase tracking-[.12em] text-[#666163]">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
