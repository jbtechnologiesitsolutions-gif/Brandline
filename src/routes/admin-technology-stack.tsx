import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  TECHNOLOGY_STACK_KEY,
  defaultTechnologyStack,
  type TechnologyItem,
  type TechnologyStackSettings,
} from "@/components/technology-stack";

export const Route = createFileRoute("/admin-technology-stack")({
  component: AdminTechnologyStackPage,
});

const ADMIN_EMAIL = "brandline@gmail.com";
const ADMIN_STORAGE_KEY = "brandline_admin_email";

function AdminTechnologyStackPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState<TechnologyStackSettings>(defaultTechnologyStack);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedEmail = window.localStorage.getItem(ADMIN_STORAGE_KEY)?.trim().toLowerCase();
    if (savedEmail !== ADMIN_EMAIL) {
      navigate({ to: "/admin-login", replace: true });
      return;
    }

    try {
      const stored = window.localStorage.getItem(TECHNOLOGY_STACK_KEY);
      if (stored) {
        setSettings({ ...defaultTechnologyStack, ...(JSON.parse(stored) as TechnologyStackSettings) });
      }
    } catch {
      setSettings(defaultTechnologyStack);
    }
    setReady(true);
  }, [navigate]);

  const sortedItems = useMemo(
    () => [...settings.items].sort((a, b) => a.order - b.order),
    [settings.items],
  );

  function save() {
    window.localStorage.setItem(TECHNOLOGY_STACK_KEY, JSON.stringify(settings));
    window.dispatchEvent(new Event("brandline:technology-stack-updated"));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  function updateItem(id: string, patch: Partial<TechnologyItem>) {
    setSettings((current) => ({
      ...current,
      items: current.items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  }

  function addItem() {
    const id = `tech-${Date.now()}`;
    const category = settings.categories[0] ?? "General";
    setSettings((current) => ({
      ...current,
      items: [
        ...current.items,
        {
          id,
          name: "New Technology",
          short: "NT",
          category,
          color: "#EB175D",
          active: true,
          order: current.items.length + 1,
        },
      ],
    }));
  }

  function removeItem(id: string) {
    setSettings((current) => ({
      ...current,
      items: current.items.filter((item) => item.id !== id),
    }));
  }

  function addCategory() {
    const name = window.prompt("New category name");
    if (!name?.trim()) return;
    const clean = name.trim();
    if (settings.categories.includes(clean)) return;
    setSettings((current) => ({ ...current, categories: [...current.categories, clean] }));
  }

  function removeCategory(category: string) {
    if (settings.categories.length <= 1) return;
    const fallback = settings.categories.find((value) => value !== category) ?? "General";
    setSettings((current) => ({
      ...current,
      categories: current.categories.filter((value) => value !== category),
      items: current.items.map((item) =>
        item.category === category ? { ...item, category: fallback } : item,
      ),
    }));
  }

  if (!ready) {
    return <main className="grid min-h-screen place-items-center bg-[#080808] text-white/50">Opening manager…</main>;
  }

  return (
    <main className="min-h-screen bg-[#080808] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="/admin" className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white">
              <ArrowLeft size={16} /> Back to admin
            </a>
            <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-[#EB175D]">Website Content</p>
            <h1 className="mt-2 text-3xl font-bold">Technology Stack Management</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
              Control the Technology Stack section displayed above the global footer.
            </p>
          </div>
          <button onClick={save} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EB175D] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#CC527A]">
            <Save size={17} /> {saved ? "Saved" : "Save changes"}
          </button>
        </div>

        <section className="mt-8 grid gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 lg:grid-cols-2">
          <label className="lg:col-span-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            <div>
              <p className="font-semibold">Show Technology Stack section</p>
              <p className="mt-1 text-xs text-white/40">Disable this to hide the entire section from public pages.</p>
            </div>
            <input type="checkbox" checked={settings.enabled} onChange={(event) => setSettings({ ...settings, enabled: event.target.checked })} className="size-5 accent-[#EB175D]" />
          </label>

          <Field label="Eyebrow" value={settings.eyebrow} onChange={(value) => setSettings({ ...settings, eyebrow: value })} />
          <Field label="Title" value={settings.title} onChange={(value) => setSettings({ ...settings, title: value })} />
          <label className="lg:col-span-2">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-white/45">Description</span>
            <textarea value={settings.description} onChange={(event) => setSettings({ ...settings, description: event.target.value })} rows={3} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-[#EB175D]/60" />
          </label>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">Categories</h2>
              <p className="mt-1 text-sm text-white/40">These appear as the selector on the left side of the public section.</p>
            </div>
            <button onClick={addCategory} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/5"><Plus size={16} /> Add category</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {settings.categories.map((category) => (
              <div key={category} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                <span>{category}</span>
                <button onClick={() => removeCategory(category)} aria-label={`Remove ${category}`} className="text-white/35 hover:text-red-300"><Trash2 size={14} /></button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">Technologies</h2>
              <p className="mt-1 text-sm text-white/40">Manage the cards shown for each category.</p>
            </div>
            <button onClick={addItem} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"><Plus size={16} /> Add technology</button>
          </div>

          <div className="mt-6 space-y-4">
            {sortedItems.map((item) => (
              <div key={item.id} className="grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 md:grid-cols-[1.2fr_.7fr_1fr_.7fr_.5fr_auto] md:items-end">
                <Field label="Name" value={item.name} onChange={(value) => updateItem(item.id, { name: value })} />
                <Field label="Short label" value={item.short} onChange={(value) => updateItem(item.id, { short: value.slice(0, 4) })} />
                <label>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-white/45">Category</span>
                  <select value={item.category} onChange={(event) => updateItem(item.id, { category: event.target.value })} className="w-full rounded-xl border border-white/10 bg-[#111] px-3 py-2.5 text-sm outline-none focus:border-[#EB175D]/60">
                    {settings.categories.map((category) => <option key={category}>{category}</option>)}
                  </select>
                </label>
                <label>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-white/45">Accent</span>
                  <input type="color" value={item.color} onChange={(event) => updateItem(item.id, { color: event.target.value })} className="h-[42px] w-full rounded-xl border border-white/10 bg-[#111] p-1" />
                </label>
                <Field label="Order" value={String(item.order)} onChange={(value) => updateItem(item.id, { order: Number(value) || 0 })} type="number" />
                <div className="flex items-center gap-2 pb-0.5">
                  <label className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs">
                    <input type="checkbox" checked={item.active} onChange={(event) => updateItem(item.id, { active: event.target.checked })} className="accent-[#EB175D]" /> Active
                  </label>
                  <button onClick={() => removeItem(item.id)} className="grid size-10 place-items-center rounded-xl border border-red-400/15 text-red-300/75 hover:bg-red-400/10" aria-label={`Delete ${item.name}`}><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return (
    <label>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-white/45">{label}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm outline-none transition focus:border-[#EB175D]/60" />
    </label>
  );
}
