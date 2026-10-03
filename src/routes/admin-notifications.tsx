import { createFileRoute } from "@tanstack/react-router";
import { NotificationsPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-notifications")({ component: NotificationsPage });
