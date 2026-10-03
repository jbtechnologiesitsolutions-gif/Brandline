import { createFileRoute } from "@tanstack/react-router";
import { FaqManagementPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-faq")({ component: FaqManagementPage });
