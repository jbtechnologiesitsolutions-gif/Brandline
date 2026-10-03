import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  BarChart3,
  Bell,
  Check,
  ChevronLeft,
  CirclePlus,
  Eye,
  EyeOff,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Save,
  Settings,
  Shield,
  Trash2,
  Users,
  Youtube,
} from "lucide-react";

const ADMIN_EMAIL = "brandline@gmail.com";
const ADMIN_KEY = "brandline_admin_email";

function useAdminGuard() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const email = window.localStorage.getItem(ADMIN_KEY)?.trim().toLowerCase();
    if (email !== ADMIN_EMAIL) {
      navigate({ to: "/admin-login", replace: true });
      return;
    }
    setReady(true);
  }, [navigate]);
  return ready;
}

function readStored<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? ({ ...fallback, ...JSON.parse(raw) } as T) : fallback;
  } catch {
    return fallback;
  }
}

function PageShell({ title, eyebrow, description, children }: { title: string; eyebrow: string; description: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <a href="/admin" className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"><ChevronLeft size={16} /> Back to Admin</a>
        <div className="mt-6 border-b border-white/10 pb-7">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#EB175D]">{eyebrow}</p>
          <h1 className="mt-2 text-3xl font-bold">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">{description}</p>
        </div>
        <div className="mt-7">{children}</div>
      </div>
      <style>{`.admin-field{width:100%;border-radius:.8rem;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);padding:.75rem .9rem;font-size:.875rem;color:#fff;outline:none}.admin-field:focus{border-color:rgba(235,23,93,.65)}.admin-field::placeholder{color:rgba(255,255,255,.22)}.admin-card{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);border-radius:1.25rem;padding:1.25rem}`}</style>
    </main>
  );
}

