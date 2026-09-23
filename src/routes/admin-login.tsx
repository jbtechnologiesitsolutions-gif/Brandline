import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/admin-login")({
  component: AdminLoginPage,
});

const ADMIN_EMAIL = "brandline@gmail.com";
const STORAGE_KEY = "brandline_admin_email";

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    if (normalizedEmail !== ADMIN_EMAIL) {
      setError("Please enter the approved admin email.");
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, normalizedEmail);
    navigate({ to: "/admin" });
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-white font-black text-black">
            B
          </span>
          <span className="font-semibold">BrandlineTech</span>
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/30">
          <div className="mb-8">
            <div className="mb-5 grid size-12 place-items-center rounded-2xl border border-[#C9952E]/20 bg-[#C9952E]/10 text-[#C9952E]">
              <ShieldCheck size={22} />
            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              Admin Sign In
            </h1>

            <p className="mt-2 text-sm text-white/50">
              Enter the approved admin email to open the BrandlineTech dashboard.
            </p>
          </div>

          <form onSubmit={submit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">
                Admin email
              </span>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />

                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 outline-none transition focus:border-[#C9952E]/70 focus:ring-2 focus:ring-[#C9952E]/10"
                  placeholder="brandline@gmail.com"
                />
              </div>
            </label>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200"
              >
                {error}
              </p>
            )}

            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 font-semibold text-black transition hover:bg-[#C9952E]">
              Continue to Admin
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
