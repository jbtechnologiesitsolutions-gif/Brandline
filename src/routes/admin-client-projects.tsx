import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Eye, ImagePlus, Plus, Save, Trash2 } from "lucide-react";
import {
  CLIENT_PROJECTS_KEY,
  defaultClientProjects,
  readClientProjects,
  type ClientProject,
  type ClientProjectsSettings,
} from "@/components/client-projects";

export const Route = createFileRoute("/admin-client-projects")({
  component: AdminClientProjects,
});

const ADMIN_EMAIL = "brandline@gmail.com";
const STORAGE_KEY = "brandline_admin_email";

function AdminClientProjects() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState<ClientProjectsSettings>(defaultClientProjects);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedEmail = window.localStorage.getItem(STORAGE_KEY)?.trim().toLowerCase();
    if (savedEmail !== ADMIN_EMAIL) {
      navigate({ to: "/admin-login", replace: true });
      return;
    }
    setSettings(readClientProjects());
    setReady(true);
  }, [navigate]);

  const orderedProjects = useMemo(
    () => [...settings.projects].sort((a, b) => a.order - b.order),
    [settings.projects],
  );

  function updateProject(id: string, patch: Partial<ClientProject>) {
    setSettings((current) => ({
      ...current,
      projects: current.projects.map((project) =>
        project.id === id ? { ...project, ...patch } : project,
      ),
    }));
  }

  function addProject() {
    const nextOrder = Math.max(0, ...settings.projects.map((project) => project.order)) + 1;
    const id = `project-${Date.now()}`;
    setSettings((current) => ({
      ...current,
      projects: [
        ...current.projects,
        { id, name: "New Client Website", websiteUrl: "", image: "", active: true, order: nextOrder },
      ],
    }));
  }

  function removeProject(id: string) {
    setSettings((current) => ({
      ...current,
      projects: current.projects.filter((project) => project.id !== id),
    }));
  }

  function handleUpload(id: string, file?: File) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setMessage("Please select an image file.");
      return;
    }
    if (file.size > 1_500_000) {
      setMessage("Image is too large. Please use an image below 1.5 MB for this browser-based admin.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      updateProject(id, { image: String(reader.result || "") });
      setMessage("Image added. Click Save Changes to publish it in this browser.");
    };
    reader.readAsDataURL(file);
  }

  function save() {
    try {
      window.localStorage.setItem(CLIENT_PROJECTS_KEY, JSON.stringify(settings));
      window.dispatchEvent(new Event("brandline:client-projects-updated"));
      setMessage("Client websites section saved successfully.");
    } catch {
      setMessage("Could not save. Uploaded images may be too large for browser storage.");
    }
  }

  function resetDefaults() {
    setSettings(defaultClientProjects);
    setMessage("Defaults restored in the editor. Click Save Changes to apply.");
  }

  if (!ready) {
    return <main className="grid min-h-screen place-items-center bg-[#080808] text-white"><p className="text-sm text-white/45">Opening client projects manager…</p></main>;
  }

  return (
    <main className="min-h-screen bg-[#080808] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="/admin" className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"><ArrowLeft className="size-4" /> Back to Admin</a>
            <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-[#EB175D]">Website Management</p>
            <h1 className="mt-2 text-3xl font-bold">Client Websites / Recent Projects</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Manage the project showcase displayed immediately above the Technology Stack section.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/70 hover:bg-white/[0.05]"><Eye className="size-4" /> Preview Website</a>
            <button onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-[#EB175D] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#CC527A]"><Save className="size-4" /> Save Changes</button>
          </div>
        </div>

        {message && <div className="mb-6 rounded-xl border border-[#EB175D]/25 bg-[#EB175D]/10 px-4 py-3 text-sm text-[#F8D8E3]">{message}</div>}

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div><h2 className="font-bold">Section Settings</h2><p className="mt-1 text-xs text-white/40">Heading, description and visibility.</p></div>
            <label className="flex items-center gap-2 text-sm text-white/65"><input type="checkbox" checked={settings.enabled} onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })} className="accent-[#EB175D]" /> Enabled</label>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field label="Eyebrow"><input value={settings.eyebrow} onChange={(e) => setSettings({ ...settings, eyebrow: e.target.value })} className="admin-input" /></Field>
            <Field label="Title"><input value={settings.title} onChange={(e) => setSettings({ ...settings, title: e.target.value })} className="admin-input" /></Field>
            <Field label="Description" wide><textarea rows={3} value={settings.description} onChange={(e) => setSettings({ ...settings, description: e.target.value })} className="admin-input resize-none" /></Field>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div><h2 className="font-bold">Client Website Cards</h2><p className="mt-1 text-xs text-white/40">Add client name, live URL, screenshot and display order.</p></div>
            <button onClick={addProject} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#EB175D]/35 bg-[#EB175D]/10 px-4 py-2.5 text-sm font-bold text-[#F8D8E3] hover:bg-[#EB175D]/20"><Plus className="size-4" /> Add Client Website</button>
          </div>

          <div className="mt-6 space-y-4">
            {orderedProjects.map((project) => (
              <div key={project.id} className="grid gap-4 rounded-2xl border border-white/8 bg-black/20 p-4 lg:grid-cols-[150px_1fr_120px]">
                <div>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                    {project.image ? <img src={project.image} alt="" className="h-full w-full object-cover object-top" /> : <div className="grid h-full place-items-center text-white/20"><ImagePlus /></div>}
                  </div>
                  <label className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/10 px-2 py-2 text-xs text-white/55 hover:bg-white/[0.04]">
                    <ImagePlus className="size-3.5" /> Upload Image
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(project.id, e.target.files?.[0])} />
                  </label>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Client / Project Name"><input value={project.name} onChange={(e) => updateProject(project.id, { name: e.target.value })} className="admin-input" /></Field>
                  <Field label="Website URL"><input value={project.websiteUrl} onChange={(e) => updateProject(project.id, { websiteUrl: e.target.value })} placeholder="https://..." className="admin-input" /></Field>
                  <Field label="Image URL (optional)"><input value={project.image.startsWith("data:") ? "" : project.image} onChange={(e) => updateProject(project.id, { image: e.target.value })} placeholder="https://.../screenshot.jpg" className="admin-input" /></Field>
                  <Field label="Display Order"><input type="number" min={1} value={project.order} onChange={(e) => updateProject(project.id, { order: Number(e.target.value) || 1 })} className="admin-input" /></Field>
                </div>

                <div className="flex flex-row items-center justify-between gap-3 lg:flex-col lg:items-stretch lg:justify-start">
                  <label className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs text-white/65"><input type="checkbox" checked={project.active} onChange={(e) => updateProject(project.id, { active: e.target.checked })} className="accent-[#EB175D]" /> Active</label>
                  <button onClick={() => removeProject(project.id)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/15 px-3 py-2.5 text-xs text-red-300/75 hover:bg-red-400/10"><Trash2 className="size-3.5" /> Remove</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6 flex justify-between gap-4">
          <button onClick={resetDefaults} className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/55 hover:bg-white/[0.04]">Restore Defaults</button>
          <button onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-[#EB175D] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#CC527A]"><Save className="size-4" /> Save Changes</button>
        </div>
      </div>
      <style>{`.admin-input{width:100%;border-radius:.75rem;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);padding:.7rem .85rem;font-size:.875rem;color:white;outline:none}.admin-input:focus{border-color:rgba(235,23,93,.65)}.admin-input::placeholder{color:rgba(255,255,255,.22)}`}</style>
    </main>
  );
}

function Field({ label, wide, children }: { label: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={wide ? "md:col-span-2" : ""}><span className="mb-2 block text-xs font-semibold text-white/45">{label}</span>{children}</label>;
}
