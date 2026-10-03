import { createFileRoute } from "@tanstack/react-router";
import { RolesPermissionsPage } from "@/components/admin-management-pages";
export const Route = createFileRoute("/admin-roles-permissions")({ component: RolesPermissionsPage });
