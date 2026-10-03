import { createFileRoute } from "@tanstack/react-router";
import { SystemSettingsPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-system-settings")({ component: SystemSettingsPage });
