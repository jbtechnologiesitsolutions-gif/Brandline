import { createFileRoute } from "@tanstack/react-router";
import { CustomerManagementPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-customers")({ component: CustomerManagementPage });
