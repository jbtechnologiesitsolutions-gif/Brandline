import { createFileRoute } from "@tanstack/react-router";
import { AnalyticsDashboardPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-analytics")({ component: AnalyticsDashboardPage });
