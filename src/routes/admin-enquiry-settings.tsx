import { createFileRoute } from "@tanstack/react-router";
import { EnquirySettingsPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-enquiry-settings")({ component: EnquirySettingsPage });
