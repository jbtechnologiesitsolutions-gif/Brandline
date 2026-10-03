import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Plus, Save, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  PACKAGES_KEY,
  defaultPackages,
  readPackages,
  type ManagedPackage,
  type PackageSettings,
} from "@/components/managed-packages";

export const Route = createFileRoute("/admin-packages")({
  component: AdminPackagesPage,
});

const ADMIN_EMAIL = "brandline@gmail.com";
const ADMIN_STORAGE_KEY = "brandline_admin_email";

function AdminPackagesPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState<PackageSettings>(defaultPackages);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const email = window.localStorage.getItem(ADMIN_STORAGE_KEY)?.trim().toLowerCase();
    if (email !== ADMIN_EMAIL) {
      navigate({ to: "/admin-login", replace: true });
      return;
    }
    setSettings(readPackages());
    setReady(true);
  }, [navigate]);

  const rows = useMemo(() => [...settings.packages].sort((a, b) => a.order - b.order), [settings.packages]);

  function updatePackage(id: string, patch: Partial<ManagedPackage>) {
    setSettings((current) => ({
      ...current,
      packages: current.packages.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  }

  function addPackage() {
    const order = Math.max(0, ...settings.packages.map((item) => item.order)) + 1;
    setSettings((current) => ({
      ...current,
      packages: [
        ...current.packages,
        {
          id: `package-${Date.now()}`,
          name: "New Package",
          price: "Custom",
          billing: "per month",
          description: "Add package description.",
          features: ["Feature one"],
          featured: false,
          active: true,
          order,
        },
      ],
    }));
  }

  function save() {
    window.localStorage.setItem(PACKAGES_KEY, JSON.stringify(settings));
    window.dispatchEvent(new Event("brandline:packages-updated"));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  }

  if (!ready) return <main className="grid min-h-screen place-items-center bg-[#080808] text-white/50">Opening packages manager…</main>;

  return (
    <main className="min-h-screen bg-[#080808] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#EB175D]">Website Management</p>
            <h1 className="mt-2 text-3xl font-bold">Packages Management</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Manage the package cards used on the homepage and Packages page.</p>
          </div>
          <button onClick={save} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EB175D] px-5 py-3 text-sm font-bold text-white hover:bg-[#CC527A]"><Save size={17} /> {saved ? "Saved" : "Save changes"}</button>
        </div>

        <section className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 lg:grid-cols-2">
          <label className="lg:col-span-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            <span><strong>Show packages section</strong><span className="mt-1 block text-xs text-white/40">Hide or show packages on the public website.</span></span>
            <input type="checkbox" checked={settings.enabled} onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })} className="size-5 accent-[#EB175D]" />
          </label>
          <Field label="Eyebrow" value={settings.eyebrow} onChange={(value) => setSettings({ ...settings, eyebrow: value })} />
          <Field label="Title" value={settings.title} onChange={(value) => setSettings({ ...settings, title: value })} />
          <label className="lg:col-span-2"><span className="mb-2 block text-xs font-semibold text-white/45">Description</span><textarea rows={3} value={settings.description} onChange={(e) => setSettings({ ...settings, description: e.target.value })} className="admin-input resize-none" /></label>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <div className="flex items-center justify-between gap-4">
            <div><h2 className="text-xl font-bold">Package Cards</h2><p className="mt-1 text-sm text-white/40">Edit price, features, visibility and display order.</p></div>
            <button onClick={addPackage} className="inline-flex items-center gap-2 rounded-xl border border-[#EB175D]/30 bg-[#EB175D]/10 px-4 py-2.5 text-sm font-bold text-[#F8D8E3]"><Plus size={16} /> Add package</button>
          </div>

          <div className="mt-6 space-y-4">
            {rows.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  <Field label="Package Name" value={item.name} onChange={(value) => updatePackage(item.id, { name: value })} />
                  <Field label="Price" value={item.price} onChange={(value) => updatePackage(item.id, { price: value })} />
                  <Field label="Billing text" value={item.billing} onChange={(value) => updatePackage(item.id, { billing: value })} />
                  <Field label="Display Order" value={String(item.order)} onChange={(value) => updatePackage(item.id, { order: Number(value) || 0 })} type="number" />
                </div>
                <label className="mt-3 block"><span className="mb-2 block text-xs font-semibold text-white/45">Description</span><textarea rows={2} value={item.description} onChange={(e) => updatePackage(item.id, { description: e.target.value })} className="admin-input resize-none" /></label>
                <label className="mt-3 block"><span className="mb-2 block text-xs font-semibold text-white/45">Features — one per line</span><textarea rows={4} value={item.features.join("\n")} onChange={(e) => updatePackage(item.id, { features: e.target.value.split("\n").map((v) => v.trim()).filter(Boolean) })} className="admin-input resize-none" /></label>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-white/65"><input type="checkbox" checked={item.active} onChange={(e) => updatePackage(item.id, { active: e.target.checked })} className="accent-[#EB175D]" /> Active</label>
                  <label className="flex items-center gap-2 text-sm text-white/65"><input type="checkbox" checked={item.featured} onChange={(e) => updatePackage(item.id, { featured: e.target.checked })} className="accent-[#EB175D]" /> Featured / Popular</label>
                  <button onClick={() => setSettings((current) => ({ ...current, packages: current.packages.filter((row) => row.id !== item.id) }))} className="ml-auto inline-flex items-center gap-2 rounded-xl border border-red-400/15 px-3 py-2 text-xs text-red-300/75 hover:bg-red-400/10"><Trash2 size={14} /> Remove</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <style>{`.admin-input{width:100%;border-radius:.75rem;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);padding:.7rem .85rem;font-size:.875rem;color:white;outline:none}.admin-input:focus{border-color:rgba(235,23,93,.65)}`}</style>
    </main>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return <label><span className="mb-2 block text-xs font-semibold text-white/45">{label}</span><input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="admin-input" /></label>;
}