function SaveBar({ onSave, message }: { onSave: () => void; message?: string }) {
  return <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-emerald-300/80">{message}</p><button onClick={onSave} className="inline-flex items-center gap-2 rounded-xl bg-[#EB175D] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#CC527A]"><Save size={16} /> Save Changes</button></div>;
}

export function CustomerManagementPage() {
  const ready = useAdminGuard();
  type Customer = { id: number; name: string; email: string; phone: string; status: "Active" | "Pending" | "Blocked"; access: boolean; lastLogin: string; activity: string };
  const defaults: Customer[] = [
    { id: 1, name: "Sample Customer", email: "customer@example.com", phone: "+91 98765 43210", status: "Active", access: true, lastLogin: "Not connected", activity: "Registered account" },
  ];
  const [rows, setRows] = useState<Customer[]>(defaults);
  useEffect(() => { if (ready) { try { const x = localStorage.getItem("brandline_customers"); if (x) setRows(JSON.parse(x)); } catch {} } }, [ready]);
  if (!ready) return null;
  const save = () => localStorage.setItem("brandline_customers", JSON.stringify(rows));
  return <PageShell eyebrow="Customers" title="Customer Management" description="Manage registered customers, contact details, account status, portal access, last login and account activity."><SaveBar onSave={save} /><div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Total Customers" value={rows.length} /><Metric label="Active Access" value={rows.filter(x=>x.access).length} /><Metric label="Blocked" value={rows.filter(x=>x.status==="Blocked").length} /></div><div className="admin-card overflow-x-auto"><table className="min-w-[1000px] w-full text-left text-sm"><thead className="text-xs uppercase tracking-wider text-white/35"><tr><Th>Customer</Th><Th>Contact</Th><Th>Status</Th><Th>Portal Access</Th><Th>Last Login</Th><Th>Activity</Th><Th>Action</Th></tr></thead><tbody>{rows.map(row=><tr key={row.id} className="border-t border-white/6"><Td><input value={row.name} onChange={e=>setRows(r=>r.map(x=>x.id===row.id?{...x,name:e.target.value}:x))} className="admin-field max-w-[210px]" /></Td><Td><div>{row.email}</div><div className="mt-1 text-xs text-white/40">{row.phone}</div></Td><Td><select value={row.status} onChange={e=>setRows(r=>r.map(x=>x.id===row.id?{...x,status:e.target.value as Customer["status"]}:x))} className="admin-field"><option>Active</option><option>Pending</option><option>Blocked</option></select></Td><Td><button onClick={()=>setRows(r=>r.map(x=>x.id===row.id?{...x,access:!x.access}:x))} className={`rounded-full px-3 py-1.5 text-xs font-bold ${row.access?"bg-emerald-400/10 text-emerald-300":"bg-red-400/10 text-red-300"}`}>{row.access?"Enabled":"Disabled"}</button></Td><Td>{row.lastLogin}</Td><Td>{row.activity}</Td><Td><button onClick={()=>setRows(r=>r.filter(x=>x.id!==row.id))} className="rounded-lg p-2 text-red-300/70 hover:bg-red-400/10"><Trash2 size={15}/></button></Td></tr>)}</tbody></table></div><button onClick={()=>setRows(r=>[...r,{id:Date.now(),name:"New Customer",email:"new@example.com",phone:"+91",status:"Pending",access:false,lastLogin:"Never",activity:"Added by admin"}])} className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/5"><CirclePlus size={16}/> Add Customer</button></PageShell>;
}

export function RolesPermissionsPage() {
  const ready = useAdminGuard();
  const permissions = ["Leads","Customers","Packages","Policies","Branding & Theme","Activity Logs","FAQ","Analytics"];
  type Role = { id: number; name: string; enabled: boolean; permissions: string[] };
  const [roles,setRoles] = useState<Role[]>([{id:1,name:"Administrator",enabled:true,permissions:[...permissions]},{id:2,name:"Staff",enabled:true,permissions:["Leads","Customers","FAQ"]}]);
  useEffect(()=>{if(ready){try{const x=localStorage.getItem("brandline_roles");if(x)setRoles(JSON.parse(x));}catch{}}},[ready]);
  if(!ready)return null;
  const toggle=(id:number,p:string)=>setRoles(r=>r.map(x=>x.id===id?{...x,permissions:x.permissions.includes(p)?x.permissions.filter(v=>v!==p):[...x.permissions,p]}:x));
  return <PageShell eyebrow="Customers" title="User Roles & Permissions" description="Define Admin and Staff access to sensitive admin modules. Database-backed enforcement can replace these local settings when MySQL authentication is connected."><SaveBar onSave={()=>localStorage.setItem("brandline_roles",JSON.stringify(roles))}/><div className="space-y-5">{roles.map(role=><div key={role.id} className="admin-card"><div className="flex flex-wrap items-center justify-between gap-4"><input value={role.name} onChange={e=>setRoles(r=>r.map(x=>x.id===role.id?{...x,name:e.target.value}:x))} className="admin-field max-w-xs text-lg font-bold"/><label className="flex items-center gap-2 text-sm text-white/60"><input type="checkbox" checked={role.enabled} onChange={e=>setRoles(r=>r.map(x=>x.id===role.id?{...x,enabled:e.target.checked}:x))} className="accent-[#EB175D]"/> Role Active</label></div><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{permissions.map(p=><label key={p} className="flex items-center gap-3 rounded-xl border border-white/8 bg-black/20 px-3 py-3 text-sm"><input type="checkbox" checked={role.permissions.includes(p)} onChange={()=>toggle(role.id,p)} className="accent-[#EB175D]"/>{p}</label>)}</div></div>)}</div></PageShell>;
}

export function EnquirySettingsPage() {
  const ready=useAdminGuard();
  const defaults={recipientEmail:"support@brandlinetech.com",autoReply:true,autoReplyText:"Thank you for contacting BrandlineTech. Our team will get back to you shortly.",spamProtection:true,requirePhone:true,requireService:true,requireMessage:true};
  const [s,setS]=useState(defaults); useEffect(()=>{if(ready)setS(readStored("brandline_enquiry_settings",defaults))},[ready]); if(!ready)return null;
  return <PageShell eyebrow="Business" title="Contact Form / Enquiry Settings" description="Control enquiry recipients, required fields, auto-reply content and basic spam protection."><SaveBar onSave={()=>localStorage.setItem("brandline_enquiry_settings",JSON.stringify(s))}/><div className="grid gap-5 lg:grid-cols-2"><div className="admin-card space-y-4"><Field label="Recipient Email"><input className="admin-field" value={s.recipientEmail} onChange={e=>setS({...s,recipientEmail:e.target.value})}/></Field><Toggle label="Send Auto Reply" checked={s.autoReply} onChange={v=>setS({...s,autoReply:v})}/><Field label="Auto Reply Message"><textarea className="admin-field min-h-32 resize-y" value={s.autoReplyText} onChange={e=>setS({...s,autoReplyText:e.target.value})}/></Field></div><div className="admin-card space-y-4"><Toggle label="Spam Protection" checked={s.spamProtection} onChange={v=>setS({...s,spamProtection:v})}/><Toggle label="Phone Required" checked={s.requirePhone} onChange={v=>setS({...s,requirePhone:v})}/><Toggle label="Service Required" checked={s.requireService} onChange={v=>setS({...s,requireService:v})}/><Toggle label="Message Required" checked={s.requireMessage} onChange={v=>setS({...s,requireMessage:v})}/></div></div></PageShell>;
}

export function NotificationsPage() {
  const ready=useAdminGuard(); const defaults={adminAlerts:true,leadAlerts:true,registrationAlerts:true,emailNotifications:true,browserNotifications:false,digest:"Immediate"}; const [s,setS]=useState(defaults); useEffect(()=>{if(ready)setS(readStored("brandline_notification_settings",defaults))},[ready]); if(!ready)return null;
  return <PageShell eyebrow="Marketing" title="Notifications Management" description="Control admin alerts, lead notifications, customer-registration alerts and email notification behavior."><SaveBar onSave={()=>localStorage.setItem("brandline_notification_settings",JSON.stringify(s))}/><div className="admin-card grid gap-4 md:grid-cols-2"><Toggle label="Admin Alerts" checked={s.adminAlerts} onChange={v=>setS({...s,adminAlerts:v})}/><Toggle label="New Lead Notifications" checked={s.leadAlerts} onChange={v=>setS({...s,leadAlerts:v})}/><Toggle label="Customer Registration Alerts" checked={s.registrationAlerts} onChange={v=>setS({...s,registrationAlerts:v})}/><Toggle label="Email Notifications" checked={s.emailNotifications} onChange={v=>setS({...s,emailNotifications:v})}/><Toggle label="Browser Notifications" checked={s.browserNotifications} onChange={v=>setS({...s,browserNotifications:v})}/><Field label="Delivery Frequency"><select className="admin-field" value={s.digest} onChange={e=>setS({...s,digest:e.target.value})}><option>Immediate</option><option>Hourly Digest</option><option>Daily Digest</option></select></Field></div></PageShell>;
}

export function SocialMediaPage() {
  const ready=useAdminGuard(); const defaults={instagram:"",facebook:"",linkedin:"",youtube:"",whatsapp:"+919789104651",showFooter:true}; const [s,setS]=useState(defaults); useEffect(()=>{if(ready)setS(readStored("brandline_social_settings",defaults))},[ready]); if(!ready)return null;
  const rows=[{k:"instagram",label:"Instagram",icon:Instagram},{k:"facebook",label:"Facebook",icon:Facebook},{k:"linkedin",label:"LinkedIn",icon:Linkedin},{k:"youtube",label:"YouTube",icon:Youtube},{k:"whatsapp",label:"WhatsApp",icon:MessageSquare}] as const;
  return <PageShell eyebrow="Marketing" title="Social Media Management" description="Manage official Instagram, Facebook, LinkedIn, YouTube and WhatsApp links from one place."><SaveBar onSave={()=>localStorage.setItem("brandline_social_settings",JSON.stringify(s))}/><div className="admin-card space-y-4">{rows.map(({k,label,icon:Icon})=><label key={k} className="grid gap-3 sm:grid-cols-[180px_1fr] sm:items-center"><span className="flex items-center gap-2 text-sm font-semibold text-white/65"><Icon size={17} className="text-[#EB175D]"/>{label}</span><input className="admin-field" placeholder={k==="whatsapp"?"+91...":"https://..."} value={s[k]} onChange={e=>setS({...s,[k]:e.target.value})}/></label>)}<Toggle label="Show social links in footer" checked={s.showFooter} onChange={v=>setS({...s,showFooter:v})}/></div></PageShell>;
}

export function FaqManagementPage() {
  const ready=useAdminGuard(); type Faq={id:number;question:string;answer:string;category:string;active:boolean;order:number}; const defaults:Faq[]=[{id:1,question:"How does BrandlineTech support marketplace sellers?",answer:"We provide structured marketplace operations, catalog, advertising and growth support.",category:"General",active:true,order:1}]; const [rows,setRows]=useState<Faq[]>(defaults); useEffect(()=>{if(ready){try{const x=localStorage.getItem("brandline_faqs");if(x)setRows(JSON.parse(x));}catch{}}},[ready]); if(!ready)return null;
  return <PageShell eyebrow="Business" title="FAQ Management" description="Add, edit, sort, categorize and activate/deactivate frequently asked questions."><SaveBar onSave={()=>localStorage.setItem("brandline_faqs",JSON.stringify(rows))}/><div className="space-y-4">{[...rows].sort((a,b)=>a.order-b.order).map(row=><div key={row.id} className="admin-card grid gap-4 lg:grid-cols-[1fr_1fr_180px_100px_100px]"><Field label="Question"><input className="admin-field" value={row.question} onChange={e=>setRows(r=>r.map(x=>x.id===row.id?{...x,question:e.target.value}:x))}/></Field><Field label="Answer"><textarea className="admin-field min-h-24" value={row.answer} onChange={e=>setRows(r=>r.map(x=>x.id===row.id?{...x,answer:e.target.value}:x))}/></Field><Field label="Category"><input className="admin-field" value={row.category} onChange={e=>setRows(r=>r.map(x=>x.id===row.id?{...x,category:e.target.value}:x))}/></Field><Field label="Order"><input type="number" className="admin-field" value={row.order} onChange={e=>setRows(r=>r.map(x=>x.id===row.id?{...x,order:Number(e.target.value)||1}:x))}/></Field><div className="flex items-end gap-2 pb-1"><button onClick={()=>setRows(r=>r.map(x=>x.id===row.id?{...x,active:!x.active}:x))} className="rounded-xl border border-white/10 p-2.5">{row.active?<Eye size={16}/>:<EyeOff size={16}/>}</button><button onClick={()=>setRows(r=>r.filter(x=>x.id!==row.id))} className="rounded-xl border border-red-400/15 p-2.5 text-red-300"><Trash2 size={16}/></button></div></div>)}</div><button onClick={()=>setRows(r=>[...r,{id:Date.now(),question:"New FAQ",answer:"Add answer",category:"General",active:true,order:r.length+1}])} className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/5"><CirclePlus size={16}/> Add FAQ</button></PageShell>;
}

export function AnalyticsDashboardPage() {
  const ready=useAdminGuard(); if(!ready)return null;
  const leads = (()=>{try{return JSON.parse(localStorage.getItem("brandline_admin_leads")||"[]")}catch{return[]}})();
  const packages = (()=>{try{return JSON.parse(localStorage.getItem("brandline_packages")||"{}").packages||[]}catch{return[]}})();
  const sourceCounts = useMemo(()=>{const m:Record<string,number>={}; for(const x of leads)m[x.source||"Unknown"]=(m[x.source||"Unknown"]||0)+1; return Object.entries(m)},[leads]);
  return <PageShell eyebrow="Marketing" title="Analytics Dashboard" description="Monitor enquiries by source, package availability and conversion-ready metrics. Website-visit and conversion analytics will become live when Analytics/database integrations are connected."><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric label="Stored Leads" value={leads.length}/><Metric label="Lead Sources" value={sourceCounts.length}/><Metric label="Configured Packages" value={packages.length}/><Metric label="Website Conversion" value="Pending integration"/></div><div className="mt-6 grid gap-6 xl:grid-cols-2"><div className="admin-card"><h2 className="font-bold">Enquiries by Source</h2><div className="mt-5 space-y-4">{sourceCounts.length?sourceCounts.map(([k,v])=><div key={k}><div className="mb-2 flex justify-between text-sm"><span className="text-white/55">{k}</span><strong>{v}</strong></div><div className="h-2 rounded-full bg-white/5"><div className="h-full rounded-full bg-[#EB175D]" style={{width:`${Math.min(100,Math.max(8,Number(v)*15))}%`}}/></div></div>):<p className="text-sm text-white/40">No lead data yet.</p>}</div></div><div className="admin-card"><h2 className="font-bold">Analytics Integration Status</h2><div className="mt-5 space-y-3"><Status label="Lead pipeline data" ok/><Status label="Package configuration data" ok/><Status label="Website visits"/><Status label="Conversion tracking"/><Status label="Popular service tracking"/></div></div></div></PageShell>;
}

export function SystemSettingsPage() {
  const ready=useAdminGuard(); const defaults={maintenance:false,timezone:"Asia/Kolkata",currency:"INR",dateFormat:"DD MMM YYYY",uploadLimit:5,siteName:"BrandlineTech",registrationEnabled:true}; const [s,setS]=useState(defaults); useEffect(()=>{if(ready)setS(readStored("brandline_system_settings",defaults))},[ready]); if(!ready)return null;
  return <PageShell eyebrow="System" title="System Settings" description="Control maintenance mode, timezone, currency, date formatting, upload limits and general website configuration."><SaveBar onSave={()=>localStorage.setItem("brandline_system_settings",JSON.stringify(s))}/><div className="grid gap-5 lg:grid-cols-2"><div className="admin-card space-y-4"><Toggle label="Maintenance Mode" checked={s.maintenance} onChange={v=>setS({...s,maintenance:v})}/><Toggle label="Customer Registration Enabled" checked={s.registrationEnabled} onChange={v=>setS({...s,registrationEnabled:v})}/><Field label="Site Name"><input className="admin-field" value={s.siteName} onChange={e=>setS({...s,siteName:e.target.value})}/></Field></div><div className="admin-card grid gap-4 sm:grid-cols-2"><Field label="Timezone"><select className="admin-field" value={s.timezone} onChange={e=>setS({...s,timezone:e.target.value})}><option>Asia/Kolkata</option><option>UTC</option><option>Asia/Dubai</option><option>Europe/London</option></select></Field><Field label="Currency"><select className="admin-field" value={s.currency} onChange={e=>setS({...s,currency:e.target.value})}><option>INR</option><option>USD</option><option>AED</option><option>GBP</option></select></Field><Field label="Date Format"><select className="admin-field" value={s.dateFormat} onChange={e=>setS({...s,dateFormat:e.target.value})}><option>DD MMM YYYY</option><option>DD/MM/YYYY</option><option>YYYY-MM-DD</option></select></Field><Field label="Upload Limit (MB)"><input type="number" min={1} className="admin-field" value={s.uploadLimit} onChange={e=>setS({...s,uploadLimit:Number(e.target.value)||1})}/></Field></div></div></PageShell>;
}

function Field({label,children}:{label:string;children:ReactNode}){return <label><span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-white/40">{label}</span>{children}</label>}
function Toggle({label,checked,onChange}:{label:string;checked:boolean;onChange:(v:boolean)=>void}){return <label className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm"><span className="font-medium text-white/65">{label}</span><input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} className="size-4 accent-[#EB175D]"/></label>}
function Metric({label,value}:{label:string;value:string|number}){return <div className="admin-card"><p className="text-xs uppercase tracking-wider text-white/35">{label}</p><p className="mt-3 text-2xl font-bold">{value}</p></div>}
function Th({children}:{children:ReactNode}){return <th className="px-3 py-3 font-semibold">{children}</th>}
function Td({children}:{children:ReactNode}){return <td className="px-3 py-4 align-middle text-white/70">{children}</td>}
function Status({label,ok=false}:{label:string;ok?:boolean}){return <div className="flex items-center justify-between rounded-xl border border-white/8 px-4 py-3 text-sm"><span className="text-white/55">{label}</span><span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${ok?"bg-emerald-400/10 text-emerald-300":"bg-amber-400/10 text-amber-200"}`}>{ok?<Check size={13}/>:<Activity size={13}/>} {ok?"Available":"Pending"}</span></div>}
