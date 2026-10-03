import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import type { ClientProject } from "@/components/client-projects";

export function ClientProjectSurfer({
  projects,
  eyebrow = "Selected work",
  title = "Websites we’ve built",
  description = "A selection of ecommerce, marketplace and business websites designed and developed by BrandlineTech.",
}: {
  projects: ClientProject[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.18,
    stiffness: 120,
    damping: 24,
  });

  const stepX = 220;
  const stepY = -62;
  const stepZ = -205;
  const travelCount = Math.max(projects.length - 1, 1);

  const x = useTransform(smoothProgress, [0, 1], [travelCount * 92, -travelCount * 125]);
  const y = useTransform(smoothProgress, [0, 1], [travelCount * -14, travelCount * 14]);
  const z = useTransform(smoothProgress, [0, 1], [travelCount * 84, travelCount * -84]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  }

  function handleMouseLeave() {
    mouseX.set(-10000);
    mouseY.set(-10000);
  }

  if (projects.length === 0) return null;

  if (reduceMotion) {
    return (
      <div>
        <div className="mb-6 max-w-2xl">
          <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#EB175D]">{eyebrow}</p>
          <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#363636] sm:text-4xl">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#666163]">{description}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => <StaticProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="relative h-[540px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] text-white shadow-[0_24px_80px_-38px_rgba(0,0,0,.8)] sm:h-[580px] lg:h-[620px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(235,23,93,.18),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(204,82,122,.14),transparent_34%)]" />

      <div className="pointer-events-none absolute left-5 top-5 z-30 max-w-[70%] sm:left-7 sm:top-7 lg:left-8 lg:top-8">
        <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#EB175D]">{eyebrow}</p>
        <h3 className="mt-2 max-w-xl font-display text-3xl font-extrabold leading-[.95] tracking-tight sm:text-4xl lg:text-5xl">
          {title}
          <span className="ml-2 align-top font-mono text-[.28em] font-medium text-white/45">({projects.length})</span>
        </h3>
        <p className="mt-3 max-w-xl text-xs leading-5 text-white/48 sm:text-sm">{description}</p>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-5 z-30 hidden text-[9px] font-bold uppercase tracking-[.18em] text-white/35 sm:block">
        Scroll to surf · Hover to explore
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center pt-24 sm:pt-20"
        style={{ perspective: "1750px", perspectiveOrigin: "20% 24%" }}
      >
        <motion.div
          className="relative h-0 w-0 translate-y-6 sm:translate-y-8"
          style={{ x, y, z, transformStyle: "preserve-3d" }}
        >
          {projects.map((project, index) => (
            <SurferCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              stepX={stepX}
              stepY={stepY}
              stepZ={stepZ}
              mouseX={mouseX}
              mouseY={mouseY}
              scrollProgress={smoothProgress}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SurferCard({
  project,
  index,
  total,
  stepX,
  stepY,
  stepZ,
  mouseX,
  mouseY,
  scrollProgress,
}: {
  project: ClientProject;
  index: number;
  total: number;
  stepX: number;
  stepY: number;
  stepZ: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform([mouseX, mouseY, scrollProgress], ([mx, my]) => {
    if (!ref.current) return 900;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return Math.hypot(Number(mx) - cx, Number(my) - cy);
  });

  const scaleTarget = useTransform(distance, [0, 380], [1.12, 1]);
  const scale = useSpring(scaleTarget, { mass: 0.45, stiffness: 280, damping: 24 });

  const transform = useTransform(scale, (s) => {
    const centerOffset = (total - 1) / 2;
    const slot = index - centerOffset;
    const baseX = slot * stepX;
    const baseY = slot * stepY;
    const baseZ = slot * stepZ;
    return `translate3d(${baseX}px, ${baseY}px, ${baseZ}px) rotateY(-38deg) scale(${s})`;
  });

  const card = (
    <motion.div
      ref={ref}
      className="group absolute h-[280px] w-[215px] overflow-hidden rounded-2xl border border-white/12 bg-[#141414] shadow-[0_30px_70px_-28px_rgba(0,0,0,.9)] sm:h-[325px] sm:w-[245px] lg:h-[360px] lg:w-[270px]"
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 font-mono text-[10px] text-white/60 backdrop-blur-md">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative h-full w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} website preview`}
            className="h-full w-full object-cover object-top brightness-[.72] transition duration-500 group-hover:scale-[1.025] group-hover:brightness-100"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#363636] via-[#CC527A] to-[#EB175D]">
            <div className="absolute inset-5 rounded-xl border border-white/20 bg-black/20 p-4 backdrop-blur-sm">
              <div className="flex gap-1.5"><span className="size-2 rounded-full bg-white/70"/><span className="size-2 rounded-full bg-white/45"/><span className="size-2 rounded-full bg-white/30"/></div>
              <div className="grid h-[calc(100%-20px)] place-items-center text-center">
                <span className="font-display text-2xl font-extrabold text-white/90">{project.name}</span>
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 p-5">
        <h4 className="font-display text-lg font-extrabold text-white sm:text-xl">{project.name}</h4>
        <div className="mt-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#F78EAF]">
          {project.websiteUrl ? "Visit live website" : "Project showcase"}
          <ExternalLink className="size-3.5" />
        </div>
      </div>
    </motion.div>
  );

  return project.websiteUrl ? (
    <a href={project.websiteUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>{card}</a>
  ) : card;
}

function StaticProjectCard({ project }: { project: ClientProject }) {
  const card = (
    <article className="overflow-hidden rounded-2xl border border-[#AAA7A7]/20 bg-white shadow-sm">
      <div className="aspect-[16/10] overflow-hidden bg-[#EEE7EA]">
        {project.image ? <img src={project.image} alt={`${project.name} website preview`} className="h-full w-full object-cover object-top" loading="lazy" /> : <div className="grid h-full place-items-center px-4 text-center font-display font-bold text-[#363636]/40">{project.name}</div>}
      </div>
      <div className="p-4"><h4 className="font-display font-extrabold text-[#363636]">{project.name}</h4></div>
    </article>
  );
  return project.websiteUrl ? <a href={project.websiteUrl} target="_blank" rel="noreferrer">{card}</a> : card;
}
