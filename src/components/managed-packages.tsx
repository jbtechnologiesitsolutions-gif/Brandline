import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export type ManagedPackage = {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  featured: boolean;
  active: boolean;
  order: number;
};

export type PackageSettings = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  description: string;
  packages: ManagedPackage[];
};

export const PACKAGES_KEY = "brandline_packages";

export const defaultPackages: PackageSettings = {
  enabled: true,
  eyebrow: "Plans & Packages",
  title: "Choose the support your business needs.",
  description: "Flexible marketplace and ecommerce support packages that can scale with your business.",
  packages: [
    {
      id: "starter",
      name: "Starter",
      price: "Custom",
      billing: "per month",
      description: "For brands starting with structured marketplace support.",
      features: ["Marketplace account support", "Catalog guidance", "Basic reporting", "Email support"],
      featured: false,
      active: true,
      order: 1,
    },
    {
      id: "growth",
      name: "Growth",
      price: "Custom",
      billing: "per month",
      description: "For growing sellers who need active operations and optimization.",
      features: ["Multi-marketplace support", "Catalog optimization", "Advertising coordination", "Performance reporting"],
      featured: true,
      active: true,
      order: 2,
    },
    {
      id: "scale",
      name: "Scale",
      price: "Custom",
      billing: "per month",
      description: "For established brands requiring deeper marketplace and growth support.",
      features: ["Advanced marketplace operations", "Growth planning", "Priority support", "Custom reporting"],
      featured: false,
      active: true,
      order: 3,
    },
  ],
};

export function readPackages(): PackageSettings {
  if (typeof window === "undefined") return defaultPackages;
  try {
    const raw = window.localStorage.getItem(PACKAGES_KEY);
    if (!raw) return defaultPackages;
    const parsed = JSON.parse(raw) as Partial<PackageSettings>;
    return {
      ...defaultPackages,
      ...parsed,
      packages: parsed.packages?.length ? parsed.packages : defaultPackages.packages,
    };
  } catch {
    return defaultPackages;
  }
}

export function ManagedPackagesSection() {
  const [settings, setSettings] = useState<PackageSettings>(defaultPackages);

  useEffect(() => {
    const sync = () => setSettings(readPackages());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("brandline:packages-updated", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("brandline:packages-updated", sync as EventListener);
    };
  }, []);

  if (!settings.enabled) return null;

  const rows = [...settings.packages]
    .filter((item) => item.active)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#EB175D]">{settings.eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#363636] sm:text-5xl">{settings.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666163] sm:text-base">{settings.description}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {rows.map((item) => (
          <article key={item.id} className={`relative rounded-3xl border p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.featured ? "border-[#EB175D]/40 bg-white/90" : "border-[#AAA7A7]/25 bg-white/70"}`}>
            {item.featured && <span className="absolute right-5 top-5 rounded-full bg-[#EB175D] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Popular</span>}
            <h3 className="font-display text-2xl font-extrabold text-[#363636]">{item.name}</h3>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-3xl font-black text-[#363636]">{item.price}</span>
              <span className="pb-1 text-xs text-[#666163]">{item.billing}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#666163]">{item.description}</p>
            <ul className="mt-6 space-y-3">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-[#474747]"><Check className="mt-0.5 size-4 shrink-0 text-[#EB175D]" />{feature}</li>
              ))}
            </ul>
            <a href="/contact" className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#363636] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#EB175D]">Request Consultation</a>
          </article>
        ))}
      </div>
    </section>
  );
}
