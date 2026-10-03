import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import CustomerAuthCard, { AuthField } from "@/components/customer-auth-card";

export const Route = createFileRoute("/customer-login")({ component: CustomerLoginPage });

function CustomerLoginPage() {
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("Customer authentication will be activated when the BrandlineTech database/API connection is enabled.");
  }

  return (
    <CustomerAuthCard mode="login" onSubmit={submit} error={error}>
      <AuthField name="email" type="email" icon="mail" placeholder="Email address" autoComplete="email" required />
      <AuthField name="password" type="password" icon="lock" placeholder="Password" autoComplete="current-password" required />
      <div className="flex items-center justify-between text-xs text-[#666163]">
        <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#EB175D]" /> Remember me</label>
        <button type="button" className="font-semibold text-[#EB175D]">Forgot password?</button>
      </div>
    </CustomerAuthCard>
  );
}
