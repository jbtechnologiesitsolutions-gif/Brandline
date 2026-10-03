import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Palette, Save, RotateCcw, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { addActivityLog, BRAND_SETTINGS_KEY, defaultBrandSettings, readJson, type BrandSettings, writeJson } from "@/lib/admin-control";

export const Route = createFileRoute("/admin-branding-theme")({ component: AdminBrandingTheme });
const ADMIN_EMAIL = "brandline@gmail.com";
const STORAGE_KEY = "brandline_admin_email";

function AdminBrandingTheme() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState<BrandSettings>(defaultBrandSettings);

  useEffect(() => {
    const email = localStorage.getItem(STORAGE_KEY)?.toLowerCase();
    if (email !== ADMIN_EMAIL) { navigate({ to: "/admin-login", replace: true }); return; }
    setSettings(readJson(BRAND_SETTINGS_KEY, defaultBrandSettings));
    setReady(true);
  }, [navigate]);

  function save() {
    writeJson(BRAND_SETTINGS_KEY, settings);
    window.dispatchEvent(new Event("brandline:brand-settings-updated"));
    addActivityLog({ type: "settings", action: "Branding/theme updated", actor: ADMIN_EMAIL, status: "success", details: "Frontend brand settings and colors were saved." });
    alert("Branding and theme settings saved.");
  }

  if (!ready) return <main className="grid min-h-screen place-items-center bg-[#080808] text-white">Opening branding manager…</main>;

  const fields: [keyof BrandSettings, string][] = [
    ["primary", "Primary"], ["secondary", "Secondary"], ["accent", "Accent"], ["background", "Background"], ["foreground", "Text"], ["surface", "Surface"],
  ];

  return <main className="min-h-screen bg-[#080808] px-5 py-8 text-white sm:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-[.2em] text-[#EB175D]">Admin Management</p><h1 className="mt-2 text-3xl font-bold">Branding & Frontend Theme</h1><p className="mt-2 text-sm text-white/45">Manage logo assets and the site-wide theme palette.</p></div><div className="flex gap-2"><Link to="/admin" className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70">Back to Admin</Link><button onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-[#EB175D] px-4 py-3 text-sm font-bold"><Save size={16}/> Apply theme</button></div></div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-white/[.03] p-6"><h2 className="flex items-center gap-2 font-bold"><ImageIcon size={18}/> Brand identity</h2><div className="mt-5 space-y-4"><label className="block text-sm text-white/60">Logo text<input value={settings.logoText} onChange={e=>setSettings({...settings,logoText:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white"/></label><label className="block text-sm text-white/60">Logo image URL<input value={settings.logoImage} onChange={e=>setSettings({...settings,logoImage:e.target.value})} placeholder="https://.../logo.png" className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white"/></label><label className="block text-sm text-white/60">Favicon URL<input value={settings.faviconUrl} onChange={e=>setSettings({...settings,faviconUrl:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white"/></label></div></section>
        <section className="rounded-2xl border border-white/10 bg-white/[.03] p-6"><h2 className="flex items-center gap-2 font-bold"><Palette size={18}/> Theme colors</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{fields.map(([key,label])=><label key={key} className="text-sm text-white/60">{label}<div className="mt-2 flex gap-2"><input type="color" value={String(settings[key])} onChange={e=>setSettings({...settings,[key]:e.target.value})} className="h-11 w-14 rounded-lg border border-white/10 bg-transparent"/><input value={String(settings[key])} onChange={e=>setSettings({...settings,[key]:e.target.value})} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/25 px-3 text-white"/></div></label>)}</div></section>
      </div>
      <section className="mt-6 rounded-2xl border border-white/10 bg-white/[.03] p-6"><div className="flex items-center justify-between"><h2 className="font-bold">Live preview</h2><button onClick={()=>setSettings(defaultBrandSettings)} className="inline-flex items-center gap-2 text-sm text-white/50"><RotateCcw size={14}/> Restore defaults</button></div><div className="mt-5 rounded-2xl p-6" style={{background:settings.background,color:settings.foreground}}><div className="flex items-center justify-between"><strong>{settings.logoText || "BrandlineTech"}</strong><button className="rounded-xl px-4 py-2 text-sm font-bold text-white" style={{background:settings.primary}}>Primary CTA</button></div><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-xl p-4" style={{background:settings.surface}}>Surface card</div><div className="rounded-xl p-4 text-white" style={{background:settings.secondary}}>Secondary</div><div className="rounded-xl p-4" style={{background:settings.accent}}>Accent</div></div></div></section>
    </div>
  </main>;
}
