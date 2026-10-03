export type ActivityLog = {
  id: string;
  type: "login" | "security" | "lead" | "content" | "settings" | "system";
  action: string;
  actor: string;
  status: "success" | "failed" | "info";
  details: string;
  createdAt: string;
  userAgent?: string;
};

export const ACTIVITY_LOG_KEY = "brandline_activity_logs";
export const POLICY_SETTINGS_KEY = "brandline_policy_pages";
export const BRAND_SETTINGS_KEY = "brandline_brand_settings";

export type PolicyPage = {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  updatedAt: string;
};

export type BrandSettings = {
  logoText: string;
  logoImage: string;
  faviconUrl: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  surface: string;
};

export const defaultPolicies: PolicyPage[] = [
  { id: "privacy", title: "Privacy Policy", slug: "/privacy-policy", content: "Add your BrandlineTech privacy policy content here.", published: true, updatedAt: "Today" },
  { id: "terms", title: "Terms & Conditions", slug: "/terms", content: "Add your BrandlineTech terms and conditions here.", published: true, updatedAt: "Today" },
  { id: "refund", title: "Refund & Cancellation Policy", slug: "/refund-policy", content: "Add refund and cancellation terms here.", published: false, updatedAt: "Today" },
  { id: "cookies", title: "Cookie Policy", slug: "/cookie-policy", content: "Add cookie policy content here.", published: false, updatedAt: "Today" },
];

export const defaultBrandSettings: BrandSettings = {
  logoText: "BrandlineTech",
  logoImage: "",
  faviconUrl: "/favicon.svg",
  primary: "#EB175D",
  secondary: "#CC527A",
  accent: "#AAA7A7",
  background: "#F6F1F3",
  foreground: "#363636",
  surface: "#FFFDFE",
};

export function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function addActivityLog(input: Omit<ActivityLog, "id" | "createdAt" | "userAgent">) {
  if (typeof window === "undefined") return;
  const rows = readJson<ActivityLog[]>(ACTIVITY_LOG_KEY, []);
  const row: ActivityLog = {
    ...input,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };
  writeJson(ACTIVITY_LOG_KEY, [row, ...rows].slice(0, 1000));
  window.dispatchEvent(new Event("brandline:activity-log-updated"));
}
