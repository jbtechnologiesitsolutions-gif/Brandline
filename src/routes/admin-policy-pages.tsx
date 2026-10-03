import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FileText, Save, ShieldCheck, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { addActivityLog, defaultPolicies, POLICY_SETTINGS_KEY, readJson, type PolicyPage, writeJson } from "@/lib/admin-control";

export const Route = createFileRoute("/admin-policy-pages")({ component: AdminPolicyPages });

const ADMIN_EMAIL = "brandline@gmail.com";
const STORAGE_KEY = "brandline_admin_email";

function AdminPolicyPages() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [pages, setPages] = useState<PolicyPage[]>(defaultPolicies);
  const [selectedId, setSelectedId] = useState(defaultPolicies[0].id);
  const selected = pages.find((page) => page.id === selectedId) ?? pages[0];

  useEffect(() => {
    const email = localStorage.getItem(STORAGE_KEY)?.toLowerCase();
    if (email !== ADMIN_EMAIL) { navigate({ to: "/admin-login", replace: true }); return; }
    setPages(readJson(POLICY_SETTINGS_KEY, defaultPolicies));
    setReady(true);
  }, [navigate]);

  function save() {
    writeJson(POLICY_SETTINGS_KEY, pages);
    addActivityLog({ type: "content", action: "Policy pages updated", actor: ADMIN_EMAIL, status: "success", details: `Saved ${pages.length} policy pages.` });
    alert("Policy pages saved.");
  }

  function patchSelected(patch: Partial<PolicyPage>) {
    setPages((rows) => rows.map((row) => row.id === selected?.id ? { ...row, ...patch, updatedAt: new Date().toLocaleString() } : row));
  }

  function addPage() {
    const id = `policy-${Date.now()}`;
    const page: PolicyPage = { id, title: "New Policy Page", slug: `/policy-${Date.now()}`, content: "Add policy content here.", published: false, updatedAt: "Now" };
    setPages((rows) => [...rows, page]);
    setSelectedId(id);
  }

  if (!ready) return <main className="grid min-h-screen place-items-center bg-[#080808] text-white">Opening policy manager…</main>;

  return (
    <main className="min-h-screen bg-[#080808] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div><p className="text-xs uppercase tracking-[.2em] text-[#EB175D]">Admin Management</p><h1 className="mt-2 text-3xl font-bold">Policy Pages</h1><p className="mt-2 text-sm text-white/45">Manage legal and policy content shown on the website.</p></div>
          <div className="flex gap-2"><Link to="/admin" className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70">Back to Admin</Link><button onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-[#EB175D] px-4 py-3 text-sm font-bold"><Save size={16}/> Save changes</button></div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-2xl border border-white/10 bg-white/[.03] p-3">
            <button onClick={addPage} className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#EB175D]/30 bg-[#EB175D]/10 px-3 py-2.5 text-sm text-[#FF8BB1]"><Plus size={15}/> Add policy page</button>
            <div className="space-y-2">{pages.map((page) => <button key={page.id} onClick={() => setSelectedId(page.id)} className={`w-full rounded-xl px-3 py-3 text-left ${selectedId===page.id?"bg-[#EB175D]/15 text-white":"text-white/55 hover:bg-white/5"}`}><div className="flex items-center gap-2"><FileText size={15}/><span className="text-sm font-semibold">{page.title}</span></div><div className="mt-1 pl-6 text-xs text-white/30">{page.slug}</div></button>)}</div>
          </aside>
          {selected && <section className="rounded-2xl border border-white/10 bg-white/[.03] p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-white/60">Page title<input value={selected.title} onChange={(e)=>patchSelected({title:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none"/></label><label className="text-sm text-white/60">Slug<input value={selected.slug} onChange={(e)=>patchSelected({slug:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none"/></label></div>
            <label className="mt-5 block text-sm text-white/60">Policy content<textarea value={selected.content} onChange={(e)=>patchSelected({content:e.target.value})} rows={18} className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm leading-6 text-white outline-none"/></label>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><label className="flex items-center gap-3 text-sm text-white/65"><input type="checkbox" checked={selected.published} onChange={(e)=>patchSelected({published:e.target.checked})}/> Published</label><button onClick={()=>{if(pages.length<=1)return;setPages(rows=>rows.filter(r=>r.id!==selected.id));setSelectedId(pages.find(r=>r.id!==selected.id)?.id??"")}} className="inline-flex items-center gap-2 rounded-xl border border-red-400/20 px-3 py-2 text-sm text-red-300"><Trash2 size={15}/> Delete page</button></div>
          </section>}
        </div>
        <div className="mt-6 rounded-2xl border border-[#EB175D]/20 bg-[#EB175D]/5 p-4 text-sm text-white/55"><ShieldCheck className="mr-2 inline size-4 text-[#EB175D]"/> These settings currently use browser storage. They are structured to move into MySQL when the database connection is enabled.</div>
      </div>
    </main>
  );
}
