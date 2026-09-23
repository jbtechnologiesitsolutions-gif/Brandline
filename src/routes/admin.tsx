import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Bell,
  Boxes,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Globe2,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Pencil,
  Phone,
  Plus,
  RefreshCw,
  Save,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Star,
  Trash2,
  TrendingUp,
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

type NavLabel = (typeof nav)[number][0];

type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  source: string;
  status: "New" | "Contacted" | "Qualified" | "Won" | "Closed";
  date: string;
};

type ServiceRow = {
  id: number;
  title: string;
  category: string;
  description: string;
  status: "Active" | "Draft";
  order: number;
  updated: string;
};

type MarketplaceRow = {
  id: number;
  platform: string;
  scope: string;
  status: "Active" | "Paused" | "Planned";
  leads: number;
  priority: "High" | "Medium" | "Low";
  updated: string;
};

type ContentRow = {
  id: number;
  page: string;
  section: string;
  title: string;
  status: "Published" | "Draft";
  updated: string;
};

type TestimonialRow = {
  id: number;
  client: string;
  company: string;
  rating: number;
  quote: string;
  status: "Published" | "Draft";
  date: string;
};

type SeoRow = {
  id: number;
  page: string;
  path: string;
  title: string;
  description: string;
  indexing: "Index" | "Noindex";
  status: "Good" | "Needs review";
};

const defaultLeads: Lead[] = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun@example.com",
    phone: "+91 98765 43210",
    service: "Amazon Management",
    source: "Contact Form",
    status: "New",
    date: "23 Sep 2026",
  },
  {
    id: 2,
    name: "Meera Stores",
    email: "meera@example.com",
    phone: "+91 98471 55220",
    service: "D2C Website",
    source: "Website",
    status: "Contacted",
    date: "22 Sep 2026",
  },
  {
    id: 3,
    name: "Nova Retail",
    email: "hello@novaretail.in",
    phone: "+91 90031 88211",
    service: "Digital Marketing",
    source: "Referral",
    status: "Qualified",
    date: "21 Sep 2026",
  },
];

const defaultServices: ServiceRow[] = [
  {
    id: 1,
    title: "Marketplace Management",
    category: "Marketplace",
    description: "End-to-end seller account operations and growth.",
    status: "Active",
    order: 1,
    updated: "23 Sep 2026",
  },
  {
    id: 2,
    title: "Catalog Management",
    category: "Ecommerce",
    description: "Listings, content, attributes and catalog health.",
    status: "Active",
    order: 2,
    updated: "22 Sep 2026",
  },
  {
    id: 3,
    title: "D2C Development",
    category: "Technology",
    description: "High-converting ecommerce websites and storefronts.",
    status: "Active",
    order: 3,
    updated: "20 Sep 2026",
  },
];

const defaultMarketplaces: MarketplaceRow[] = [
  {
    id: 1,
    platform: "Amazon",
    scope: "Catalog, Ads, Orders, Inventory",
    status: "Active",
    leads: 18,
    priority: "High",
    updated: "23 Sep 2026",
  },
  {
    id: 2,
    platform: "Flipkart",
    scope: "Catalog, Ads, Seller Operations",
    status: "Active",
    leads: 9,
    priority: "High",
    updated: "23 Sep 2026",
  },
  {
    id: 3,
    platform: "Meesho",
    scope: "Catalog & Seller Operations",
    status: "Active",
    leads: 4,
    priority: "Medium",
    updated: "20 Sep 2026",
  },
  {
    id: 4,
    platform: "Myntra",
    scope: "Catalog & Brand Operations",
    status: "Planned",
    leads: 3,
    priority: "Medium",
    updated: "18 Sep 2026",
  },
];

