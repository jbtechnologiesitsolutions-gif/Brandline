import { useEffect, useRef, useState } from "react";
import { PlusIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { marketplaceServices } from "@/lib/site-data";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogClose,
} from "@/components/core/morphing-dialog";

type CardOffset = { x: number; y: number; rotate: number };

export function MarketplaceLayeredServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const [stacked, setStacked] = useState(false);
  const [offsets, setOffsets] = useState<CardOffset[]>([]);

  useEffect(() => {
    if (reduceMotion) return;

    const measure = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const targetX = containerRect.left + containerRect.width / 2;
      const targetY = containerRect.top + Math.min(containerRect.height * 0.46, 390);

      const next = cardRefs.current.map((card, index) => {
        if (!card) return { x: 0, y: 0, rotate: 0 };
        const rect = card.getBoundingClientRect();
        return {
          x: targetX - (rect.left + rect.width / 2),
          y: targetY - (rect.top + rect.height / 2),
          rotate: ((index % 5) - 2) * 2.8,
        };
      });

      setOffsets(next);
      setStacked(true);
    };

    const frame = window.requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [reduceMotion]);

  const shouldStack = stacked && !reduceMotion && offsets.length === marketplaceServices.length;

  return (
    <section className="section-pad bg-surface scroll-mt-24" id="marketplace-services">
      <div className="section-shell">
        <div>
          <p className="label-caps text-muted-foreground">Operational coverage</p>
          <h2 className="section-title mt-5 max-w-4xl text-foreground">
            From listing to growth, we manage the moving parts.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            Hover over the layered service deck to reveal the full operational grid. Click any card to view details and deliverables.
          </p>
        </div>

        <div className="mt-8 hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#EB175D] lg:flex">
          <span className="inline-block size-2 rounded-full bg-[#EB175D]" />
          Hover the stack to explore all services
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => !reduceMotion && setStacked(false)}
          onMouseLeave={() => !reduceMotion && setStacked(true)}
          className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {marketplaceServices.map((svc, i) => {
            const offset = offsets[i] ?? { x: 0, y: 0, rotate: 0 };
            return (
              <motion.div
                key={svc.title}
                ref={(node) => {
                  cardRefs.current[i] = node;
                }}
                className="relative h-full"
                animate={
                  shouldStack
                    ? { x: offset.x, y: offset.y, rotate: offset.rotate, scale: 0.98 }
                    : { x: 0, y: 0, rotate: 0, scale: 1 }
                }
                transition={{
                  duration: 0.72,
                  delay: shouldStack ? i * 0.012 : i * 0.015,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ zIndex: shouldStack ? 100 - i : 1 }}
              >
                <MorphingDialog
                  transition={{ type: "spring", bounce: 0.05, duration: 0.3 }}
                >
                  <MorphingDialogTrigger className="h-full w-full">
                    <article className="group relative flex h-full min-h-[230px] flex-col gap-3 rounded-xl border border-[#AAA7A7]/25 bg-white/92 p-6 shadow-[0_16px_45px_-24px_rgba(54,54,54,.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#EB175D]/35 hover:shadow-[0_24px_60px_-28px_rgba(235,23,93,.38)]">
                      <div className="flex items-start justify-between">
                        <div className="grid size-10 place-items-center rounded-lg bg-[#EB175D]/10 text-[#EB175D] transition-colors group-hover:bg-[#EB175D] group-hover:text-white">
                          <svc.icon className="size-5" />
                        </div>
                        <span className="text-xs font-bold text-[#666163]/50">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <MorphingDialogTitle className="mt-2 font-display text-base font-bold text-[#363636]">
                        {svc.title}
                      </MorphingDialogTitle>
                      <MorphingDialogSubtitle className="text-xs leading-5 text-[#666163]">
                        {svc.description}
                      </MorphingDialogSubtitle>

                      <div className="mt-auto flex items-center justify-between border-t border-[#AAA7A7]/20 pt-3">
                        <span className="text-[11px] font-semibold text-[#EB175D]">Details & Deliverables</span>
                        <span className="grid size-6 place-items-center rounded-md border border-[#AAA7A7]/30 bg-white text-[#666163] transition-colors group-hover:bg-[#EB175D]/10 group-hover:text-[#EB175D]">
                          <PlusIcon className="size-3" />
                        </span>
                      </div>
                    </article>
                  </MorphingDialogTrigger>

                  <MorphingDialogContainer>
                    <MorphingDialogContent className="pointer-events-auto relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
                      <div className="flex items-center gap-4">
                        <div className="grid size-12 place-items-center rounded-xl bg-[#EB175D]/10 text-[#EB175D]">
                          <svc.icon className="size-6" />
                        </div>
                        <div>
                          <MorphingDialogTitle className="font-display text-2xl font-bold text-foreground">
                            {svc.title}
                          </MorphingDialogTitle>
                          <MorphingDialogSubtitle className="text-xs font-semibold uppercase tracking-wider text-[#EB175D]">
                            BrandlineTech Managed Solution
                          </MorphingDialogSubtitle>
                        </div>
                      </div>

                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, y: 12 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 12 },
                        }}
                      >
                        <p className="mt-6 text-sm leading-7 text-muted-foreground">
                          {svc.description}
                        </p>
                        <div className="mt-6 rounded-xl border border-[#EB175D]/15 bg-[#EB175D]/5 p-4">
                          <p className="text-xs font-bold uppercase tracking-[.14em] text-[#EB175D]">How we support this area</p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Our team reviews the current setup, defines the operational requirements, executes the agreed scope and monitors progress as part of the ongoing marketplace workflow.
                          </p>
                        </div>
                      </MorphingDialogDescription>

                      <MorphingDialogClose className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#363636] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#EB175D]">
                        Close details
                      </MorphingDialogClose>
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
