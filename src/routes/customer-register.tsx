import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import CustomerAuthCard, { AuthField } from "@/components/customer-auth-card";

export const Route = createFileRoute("/customer-register")({ component: CustomerRegisterPage });

function CustomerRegisterPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("Registration UI is ready. Account creation will be enabled when the BrandlineTech database/API connection is activated.");
  }

  return (
    <CustomerAuthCard mode="register" onSubmit={submit} error={error} success={success}>
      <div className="grid gap-4 sm:grid-cols-2">
        <AuthField name="name" type="text" icon="user" placeholder="Full name" autoComplete="name" required />
        <AuthField name="phone" type="tel" icon="user" placeholder="Mobile number" autoComplete="tel" required />
      </div>
      <AuthField name="email" type="email" icon="mail" placeholder="Email address" autoComplete="email" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <AuthField name="password" type="password" icon="lock" placeholder="Create password" autoComplete="new-password" required minLength={8} />
        <AuthField name="confirmPassword" type="password" icon="lock" placeholder="Confirm password" autoComplete="new-password" required minLength={8} />
      </div>
      <label className="flex items-start gap-2 text-xs leading-5 text-[#666163]">
        <input type="checkbox" required className="mt-1 accent-[#EB175D]" />
        <span>I agree to the Privacy Policy and Terms & Conditions.</span>
      </label>
    </CustomerAuthCard>
  );
}
