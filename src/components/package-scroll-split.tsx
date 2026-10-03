import { Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ManagedPackage } from "@/components/managed-packages";

export function PackageScrollSplit({ packages }: { packages: ManagedPackage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const visible = packages.slice(0, 3);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.36, 0.72], [0, -54, -24]);
  const rightX = useTransform(scrollYProgress, [0, 0.36, 0.72], [0, 54, 24]);
  const scale = useTransform(scrollYProgress, [0, 0.36], [1, 0.92]);
  const rotateY = useTransform(scrollYProgress, [0.36, 0.76], [0, 180]);
  const rotateZLeft = useTransform(scrollYProgress, [0.36, 0.76], [0, 5]);
  const rotateZRight = useTransform(scrollYProgress, [0.36, 0.76], [0, -5]);
  const cardsY = useTransform(scrollYProgress, [0.78, 1], [0, -130]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.1], [0, 18]);
  const endOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const endY = useTransform(scrollYProgress, [0.8, 1], [36, 0]);

  if (visible.length < 3 || reduceMotion) {
    return <StaticPackageCards packages={packages} />;
  }

  return (
    <>
      <div ref={containerRef} className="relative hidden h-[420vh] w-full lg:block">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden [perspective:1400px]">
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-[14%] text-center"
            style={{ opacity: introOpacity, y: introY }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#EB175D]">Scroll to explore packages</p>
            <p className="mt-2 text-sm text-[#666163]">One growth system. Three levels of support.</p>
          </motion.div>

          <motion.div
            className="relative flex h-[430px] w-full max-w-5xl px-6"
            style={{ scale, y: cardsY, transformStyle: "preserve-3d" }}
          >
            {visible.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative h-full flex-1"
                style={{
                  x: index === 0 ? leftX : index === 2 ? rightX : 0,
                  rotateY,
                  rotateZ: index === 0 ? rotateZLeft : index === 2 ? rotateZRight : 0,
                  zIndex: index + 1,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`absolute inset-0 overflow-hidden border border-white/20 shadow-[0_30px_70px_-28px_rgba(54,54,54,.45)] [backface-visibility:hidden] ${
                    index === 0 ? "rounded-l-[32px]" : index === 2 ? "rounded-r-[32px]" : ""
                  }`}
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="absolute inset-y-0 h-full w-[300%]"
                    style={{
                      left: `${-100 * index}%`,
                      background:
                        "radial-gradient(circle at 22% 30%, rgba(255,255,255,.9), transparent 18%), radial-gradient(circle at 76% 24%, rgba(235,23,93,.34), transparent 26%), linear-gradient(120deg, #AAA7A7 0%, #EEE7EA 35%, #CC527A 67%, #474747 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {index === 1 && (
                      <div className="rounded-3xl border border-white/35 bg-white/20 px-8 py-7 text-center shadow-2xl backdrop-blur-md">
                        <Sparkles className="mx-auto size-7 text-white" />
                        <p className="mt-4 font-display text-3xl font-extrabold text-white">BrandlineTech</p>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[.2em] text-white/75">Growth Packages</p>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col overflow-hidden border p-7 shadow-[0_30px_70px_-28px_rgba(54,54,54,.55)] [backface-visibility:hidden] ${
                    item.featured ? "border-[#EB175D]/40 bg-[#FFF7FA]" : "border-[#AAA7A7]/30 bg-white"
                  }`}
                  style={{
                    transform: "rotateY(180deg)",
                    zIndex: 1,
                    borderRadius: 28,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,23,93,.12),transparent_35%)]" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#EB175D]">Package</p>
                        <h3 className="mt-2 font-display text-2xl font-extrabold text-[#363636]">{item.name}</h3>
                      </div>
                      {item.featured && <span className="rounded-full bg-[#EB175D] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Popular</span>}
                    </div>

                    <div className="mt-5 flex items-end gap-2">
                      <span className="text-3xl font-black text-[#363636]">{item.price}</span>
                      <span className="pb-1 text-xs text-[#666163]">{item.billing}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#666163]">{item.description}</p>

                    <ul className="mt-5 space-y-2.5">
                      {item.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex gap-2.5 text-sm text-[#474747]">
                          <Check className="mt-0.5 size-4 shrink-0 text-[#EB175D]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="/contact" className="mt-auto inline-flex items-center justify-center rounded-xl bg-[#363636] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#EB175D]">
                      Request Consultation
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="pointer-events-none absolute bottom-[12%] left-0 right-0 text-center"
            style={{ opacity: endOpacity, y: endY }}
          >
            <p className="font-display text-3xl font-extrabold tracking-tight text-[#363636]">Choose the support level that fits your growth stage.</p>
            <p className="mt-2 text-sm text-[#666163]">Every package can be customized around your marketplaces, SKU volume and goals.</p>
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden">
        <StaticPackageCards packages={packages} />
      </div>

      {packages.length > 3 && (
        <div className="mt-8 hidden lg:block">
          <StaticPackageCards packages={packages.slice(3)} />
        </div>
      )}
    </>
  );
}

export function StaticPackageCards({ packages }: { packages: ManagedPackage[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {packages.map((item) => (
        <article key={item.id} className={`relative rounded-3xl border p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.featured ? "border-[#EB175D]/40 bg-white/90" : "border-[#AAA7A7]/25 bg-white/70"}`}>
          {item.featured && <span className="absolute right-5 top-5 rounded-full bg-[#EB175D] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Popular</span>}
          <h3 className="font-display text-2xl font-extrabold text-[#363636]">{item.name}</h3>
          <div className="mt-5 flex items-end gap-2"><span className="text-3xl font-black text-[#363636]">{item.price}</span><span className="pb-1 text-xs text-[#666163]">{item.billing}</span></div>
          <p className="mt-4 text-sm leading-6 text-[#666163]">{item.description}</p>
          <ul className="mt-6 space-y-3">{item.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-[#474747]"><Check className="mt-0.5 size-4 shrink-0 text-[#EB175D]" />{feature}</li>)}</ul>
          <a href="/contact" className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#363636] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#EB175D]">Request Consultation</a>
        </article>
      ))}
    </div>
  );
}
