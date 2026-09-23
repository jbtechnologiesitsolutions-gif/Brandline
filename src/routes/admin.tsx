import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bell,
  Boxes,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe2,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const ADMIN_EMAIL = "brandline@gmail.com";
const STORAGE_KEY = "brandline_admin_email";

const nav = [
  ["Overview", LayoutDashboard],
  ["Leads & Enquiries", MessageSquare],
  ["Services", Boxes],
  ["Marketplace", ShoppingBag],
  ["Website Content", FileText],
  ["Testimonials", Users],
  ["SEO & Settings", Settings],
] as const;

function AdminPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    const savedEmail = window.localStorage
      .getItem(STORAGE_KEY)
      ?.trim()
      .toLowerCase();

    if (savedEmail !== ADMIN_EMAIL) {
      navigate({ to: "/admin-login", replace: true });
      return;
    }

    setAdminEmail(savedEmail);
    setReady(true);
  }, [navigate]);

  function logout() {
    window.localStorage.removeItem(STORAGE_KEY);
    navigate({ to: "/admin-login", replace: true });
  }

  if (!ready) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#080808] text-white">
        <p className="text-sm text-white/45">Opening admin panel…</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {sidebarOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/70 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-white/10 bg-[#0d0d0d] p-5 transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-2 pb-7">
          <a href="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white text-lg font-black text-black">
              B
            </span>

            <div>
              <div className="font-bold">BrandlineTech</div>
              <div className="text-[11px] text-white/40">
                ADMIN CONSOLE
              </div>
            </div>
          </a>

          <button
            className="text-white/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={19} />
          </button>
        </div>

        <nav className="space-y-1">
          {nav.map(([label, Icon]) => (
            <button
              key={label}
              onClick={() => {
                setActive(label);
                setSidebarOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition ${
                active === label
                  ? "bg-[#C9952E]/12 text-[#C9952E]"
                  : "text-white/55 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>

              {active === label && (
                <ChevronRight size={15} className="ml-auto" />
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-5 left-5 right-5 space-y-2">
          <a
            href="/"
            className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-white/50 hover:bg-white/[0.04] hover:text-white"
          >
            <ExternalLink size={18} />
            View website
          </a>

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-red-300/80 hover:bg-red-400/10"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-white/10 bg-[#080808]/85 px-5 backdrop-blur-xl">
          <button
            className="text-white/60 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={21} />
          </button>

          <div className="relative hidden w-full max-w-md sm:block">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-white/20"
              placeholder="Search admin panel…"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="relative text-white/45 hover:text-white">
              <Bell size={19} />
              <span className="absolute -right-1 -top-1 size-2 rounded-full bg-[#C9952E]" />
            </button>

            <div className="hidden text-right sm:block">
              <div className="text-sm font-medium">Admin</div>
              <div className="text-xs text-white/35">{adminEmail}</div>
            </div>

            <span className="grid size-9 place-items-center rounded-full bg-[#C9952E]/15 text-[#C9952E]">
              <ShieldCheck size={18} />
            </span>
          </div>
        </header>

        <main className="max-w-[1500px] p-5 sm:p-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C9952E]">
              Control Center
            </div>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              {active}
            </h1>

            <p className="mt-2 text-sm text-white/45">
              Manage your BrandlineTech website and business content from one place.
            </p>
          </div>

          <DashboardContent active={active} />
        </main>
      </div>
    </div>
  );
}

function DashboardContent({ active }: { active: string }) {
  if (active !== "Overview") {
    return <ComingSoon title={active} />;
  }

  const cards = [
    ["Website visits", "12,840", "+18.4%", Globe2],
    ["New enquiries", "86", "+12.1%", MessageSquare],
    ["Active services", "12", "Live", Boxes],
    ["Marketplace leads", "34", "+8.7%", ShoppingBag],
  ] as const;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value, trend, Icon]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/45">{label}</span>

              <span className="grid size-9 place-items-center rounded-xl bg-[#C9952E]/10 text-[#C9952E]">
                <Icon size={17} />
              </span>
            </div>

            <div className="mt-5 text-3xl font-bold">{value}</div>
            <div className="mt-1 text-xs text-emerald-300">{trend}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent enquiries</h2>
            <button className="text-xs text-[#C9952E]">View all</button>
          </div>

          <div className="mt-5 divide-y divide-white/5">
            {[
              "D2C website development",
              "Amazon marketplace management",
              "Digital marketing package",
              "Catalog management",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-4 py-4">
                <span className="grid size-9 place-items-center rounded-full bg-white/5 text-xs text-white/50">
                  0{index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">
                    {item}
                  </div>
                  <div className="mt-1 text-xs text-white/35">
                    New enquiry · Today
                  </div>
                </div>

                <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-200">
                  New
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <h2 className="font-semibold">Quick actions</h2>

          <div className="mt-5 grid gap-3">
            {[
              "Add a service",
              "Update homepage content",
              "Review enquiries",
              "Manage testimonials",
            ].map((item) => (
              <button
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3.5 text-left text-sm text-white/70 hover:border-[#C9952E]/30 hover:text-white"
              >
                <span>{item}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-10 text-center">
      <Package className="mx-auto text-[#C9952E]" size={32} />

      <h2 className="mt-4 text-xl font-semibold">
        {title} management
      </h2>

      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-white/45">
        This section is ready for your website management features.
      </p>
    </div>
  );
}
