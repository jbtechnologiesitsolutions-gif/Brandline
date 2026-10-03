import { createFileRoute } from "@tanstack/react-router";
import { SocialMediaPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-social-media")({ component: SocialMediaPage });