const defaultContent: ContentRow[] = [
  {
    id: 1,
    page: "Home",
    section: "Hero",
    title: "Grow Your Brand Across Every Digital Shelf.",
    status: "Published",
    updated: "23 Sep 2026",
  },
  {
    id: 2,
    page: "Home",
    section: "Services",
    title: "Everything you need to grow online.",
    status: "Published",
    updated: "22 Sep 2026",
  },
  {
    id: 3,
    page: "About",
    section: "Company",
    title: "About BrandlineTech",
    status: "Published",
    updated: "19 Sep 2026",
  },
  {
    id: 4,
    page: "Contact",
    section: "Contact Details",
    title: "Let's talk about your ecommerce goals.",
    status: "Published",
    updated: "18 Sep 2026",
  },
];

const defaultTestimonials: TestimonialRow[] = [
  {
    id: 1,
    client: "Sample Client",
    company: "D2C Brand",
    rating: 5,
    quote: "BrandlineTech helped us organize our marketplace operations.",
    status: "Published",
    date: "20 Sep 2026",
  },
  {
    id: 2,
    client: "Retail Founder",
    company: "Marketplace Seller",
    rating: 5,
    quote: "Clear execution, responsive support and a structured approach.",
    status: "Draft",
    date: "18 Sep 2026",
  },
];

const defaultSeo: SeoRow[] = [
  {
    id: 1,
    page: "Home",
    path: "/",
    title: "BrandlineTech | Ecommerce & Marketplace Growth Partner",
    description: "Marketplace management, ecommerce operations and digital growth services.",
    indexing: "Index",
    status: "Good",
  },
  {
    id: 2,
    page: "Services",
    path: "/services",
    title: "Ecommerce & Marketplace Services | BrandlineTech",
    description: "Explore marketplace management, catalog, ads, SEO and D2C services.",
    indexing: "Index",
    status: "Good",
  },
  {
    id: 3,
    page: "Contact",
    path: "/contact",
    title: "Contact BrandlineTech",
    description: "Talk to BrandlineTech about ecommerce, marketplaces and digital growth.",
    indexing: "Index",
    status: "Needs review",
  },
];

function useStoredState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(key);
      if (saved) {
        setValue(JSON.parse(saved) as T);
      }
    } catch {
      // Ignore invalid local data and use defaults.
    } finally {
      setLoaded(true);
    }
  }, [key]);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, loaded, value]);

  return [value, setValue] as const;
}

function AdminPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState<NavLabel>("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");

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
              <div className="text-[11px] text-white/40">ADMIN CONSOLE</div>
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
              value={globalSearch}
              onChange={(event) => setGlobalSearch(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-white/20"
              placeholder={`Search ${active.toLowerCase()}…`}
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
            <h1 className="mt-2 text-3xl font-bold tracking-tight">{active}</h1>
            <p className="mt-2 text-sm text-white/45">
              Manage your BrandlineTech website and business content from one place.
            </p>
          </div>

          <DashboardContent
            active={active}
            setActive={setActive}
            globalSearch={globalSearch}
          />
        </main>
      </div>
    </div>
  );
}

function DashboardContent({
  active,
  setActive,
  globalSearch,
}: {
  active: NavLabel;
  setActive: (value: NavLabel) => void;
  globalSearch: string;
}) {
  if (active === "Leads & Enquiries") {
    return <LeadsSection search={globalSearch} />;
  }

  if (active === "Services") {
    return <ServicesSection search={globalSearch} />;
  }

  if (active === "Marketplace") {
    return <MarketplaceSection search={globalSearch} />;
  }

  if (active === "Website Content") {
    return <WebsiteContentSection search={globalSearch} />;
  }

  if (active === "Testimonials") {
    return <TestimonialsSection search={globalSearch} />;
  }

  if (active === "SEO & Settings") {
    return <SeoSettingsSection search={globalSearch} />;
  }

  return <OverviewSection setActive={setActive} />;
}

