import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export type ClientProject = {
  id: string;
  name: string;
  websiteUrl: string;
  image: string;
  active: boolean;
  order: number;
};

export type ClientProjectsSettings = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  description: string;
  projects: ClientProject[];
};

export const CLIENT_PROJECTS_KEY = "brandline_client_projects";

export const defaultClientProjects: ClientProjectsSettings = {
  enabled: true,
  eyebrow: "Recent projects",
  title: "Our Clients Websites",
  description: "A selection of ecommerce, marketplace and business websites designed and developed by BrandlineTech.",
  projects: [
    { id: "project-1", name: "Ecommerce Storefront", websiteUrl: "", image: "", active: true, order: 1 },
    { id: "project-2", name: "D2C Brand Website", websiteUrl: "", image: "", active: true, order: 2 },
    { id: "project-3", name: "Marketplace Website", websiteUrl: "", image: "", active: true, order: 3 },
    { id: "project-4", name: "Business Website", websiteUrl: "", image: "", active: true, order: 4 },
  ],
};

export function readClientProjects(): ClientProjectsSettings {
  if (typeof window === "undefined") return defaultClientProjects;
  try {
    const stored = window.localStorage.getItem(CLIENT_PROJECTS_KEY);
    if (!stored) return defaultClientProjects;
    const parsed = JSON.parse(stored) as Partial<ClientProjectsSettings>;
    return {
      ...defaultClientProjects,
      ...parsed,
      projects: parsed.projects ?? defaultClientProjects.projects,
    };
  } catch {
    return defaultClientProjects;
  }
}

export function ClientProjectsSection() {
  const [settings, setSettings] = useState(defaultClientProjects);

  useEffect(() => {
    const sync = () => setSettings(readClientProjects());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("brandline:client-projects-updated", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("brandline:client-projects-updated", sync as EventListener);
    };
  }, []);

  if (!settings.enabled) return null;

  const projects = settings.projects
    .filter((project) => project.active)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="relative overflow-hidden border-t border-[#AAA7A7]/20 bg-[#F8F5F6] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(204,82,122,.08),transparent_26%),radial-gradient(circle_at_88%_78%,rgba(235,23,93,.08),transparent_30%)]" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#EB175D]/8 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#EB175D]">
            {settings.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#363636] sm:text-5xl">
            {settings.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#666163] sm:text-base">
            {settings.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => {
            const Card = (
              <article className="group overflow-hidden rounded-2xl border border-[#AAA7A7]/22 bg-white/80 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-[#EB175D]/28 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#EEE7EA] via-white to-[#F8D8E3]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} website preview`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-5 rounded-xl border border-[#AAA7A7]/25 bg-white shadow-lg">
                      <div className="flex h-5 items-center gap-1.5 border-b border-[#AAA7A7]/18 px-2.5">
                        <span className="size-1.5 rounded-full bg-[#EB175D]/55" />
                        <span className="size-1.5 rounded-full bg-[#CC527A]/40" />
                        <span className="size-1.5 rounded-full bg-[#AAA7A7]/45" />
                      </div>
                      <div className="grid h-[calc(100%-1.25rem)] place-items-center px-4 text-center">
                        <span className="font-display text-lg font-extrabold text-[#363636]/35">{project.name}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-base font-extrabold text-[#363636]">{project.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#EB175D]">
                    {project.websiteUrl ? "Visit website" : "Project showcase"}
                    <ExternalLink className="size-3.5" />
                  </span>
                </div>
              </article>
            );

            return project.websiteUrl ? (
              <a key={project.id} href={project.websiteUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                {Card}
              </a>
            ) : (
              <div key={project.id}>{Card}</div>
            );
          })}
        </div>

        {projects.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-[#AAA7A7]/35 bg-white/45 p-10 text-center text-sm text-[#666163]">
            Client projects can be added from the BrandlineTech admin panel.
          </div>
        )}
      </div>
    </section>
  );
}
