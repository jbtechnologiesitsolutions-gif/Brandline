import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  Activity,
  BarChart3,
  Bell,
  Boxes,
  CircleDollarSign,
  CircleHelp,
  FileText,
  Globe2,
  Image,
  LayoutDashboard,
  MessageSquare,
  Palette,
  Settings,
  Share2,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar, Footer } from "@/components/site-shell";
import { ClientProjectsSection } from "@/components/client-projects";
import { TechnologyStackSection } from "@/components/technology-stack";
import { FrontendBrandingRuntime } from "@/components/frontend-branding-runtime";

const adminManagementLinks = [
  { label: "Home Banner", href: "/admin-home-banner", icon: Image },
  { label: "Packages Management", href: "/admin-packages", icon: CircleDollarSign },
  { label: "Customer Management", href: "/admin-customers", icon: Users },
  { label: "Roles & Permissions", href: "/admin-roles-permissions", icon: UserCog },
  { label: "Client Websites", href: "/admin-client-projects", icon: Globe2 },
  { label: "Technology Stack", href: "/admin-technology-stack", icon: Boxes },
  { label: "Enquiry Settings", href: "/admin-enquiry-settings", icon: MessageSquare },
  { label: "FAQ Management", href: "/admin-faq", icon: CircleHelp },
  { label: "Notifications", href: "/admin-notifications", icon: Bell },
  { label: "Social Media", href: "/admin-social-media", icon: Share2 },
  { label: "Analytics", href: "/admin-analytics", icon: BarChart3 },
  { label: "Policy Pages", href: "/admin-policy-pages", icon: FileText },
  { label: "Branding & Theme", href: "/admin-branding-theme", icon: Palette },
  { label: "Activity & Login Logs", href: "/admin-activity-logs", icon: Activity },
  { label: "System Settings", href: "/admin-system-settings", icon: Settings },
] as const;

function AdminManagementLinks({ compact = false }: { compact?: boolean }) {
  const location = useLocation();

  return (
    <div className={compact ? "space-y-1" : "space-y-1.5"}>
      {adminManagementLinks.map(({ label, href, icon: Icon }) => {
        const active = location.pathname === href;
        return (
          <a
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition ${
              active
                ? "bg-[#EB175D]/14 text-[#EB175D]"
                : "text-white/55 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            <Icon size={17} />
            <span>{label}</span>
          </a>
        );
      })}
    </div>
  );
}

function AdminDashboardSidebarModules() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTarget(document.querySelector("aside"));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="absolute bottom-[116px] left-5 right-5 top-[438px] overflow-y-auto border-t border-white/8 pt-3">
      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/25">
        Site Management
      </p>
      <AdminManagementLinks compact />
    </div>,
    target,
  );
}

function StandaloneAdminSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 flex-col border-r border-white/10 bg-[#0d0d0d] p-5 text-white lg:flex">
      <a href="/admin" className="flex items-center gap-3 px-2 pb-7">
        <span className="grid size-10 place-items-center rounded-xl bg-white text-lg font-black text-black">
          B
        </span>
        <div>
          <div className="font-bold">BrandlineTech</div>
          <div className="text-[11px] text-white/40">ADMIN CONSOLE</div>
        </div>
      </a>

      <a
        href="/admin"
        className="mb-3 flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-white/60 transition hover:bg-white/[0.04] hover:text-white"
      >
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </a>

      <div className="min-h-0 flex-1 overflow-y-auto border-t border-white/8 pt-3">
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/25">
          Site Management
        </p>
        <AdminManagementLinks />
      </div>

      <div className="mt-4 space-y-1 border-t border-white/8 pt-4">
        <a
          href="/customer-login"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
        >
          <ShieldCheck size={17} />
          Customer Portal Preview
        </a>
        <a
          href="/"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
        >
          <Globe2 size={17} />
          View Website
        </a>
      </div>
    </aside>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });

    const message = `${error?.name ?? ""} ${error?.message ?? ""}`;
    const isStaleChunkError =
      /Failed to fetch dynamically imported module/i.test(message) ||
      /Importing a module script failed/i.test(message) ||
      /Loading chunk .* failed/i.test(message);

    if (!isStaleChunkError || typeof window === "undefined") return;

    const recoveryKey = "brandline-stale-chunk-recovery";
    const recoveredAt = Number(sessionStorage.getItem(recoveryKey) || 0);
    const now = Date.now();

    if (!recoveredAt || now - recoveredAt > 60_000) {
      sessionStorage.setItem(recoveryKey, String(now));
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="max-w-xl text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        {error && (
          <div className="mt-4 max-h-60 overflow-auto rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-left font-mono text-xs text-destructive">
            <p className="font-bold">{error.name}: {error.message}</p>
            {error.stack && <pre className="mt-2 whitespace-pre-wrap opacity-80">{error.stack}</pre>}
          </div>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BrandlineTech",
              legalName: "Brandline Tech Solutions Pvt. Ltd.",
              url: "https://www.thebrandlinetech.com",
              telephone: "+91-9789-104-651",
              email: "support@brandlinetech.com",
              slogan: "Empowering Your Brand's Digital Journey",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Complex, Avinashi Road",
                addressLocality: "Coimbatore",
                postalCode: "641004",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const isAdminDashboard = location.pathname === "/admin";
  const isAdminLogin = location.pathname === "/admin-login";
  const isStandaloneAdminPage = isAdmin && !isAdminDashboard && !isAdminLogin;

  useEffect(() => {
    const handlePreloadError = (event: Event) => {
      event.preventDefault();
      const recoveryKey = "brandline-vite-preload-recovery";
      const recoveredAt = Number(sessionStorage.getItem(recoveryKey) || 0);
      const now = Date.now();

      if (!recoveredAt || now - recoveredAt > 60_000) {
        sessionStorage.setItem(recoveryKey, String(now));
        window.location.reload();
      }
    };

    window.addEventListener("vite:preloadError", handlePreloadError);
    return () => window.removeEventListener("vite:preloadError", handlePreloadError);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <FrontendBrandingRuntime />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-3">Skip to content</a>
      {!isAdmin && <Navbar />}

      {isAdminDashboard && <AdminDashboardSidebarModules />}
      {isStandaloneAdminPage && <StandaloneAdminSidebar />}

      <div id="main-content" className={isStandaloneAdminPage ? "lg:pl-72" : ""}>
        <Outlet />
      </div>

      {!isAdmin && <ClientProjectsSection />}
      {!isAdmin && <TechnologyStackSection />}
      {!isAdmin && <Footer />}
    </QueryClientProvider>
  );
}
