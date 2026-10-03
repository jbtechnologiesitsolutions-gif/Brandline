import { useEffect, useMemo, useState } from "react";

export type TechnologyItem = {
  id: string;
  name: string;
  short: string;
  category: string;
  color: string;
  active: boolean;
  order: number;
};

export type TechnologyStackSettings = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  description: string;
  categories: string[];
  items: TechnologyItem[];
};

export const TECHNOLOGY_STACK_KEY = "brandline_technology_stack";

export const defaultTechnologyStack: TechnologyStackSettings = {
  enabled: true,
  eyebrow: "Our capabilities",
  title: "Technology Stack",
  description:
    "We use proven technologies to build reliable, scalable and conversion-focused digital experiences.",
  categories: ["Frontend", "Backend", "CMS", "Database"],
  items: [
    { id: "react", name: "React", short: "RE", category: "Frontend", color: "#61DAFB", active: true, order: 1 },
    { id: "typescript", name: "TypeScript", short: "TS", category: "Frontend", color: "#3178C6", active: true, order: 2 },
    { id: "tailwind", name: "Tailwind CSS", short: "TW", category: "Frontend", color: "#38BDF8", active: true, order: 3 },
    { id: "node", name: "Node.js", short: "JS", category: "Backend", color: "#3C873A", active: true, order: 4 },
    { id: "express", name: "Express.js", short: "EX", category: "Backend", color: "#363636", active: true, order: 5 },
    { id: "php", name: "PHP", short: "PHP", category: "Backend", color: "#777BB4", active: true, order: 6 },
    { id: "laravel", name: "Laravel", short: "L", category: "Backend", color: "#FF2D20", active: true, order: 7 },
    { id: "wordpress", name: "WordPress", short: "WP", category: "CMS", color: "#21759B", active: true, order: 8 },
    { id: "shopify", name: "Shopify", short: "S", category: "CMS", color: "#7AB55C", active: true, order: 9 },
    { id: "mysql", name: "MySQL", short: "MY", category: "Database", color: "#4479A1", active: true, order: 10 },
    { id: "postgresql", name: "PostgreSQL", short: "PG", category: "Database", color: "#336791", active: true, order: 11 },
    { id: "mongodb", name: "MongoDB", short: "MO", category: "Database", color: "#47A248", active: true, order: 12 },
  ],
};

export function readTechnologyStack(): TechnologyStackSettings {
  if (typeof window === "undefined") return defaultTechnologyStack;
  try {
    const stored = window.localStorage.getItem(TECHNOLOGY_STACK_KEY);
    if (!stored) return defaultTechnologyStack;
    const parsed = JSON.parse(stored) as Partial<TechnologyStackSettings>;
    return {
      ...defaultTechnologyStack,
      ...parsed,
      categories: parsed.categories?.length ? parsed.categories : defaultTechnologyStack.categories,
      items: parsed.items?.length ? parsed.items : defaultTechnologyStack.items,
    };
  } catch {
    return defaultTechnologyStack;
  }
}

export function TechnologyStackSection() {
  const [settings, setSettings] = useState<TechnologyStackSettings>(defaultTechnologyStack);
  const [activeCategory, setActiveCategory] = useState(defaultTechnologyStack.categories[0]);

  useEffect(() => {
    const sync = () => {
      const next = readTechnologyStack();
      setSettings(next);
      if (!next.categories.includes(activeCategory)) {
        setActiveCategory(next.categories[0] ?? "");
      }
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("brandline:technology-stack-updated", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("brandline:technology-stack-updated", sync as EventListener);
    };
  }, [activeCategory]);

  const visibleItems = useMemo(
    () =>
      settings.items
        .filter((item) => item.active && item.category === activeCategory)
        .sort((a, b) => a.order - b.order),
    [settings.items, activeCategory],
  );

  if (!settings.enabled) return null;

  return (
    <section className="relative overflow-hidden border-t border-[#AAA7A7]/20 bg-[#F6F1F3] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(235,23,93,.10),transparent_32%),radial-gradient(circle_at_18%_82%,rgba(204,82,122,.12),transparent_34%)]" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#EB175D]">{settings.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#363636] sm:text-5xl">{settings.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#666163] lg:justify-self-end">{settings.description}</p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[13rem_1fr]">
          <div className="h-fit rounded-2xl border border-[#AAA7A7]/25 bg-white/65 p-3 shadow-sm backdrop-blur-xl">
            <p className="px-3 pb-3 pt-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#666163]">Categories</p>
            <div className="space-y-1.5">
              {settings.categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#EB175D] text-white shadow-[0_10px_24px_-14px_rgba(235,23,93,.85)]"
                      : "text-[#474747] hover:bg-[#EB175D]/8 hover:text-[#EB175D]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {visibleItems.map((item) => (
              <div key={item.id} className="group rounded-2xl border border-[#AAA7A7]/20 bg-white/72 p-5 text-center shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#EB175D]/30 hover:shadow-xl">
                <div
                  className="mx-auto grid size-16 place-items-center rounded-2xl border bg-white text-lg font-black shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ color: item.color, borderColor: `${item.color}35` }}
                >
                  {item.short}
                </div>
                <p className="mt-4 text-sm font-bold text-[#363636]">{item.name}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#666163]">{item.category}</p>
              </div>
            ))}
            {visibleItems.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-[#AAA7A7]/35 bg-white/40 p-10 text-center text-sm text-[#666163]">
                No technologies are enabled in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
