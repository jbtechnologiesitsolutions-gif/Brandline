import { useEffect, useState } from "react";
import { ClientProjectSurfer } from "@/components/client-project-surfer";

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
    <section className="relative overflow-hidden border-t border-[#AAA7A7]/14 bg-[#F8F5F6] py-8 sm:py-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(204,82,122,.06),transparent_26%),radial-gradient(circle_at_88%_78%,rgba(235,23,93,.06),transparent_30%)]" />
      <div className="section-shell relative">
        {projects.length > 0 ? (
          <ClientProjectSurfer
            projects={projects}
            eyebrow={settings.eyebrow}
            title={settings.title}
            description={settings.description}
          />
        ) : (
          <div className="rounded-2xl border border-dashed border-[#AAA7A7]/35 bg-white/45 p-10 text-center text-sm text-[#666163]">
            Client projects can be added from the BrandlineTech admin panel.
          </div>
        )}
      </div>
    </section>
  );
}
