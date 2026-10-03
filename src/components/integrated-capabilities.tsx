import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

function CapabilityCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  return (
    <div className="relative h-[24rem] min-w-0 w-full">
      <a
        href={service.href}
        className="group/capability relative block h-full w-full [perspective:1400px] focus-visible:outline-none"
        aria-label={`${service.title} — ${service.cta}`}
      >
        {/* Back cover stays inside the grid footprint */}
        <div className="absolute inset-y-0 left-0 right-7 overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-[#CC527A] via-[#EB175D] to-[#8F123E] shadow-[0_28px_70px_-28px_rgba(54,54,54,.65)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.30),transparent_34%)]" />
          <div className="absolute bottom-6 left-6 right-8">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/60">BrandlineTech</p>
            <p className="mt-2 max-w-[13rem] font-display text-sm font-semibold leading-5 text-white/90">
              Integrated ecommerce capability
            </p>
          </div>
        </div>

        {/* Reveal tab remains reserved within the card width */}
        <div className="absolute bottom-6 right-1 z-10 flex h-[13rem] w-14 -translate-x-5 items-start justify-center rounded-r-2xl bg-[#363636] pt-5 text-white shadow-xl transition-all duration-500 ease-out group-hover/capability:translate-x-0 group-hover/capability:rotate-[4deg] group-focus-visible/capability:translate-x-0 group-focus-visible/capability:rotate-[4deg]">
          <span className="origin-center -rotate-90 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[.18em]">
            Explore service
          </span>
        </div>

        {/* Front cover */}
        <article
          id={service.id}
          className="absolute inset-y-0 left-0 right-7 z-20 flex origin-left flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/92 p-6 text-[#363636] shadow-[0_20px_50px_-24px_rgba(54,54,54,.45)] backdrop-blur-md transition-transform duration-500 ease-out [backface-visibility:hidden] [transform-style:preserve-3d] group-hover/capability:[transform:rotateY(-24deg)] group-focus-visible/capability:[transform:rotateY(-24deg)]"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#AAA7A7] via-[#CC527A] to-[#EB175D]" />

          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#6D686A]">
              {service.number} / {service.eyebrow}
            </span>
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F8D8E3] text-[#EB175D] transition-transform duration-500 group-hover/capability:scale-110 group-hover/capability:rotate-6">
              <Icon className="size-4" />
            </div>
          </div>

          <h3 className="mt-7 min-h-[3.25rem] font-display text-xl font-extrabold leading-tight">
            {service.title}
          </h3>
          <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-[#666163]">
            {service.description}
          </p>

          <ul className="mt-5 grid gap-x-4 gap-y-2 text-xs sm:grid-cols-2">
            {service.items.slice(0, 4).map((item) => (
              <li key={item} className="flex min-w-0 items-start gap-2 leading-5 text-[#474747]">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#EB175D]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#AAA7A7]/30 pt-5">
            <span className="min-w-0 text-sm font-bold text-[#EB175D]">{service.cta}</span>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#363636] text-white transition-transform duration-300 group-hover/capability:translate-x-1">
              <ArrowRight className="size-4" />
            </span>
          </div>
        </article>
      </a>
    </div>
  );
}

export function IntegratedCapabilities() {
  return (
    <section className="section-pad" id="services">
      <div className="section-shell">
        <div>
          <p className="label-caps text-muted-foreground">Integrated capabilities</p>
          <h2 className="section-title mt-5 max-w-4xl text-foreground">Everything you need to grow online.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            From marketplace operations to digital marketing and D2C development, we provide end-to-end ecommerce growth support.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <CapabilityCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