function OverviewSection({
  setActive,
}: {
  setActive: (value: NavLabel) => void;
}) {
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
          <MetricCard
            key={label}
            label={label}
            value={value}
            trend={trend}
            icon={Icon}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Panel title="Recent enquiries" action="Open leads">
          <div className="divide-y divide-white/5">
            {[
              ["D2C website development", "New", "Today"],
              ["Amazon marketplace management", "Contacted", "Today"],
              ["Digital marketing package", "Qualified", "Yesterday"],
              ["Catalog management", "New", "Yesterday"],
            ].map(([title, status, date], index) => (
              <div key={title} className="flex items-center gap-4 py-4">
                <span className="grid size-9 place-items-center rounded-full bg-white/5 text-xs text-white/50">
                  0{index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{title}</div>
                  <div className="mt-1 text-xs text-white/35">{date}</div>
                </div>
                <StatusBadge status={status} />
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Quick actions">
          <div className="grid gap-3">
            {[
              ["Review enquiries", "Leads & Enquiries"],
              ["Add or update services", "Services"],
              ["Update website sections", "Website Content"],
              ["Manage testimonials", "Testimonials"],
              ["Review SEO", "SEO & Settings"],
            ].map(([label, section]) => (
              <button
                key={label}
                onClick={() => setActive(section as NavLabel)}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-left text-sm text-white/70 transition hover:border-[#C9952E]/30 hover:text-white"
              >
                <span>{label}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Panel title="Performance snapshot">
          <div className="space-y-5">
            {[
              ["Marketplace enquiries", 72],
              ["Website projects", 54],
              ["Digital marketing", 46],
            ].map(([label, value]) => (
              <div key={label as string}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/55">{label}</span>
                  <span className="font-semibold">{value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-[#C9952E]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Publishing status">
          <InfoList
            rows={[
              ["Published pages", "8"],
              ["Draft sections", "2"],
              ["Published testimonials", "1"],
              ["SEO pages needing review", "1"],
            ]}
          />
        </Panel>

        <Panel title="Admin notes">
          <div className="space-y-3 text-sm leading-6 text-white/50">
            <p>Use Website Content to review page copy and publishing status.</p>
            <p>Use SEO & Settings to maintain metadata, contact information and indexing.</p>
            <p className="rounded-xl border border-[#C9952E]/20 bg-[#C9952E]/5 p-3 text-[#E7C56D]">
              Current records are saved in this browser only until a backend/database is connected.
            </p>
          </div>
        </Panel>
      </div>
    </>
  );
}

function LeadsSection({ search }: { search: string }) {
  const [leads, setLeads] = useStoredState<Lead[]>(
    "brandline_admin_leads",
    defaultLeads,
  );
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesSearch =
        !query ||
        [
          lead.name,
          lead.email,
          lead.phone,
          lead.service,
          lead.source,
          lead.status,
        ].some((value) => value.toLowerCase().includes(query));

      const matchesStatus = status === "All" || lead.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [leads, search, status]);

  function addLead() {
    setLeads((current) => [
      {
        id: Date.now(),
        name: "New Lead",
        email: "newlead@example.com",
        phone: "+91",
        service: "General Enquiry",
        source: "Manual",
        status: "New",
        date: new Date().toLocaleDateString("en-GB"),
      },
      ...current,
    ]);
  }

  return (
    <>
      <SectionHeader
        title="Leads & Enquiries"
        description="Track every website enquiry from first contact to conversion."
        primaryLabel="Add lead"
        onPrimary={addLead}
        secondaryLabel="Export CSV"
        onSecondary={() => downloadCsv("brandline-leads.csv", leads)}
      />

      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <MiniMetric label="Total leads" value={String(leads.length)} />
        <MiniMetric
          label="New"
          value={String(leads.filter((lead) => lead.status === "New").length)}
        />
        <MiniMetric
          label="Qualified / Won"
          value={String(
            leads.filter(
              (lead) => lead.status === "Qualified" || lead.status === "Won",
            ).length,
          )}
        />
      </div>

      <Panel>
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Filter size={16} className="text-white/35" />
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-lg border border-white/10 bg-[#111] px-3 py-2 text-sm text-white outline-none"
          >
            {["All", "New", "Contacted", "Qualified", "Won", "Closed"].map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </select>

          <button
            onClick={() => setLeads(defaultLeads)}
            className="ml-auto inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50 hover:text-white"
          >
            <RefreshCw size={14} />
            Reset sample data
          </button>
        </div>

        <TableScroll>
          <table className="min-w-[1050px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/35">
                <Th>Lead</Th>
                <Th>Contact</Th>
                <Th>Service</Th>
                <Th>Source</Th>
                <Th>Status</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id} className="border-b border-white/5">
                  <Td>
                    <div className="font-medium">{lead.name}</div>
                  </Td>
                  <Td>
                    <div className="space-y-1 text-xs text-white/55">
                      <div className="flex items-center gap-2">
                        <Mail size={13} />
                        {lead.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={13} />
                        {lead.phone}
                      </div>
                    </div>
                  </Td>
                  <Td>{lead.service}</Td>
                  <Td>{lead.source}</Td>
                  <Td>
                    <select
                      value={lead.status}
                      onChange={(event) =>
                        setLeads((rows) =>
                          rows.map((row) =>
                            row.id === lead.id
                              ? {
                                  ...row,
                                  status: event.target.value as Lead["status"],
                                }
                              : row,
                          ),
                        )
                      }
                      className="rounded-lg border border-white/10 bg-[#111] px-2.5 py-2 text-xs text-white outline-none"
                    >
                      {["New", "Contacted", "Qualified", "Won", "Closed"].map(
                        (item) => (
                          <option key={item}>{item}</option>
                        ),
                      )}
                    </select>
                  </Td>
                  <Td>{lead.date}</Td>
                  <Td>
                    <RowActions
                      onEdit={() => {
                        const name = window.prompt("Lead name", lead.name);
                        if (!name) return;
                        setLeads((rows) =>
                          rows.map((row) =>
                            row.id === lead.id ? { ...row, name } : row,
                          ),
                        );
                      }}
                      onDelete={() =>
                        setLeads((rows) =>
                          rows.filter((row) => row.id !== lead.id),
                        )
                      }
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </Panel>
    </>
  );
}

function ServicesSection({ search }: { search: string }) {
  const [services, setServices] = useStoredState<ServiceRow[]>(
    "brandline_admin_services",
    defaultServices,
  );

  const filtered = services.filter((service) =>
    [service.title, service.category, service.description, service.status]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  function addService() {
    setServices((rows) => [
      ...rows,
      {
        id: Date.now(),
        title: "New Service",
        category: "General",
        description: "Add service description.",
        status: "Draft",
        order: rows.length + 1,
        updated: "Today",
      },
    ]);
  }

  return (
    <>
      <SectionHeader
        title="Services"
        description="Manage service cards, categories, publishing status and display order."
        primaryLabel="Add service"
        onPrimary={addService}
      />

      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <MiniMetric label="Total services" value={String(services.length)} />
        <MiniMetric
          label="Active"
          value={String(services.filter((item) => item.status === "Active").length)}
        />
        <MiniMetric
          label="Draft"
          value={String(services.filter((item) => item.status === "Draft").length)}
        />
      </div>

      <Panel>
        <TableScroll>
          <table className="min-w-[1000px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/35">
                <Th>Service</Th>
                <Th>Category</Th>
                <Th>Description</Th>
                <Th>Status</Th>
                <Th>Order</Th>
                <Th>Updated</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((service) => (
                <tr key={service.id} className="border-b border-white/5">
                  <Td>
                    <div className="font-medium">{service.title}</div>
                  </Td>
                  <Td>{service.category}</Td>
                  <Td>
                    <p className="max-w-sm text-xs leading-5 text-white/45">
                      {service.description}
                    </p>
                  </Td>
                  <Td>
                    <button
                      onClick={() =>
                        setServices((rows) =>
                          rows.map((row) =>
                            row.id === service.id
                              ? {
                                  ...row,
                                  status:
                                    row.status === "Active" ? "Draft" : "Active",
                                }
                              : row,
                          ),
                        )
                      }
                    >
                      <StatusBadge status={service.status} />
                    </button>
                  </Td>
                  <Td>{service.order}</Td>
                  <Td>{service.updated}</Td>
                  <Td>
                    <RowActions
                      onEdit={() => {
                        const title = window.prompt(
                          "Service title",
                          service.title,
                        );
                        if (!title) return;
                        setServices((rows) =>
                          rows.map((row) =>
                            row.id === service.id ? { ...row, title } : row,
                          ),
                        );
                      }}
                      onDelete={() =>
                        setServices((rows) =>
                          rows.filter((row) => row.id !== service.id),
                        )
                      }
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </Panel>
    </>
  );
}

function MarketplaceSection({ search }: { search: string }) {
  const [rows, setRows] = useStoredState<MarketplaceRow[]>(
    "brandline_admin_marketplaces",
    defaultMarketplaces,
  );

  const filtered = rows.filter((row) =>
    [row.platform, row.scope, row.status, row.priority]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <>
      <SectionHeader
        title="Marketplace Management"
        description="Manage supported marketplaces, service scope, priority and lead activity."
        primaryLabel="Add marketplace"
        onPrimary={() =>
          setRows((current) => [
            ...current,
            {
              id: Date.now(),
              platform: "New Marketplace",
              scope: "Define service scope",
              status: "Planned",
              leads: 0,
              priority: "Medium",
              updated: "Today",
            },
          ])
        }
      />

      <div className="mb-5 grid gap-4 sm:grid-cols-4">
        <MiniMetric label="Platforms" value={String(rows.length)} />
        <MiniMetric
          label="Active"
          value={String(rows.filter((item) => item.status === "Active").length)}
        />
        <MiniMetric
          label="Total leads"
          value={String(rows.reduce((total, item) => total + item.leads, 0))}
        />
        <MiniMetric
          label="High priority"
          value={String(rows.filter((item) => item.priority === "High").length)}
        />
      </div>

      <Panel>
        <TableScroll>
          <table className="min-w-[1000px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/35">
                <Th>Platform</Th>
                <Th>Service scope</Th>
                <Th>Status</Th>
                <Th>Leads</Th>
                <Th>Priority</Th>
                <Th>Last updated</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-white/5">
                  <Td>
                    <div className="font-medium">{item.platform}</div>
                  </Td>
                  <Td>
                    <div className="max-w-md text-xs leading-5 text-white/50">
                      {item.scope}
                    </div>
                  </Td>
                  <Td>
                    <StatusBadge status={item.status} />
                  </Td>
                  <Td>{item.leads}</Td>
                  <Td>
                    <StatusBadge status={item.priority} />
                  </Td>
                  <Td>{item.updated}</Td>
                  <Td>
                    <RowActions
                      onEdit={() => {
                        const platform = window.prompt(
                          "Marketplace name",
                          item.platform,
                        );
                        if (!platform) return;
                        setRows((current) =>
                          current.map((row) =>
                            row.id === item.id ? { ...row, platform } : row,
                          ),
                        );
                      }}
                      onDelete={() =>
                        setRows((current) =>
                          current.filter((row) => row.id !== item.id),
                        )
                      }
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </Panel>
    </>
  );
}

function WebsiteContentSection({ search }: { search: string }) {
  const [rows, setRows] = useStoredState<ContentRow[]>(
    "brandline_admin_content",
    defaultContent,
  );

  const filtered = rows.filter((row) =>
    [row.page, row.section, row.title, row.status]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <>
      <SectionHeader
        title="Website Content"
        description="Review page sections, headings and publishing status."
        primaryLabel="Add section"
        onPrimary={() =>
          setRows((current) => [
            ...current,
            {
              id: Date.now(),
              page: "Home",
              section: "New Section",
              title: "New section title",
              status: "Draft",
              updated: "Today",
            },
          ])
        }
      />

      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <MiniMetric
          label="Content sections"
          value={String(rows.length)}
        />
        <MiniMetric
          label="Published"
          value={String(
            rows.filter((item) => item.status === "Published").length,
          )}
        />
        <MiniMetric
          label="Draft"
          value={String(rows.filter((item) => item.status === "Draft").length)}
        />
      </div>

      <Panel>
        <TableScroll>
          <table className="min-w-[950px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/35">
                <Th>Page</Th>
                <Th>Section</Th>
                <Th>Heading / content title</Th>
                <Th>Status</Th>
                <Th>Updated</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-white/5">
                  <Td>{item.page}</Td>
                  <Td>{item.section}</Td>
                  <Td>
                    <div className="max-w-lg font-medium">{item.title}</div>
                  </Td>
                  <Td>
                    <StatusBadge status={item.status} />
                  </Td>
                  <Td>{item.updated}</Td>
                  <Td>
                    <RowActions
                      onView={() => window.open("/", "_blank")}
                      onEdit={() => {
                        const title = window.prompt(
                          "Section title",
                          item.title,
                        );
                        if (!title) return;
                        setRows((current) =>
                          current.map((row) =>
                            row.id === item.id ? { ...row, title } : row,
                          ),
                        );
                      }}
                      onDelete={() =>
                        setRows((current) =>
                          current.filter((row) => row.id !== item.id),
                        )
                      }
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </Panel>
    </>
  );
}

function TestimonialsSection({ search }: { search: string }) {
  const [rows, setRows] = useStoredState<TestimonialRow[]>(
    "brandline_admin_testimonials",
    defaultTestimonials,
  );

  const filtered = rows.filter((row) =>
    [row.client, row.company, row.quote, row.status]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <>
      <SectionHeader
        title="Testimonials"
        description="Manage client reviews, ratings and publishing status."
        primaryLabel="Add testimonial"
        onPrimary={() =>
          setRows((current) => [
            ...current,
            {
              id: Date.now(),
              client: "New Client",
              company: "Company",
              rating: 5,
              quote: "Add testimonial text.",
              status: "Draft",
              date: "Today",
            },
          ])
        }
      />

      <Panel>
        <TableScroll>
          <table className="min-w-[1050px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/35">
                <Th>Client</Th>
                <Th>Company</Th>
                <Th>Rating</Th>
                <Th>Testimonial</Th>
                <Th>Status</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-white/5">
                  <Td>
                    <div className="font-medium">{item.client}</div>
                  </Td>
                  <Td>{item.company}</Td>
                  <Td>
                    <div className="flex gap-0.5 text-[#C9952E]">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={index} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </Td>
                  <Td>
                    <p className="max-w-md text-xs leading-5 text-white/50">
                      {item.quote}
                    </p>
                  </Td>
                  <Td>
                    <StatusBadge status={item.status} />
                  </Td>
                  <Td>{item.date}</Td>
                  <Td>
                    <RowActions
                      onEdit={() => {
                        const quote = window.prompt(
                          "Testimonial",
                          item.quote,
                        );
                        if (!quote) return;
                        setRows((current) =>
                          current.map((row) =>
                            row.id === item.id ? { ...row, quote } : row,
                          ),
                        );
                      }}
                      onDelete={() =>
                        setRows((current) =>
                          current.filter((row) => row.id !== item.id),
                        )
                      }
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </Panel>
    </>
  );
}

function SeoSettingsSection({ search }: { search: string }) {
  const [rows, setRows] = useStoredState<SeoRow[]>(
    "brandline_admin_seo",
    defaultSeo,
  );
  const [settings, setSettings] = useStoredState(
    "brandline_admin_settings",
    {
      businessName: "BrandlineTech",
      email: "support@brandlinetech.com",
      phone: "+91 9789 104 651",
      website: "https://www.thebrandlinetech.com",
      city: "Coimbatore, Tamil Nadu",
      googleAnalytics: "",
      metaPixel: "",
    },
  );

  const filtered = rows.filter((row) =>
    [row.page, row.path, row.title, row.description, row.status]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <>
      <SectionHeader
        title="SEO & Settings"
        description="Maintain page metadata, indexing and important business configuration."
        primaryLabel="Save settings"
        onPrimary={() =>
          window.localStorage.setItem(
            "brandline_admin_settings",
            JSON.stringify(settings),
          )
        }
        primaryIcon={Save}
      />

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Panel title="Page SEO">
          <TableScroll>
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/35">
                  <Th>Page</Th>
                  <Th>Path</Th>
                  <Th>SEO title</Th>
                  <Th>Meta description</Th>
                  <Th>Indexing</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} className="border-b border-white/5">
                    <Td>{item.page}</Td>
                    <Td>
                      <code className="text-xs text-[#D8B45C]">
                        {item.path}
                      </code>
                    </Td>
                    <Td>
                      <div className="max-w-xs text-xs leading-5">
                        {item.title}
                      </div>
                    </Td>
                    <Td>
                      <div className="max-w-sm text-xs leading-5 text-white/45">
                        {item.description}
                      </div>
                    </Td>
                    <Td>{item.indexing}</Td>
                    <Td>
                      <StatusBadge status={item.status} />
                    </Td>
                    <Td>
                      <RowActions
                        onEdit={() => {
                          const title = window.prompt("SEO title", item.title);
                          if (!title) return;
                          setRows((current) =>
                            current.map((row) =>
                              row.id === item.id ? { ...row, title } : row,
                            ),
                          );
                        }}
                        onDelete={() =>
                          setRows((current) =>
                            current.filter((row) => row.id !== item.id),
                          )
                        }
                      />
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
        </Panel>

        <Panel title="Business settings">
          <div className="space-y-4">
            <SettingInput
              label="Business name"
              value={settings.businessName}
              onChange={(value) =>
                setSettings((current) => ({
                  ...current,
                  businessName: value,
                }))
              }
            />
            <SettingInput
              label="Contact email"
              value={settings.email}
              onChange={(value) =>
                setSettings((current) => ({ ...current, email: value }))
              }
            />
            <SettingInput
              label="Phone"
              value={settings.phone}
              onChange={(value) =>
                setSettings((current) => ({ ...current, phone: value }))
              }
            />
            <SettingInput
              label="Website URL"
              value={settings.website}
              onChange={(value) =>
                setSettings((current) => ({ ...current, website: value }))
              }
            />
            <SettingInput
              label="Primary location"
              value={settings.city}
              onChange={(value) =>
                setSettings((current) => ({ ...current, city: value }))
              }
            />
            <SettingInput
              label="Google Analytics ID"
              value={settings.googleAnalytics}
              placeholder="G-XXXXXXXXXX"
              onChange={(value) =>
                setSettings((current) => ({
                  ...current,
                  googleAnalytics: value,
                }))
              }
            />
            <SettingInput
              label="Meta Pixel ID"
              value={settings.metaPixel}
              placeholder="Pixel ID"
              onChange={(value) =>
                setSettings((current) => ({
                  ...current,
                  metaPixel: value,
                }))
              }
            />
          </div>
        </Panel>
      </div>
    </>
  );
}

function SectionHeader({
  title,
  description,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
  primaryIcon: PrimaryIcon = Plus,
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  onPrimary?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  primaryIcon?: typeof Plus;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 max-w-2xl text-sm text-white/45">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {secondaryLabel && (
          <button
            onClick={onSecondary}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/65 hover:bg-white/[0.04] hover:text-white"
          >
            <Download size={16} />
            {secondaryLabel}
          </button>
        )}

        {primaryLabel && (
          <button
            onClick={onPrimary}
            className="inline-flex items-center gap-2 rounded-xl bg-[#C9952E] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#D8B45C]"
          >
            <PrimaryIcon size={16} />
            {primaryLabel}
          </button>
        )}
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  trend,
  icon: Icon,
}: {
  label: string;
  value: string;
  trend: string;
  icon: typeof Globe2;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/45">{label}</span>
        <span className="grid size-9 place-items-center rounded-xl bg-[#C9952E]/10 text-[#C9952E]">
          <Icon size={17} />
        </span>
      </div>
      <div className="mt-5 text-3xl font-bold">{value}</div>
      <div className="mt-1 flex items-center gap-1 text-xs text-emerald-300">
        <TrendingUp size={13} />
        {trend}
      </div>
    </div>
  );
}

function MiniMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
      <div className="text-xs uppercase tracking-wider text-white/35">
        {label}
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}

function Panel({
  title,
  action,
  children,
}: {
  title?: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
      {(title || action) && (
        <div className="mb-5 flex items-center justify-between gap-4">
          {title && <h2 className="font-semibold">{title}</h2>}
          {action && (
            <span className="text-xs font-medium text-[#C9952E]">{action}</span>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function TableScroll({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-auto">{children}</div>;
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-3 py-3 font-semibold">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-4 align-middle text-white/70">{children}</td>;
}

function RowActions({
  onView,
  onEdit,
  onDelete,
}: {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {onView && (
        <button
          onClick={onView}
          title="View"
          className="rounded-lg p-2 text-white/40 hover:bg-white/5 hover:text-white"
        >
          <Eye size={15} />
        </button>
      )}

      {onEdit && (
        <button
          onClick={onEdit}
          title="Edit"
          className="rounded-lg p-2 text-white/40 hover:bg-white/5 hover:text-[#D8B45C]"
        >
          <Pencil size={15} />
        </button>
      )}

      {onDelete && (
        <button
          onClick={onDelete}
          title="Delete"
          className="rounded-lg p-2 text-white/40 hover:bg-red-400/10 hover:text-red-300"
        >
          <Trash2 size={15} />
        </button>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();

  let classes = "bg-white/5 text-white/55 border-white/10";

  if (
    ["active", "published", "won", "good", "qualified", "high"].includes(
      normalized,
    )
  ) {
    classes = "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
  } else if (
    ["new", "contacted", "planned", "draft", "medium", "needs review"].includes(
      normalized,
    )
  ) {
    classes = "bg-amber-400/10 text-amber-200 border-amber-400/20";
  } else if (["closed", "paused", "low"].includes(normalized)) {
    classes = "bg-red-400/10 text-red-300 border-red-400/20";
  }

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${classes}`}
    >
      {status}
    </span>
  );
}

function InfoList({ rows }: { rows: [string, string][] }) {
  return (
    <div className="divide-y divide-white/5">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="flex items-center justify-between gap-4 py-3 text-sm"
        >
          <span className="text-white/50">{label}</span>
          <span className="font-semibold">{value}</span>
        </div>
      ))}
    </div>
  );
}

function SettingInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-white/45">
        {label}
      </span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/20 px-3.5 py-3 text-sm outline-none transition focus:border-[#C9952E]/50"
      />
    </label>
  );
}

function downloadCsv(filename: string, rows: Lead[]) {
  const header = [
    "Name",
    "Email",
    "Phone",
    "Service",
    "Source",
    "Status",
    "Date",
  ];

  const escapeCell = (value: string) =>
    `"${value.replaceAll('"', '""')}"`;

  const csv = [
    header.join(","),
    ...rows.map((row) =>
      [
        row.name,
        row.email,
        row.phone,
        row.service,
        row.source,
        row.status,
        row.date,
      ]
        .map(escapeCell)
        .join(","),
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  anchor.click();

  URL.revokeObjectURL(url);
}
