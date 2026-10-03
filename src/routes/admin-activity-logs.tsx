import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Download, Filter, RefreshCw, ShieldCheck, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ACTIVITY_LOG_KEY, readJson, type ActivityLog, writeJson } from "@/lib/admin-control";

export const Route = createFileRoute("/admin-activity-logs")({ component: AdminActivityLogs });
const ADMIN_EMAIL = "brandline@gmail.com";
const STORAGE_KEY = "brandline_admin_email";

function AdminActivityLogs() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [rows, setRows] = useState<ActivityLog[]>([]);
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");

  const load = () => setRows(readJson<ActivityLog[]>(ACTIVITY_LOG_KEY, []));

  useEffect(() => {
    const email = localStorage.getItem(STORAGE_KEY)?.toLowerCase();
    if (email !== ADMIN_EMAIL) { navigate({ to: "/admin-login", replace: true }); return; }
    load(); setReady(true);
    const sync = () => load();
    window.addEventListener("brandline:activity-log-updated", sync);
    return () => window.removeEventListener("brandline:activity-log-updated", sync);
  }, [navigate]);

  const filtered = useMemo(() => rows.filter((row) => {
    const q = search.trim().toLowerCase();
    return (type === "All" || row.type === type) && (!q || [row.action,row.actor,row.details,row.status,row.type].join(" ").toLowerCase().includes(q));
  }), [rows, type, search]);

  function exportCsv() {
    const data = ["date,type,action,actor,status,details", ...rows.map(r => [r.createdAt,r.type,r.action,r.actor,r.status,`"${r.details.replaceAll('"','""')}"`].join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([data], { type: "text/csv" }));
    const a = document.createElement("a"); a.href=url; a.download="brandline-activity-logs.csv"; a.click(); URL.revokeObjectURL(url);
  }

  if (!ready) return <main className="grid min-h-screen place-items-center bg-[#080808] text-white">Opening activity logs…</main>;

  return <main className="min-h-screen bg-[#080808] px-5 py-8 text-white sm:px-8"><div className="mx-auto max-w-7xl">
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-[.2em] text-[#EB175D]">Security & Monitoring</p><h1 className="mt-2 text-3xl font-bold">Activity & Login Logs</h1><p className="mt-2 text-sm text-white/45">Monitor admin sign-ins, failed attempts, content/settings changes and future backend events.</p></div><Link to="/admin" className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70">Back to Admin</Link></div>
    <div className="mb-5 grid gap-4 sm:grid-cols-4"><Metric label="Total events" value={rows.length}/><Metric label="Login events" value={rows.filter(r=>r.type==="login").length}/><Metric label="Failed" value={rows.filter(r=>r.status==="failed").length}/><Metric label="Settings/content" value={rows.filter(r=>r.type==="settings"||r.type==="content").length}/></div>
    <section className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="mb-5 flex flex-wrap gap-3"><div className="relative min-w-[240px] flex-1"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search activity…" className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white"/></div><select value={type} onChange={e=>setType(e.target.value)} className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm"><option>All</option><option>login</option><option>security</option><option>lead</option><option>content</option><option>settings</option><option>system</option></select><button onClick={load} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm"><RefreshCw size={15}/> Refresh</button><button onClick={exportCsv} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm"><Download size={15}/> Export</button></div>
      <div className="overflow-x-auto"><table className="min-w-[1000px] w-full text-left text-sm"><thead><tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/35"><th className="py-3 pr-4">Date</th><th className="py-3 pr-4">Type</th><th className="py-3 pr-4">Action</th><th className="py-3 pr-4">Actor</th><th className="py-3 pr-4">Status</th><th className="py-3">Details</th></tr></thead><tbody>{filtered.map(row=><tr key={row.id} className="border-b border-white/5"><td className="py-4 pr-4 text-white/45">{new Date(row.createdAt).toLocaleString()}</td><td className="py-4 pr-4"><span className="rounded-full bg-white/5 px-2.5 py-1 text-xs">{row.type}</span></td><td className="py-4 pr-4 font-medium">{row.action}</td><td className="py-4 pr-4 text-white/60">{row.actor}</td><td className="py-4 pr-4"><span className={row.status==="failed"?"text-red-300":row.status==="success"?"text-emerald-300":"text-white/55"}>{row.status}</span></td><td className="py-4 text-white/50">{row.details}</td></tr>)}</tbody></table>{filtered.length===0&&<div className="py-12 text-center text-sm text-white/35">No activity records yet.</div>}</div>
      <div className="mt-5 flex justify-end"><button onClick={()=>{if(confirm("Clear all local activity logs?")){writeJson(ACTIVITY_LOG_KEY,[]);setRows([])}}} className="inline-flex items-center gap-2 rounded-xl border border-red-400/20 px-3 py-2 text-sm text-red-300"><Trash2 size={15}/> Clear logs</button></div>
    </section>
    <div className="mt-6 rounded-2xl border border-[#EB175D]/20 bg-[#EB175D]/5 p-4 text-sm text-white/55"><ShieldCheck className="mr-2 inline size-4 text-[#EB175D]"/> Browser logs are active now. When MySQL is connected, move these events into a server-side audit_logs table so login IP, session, user ID and lead actions are recorded centrally.</div>
  </div></main>;
}

function Metric({label,value}:{label:string;value:number}){return <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="text-xs text-white/35">{label}</div><div className="mt-2 text-2xl font-bold">{value}</div></div>}
