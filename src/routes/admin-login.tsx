import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { LockKeyhole, ShieldCheck, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState, type FormEvent } from "react";
import { loginAdmin } from "@/lib/auth.functions";

export const Route = createFileRoute("/admin-login")({
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await loginAdmin({ data: { email, password } });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      await navigate({ to: "/admin" });
    } catch {
      setError("Unable to sign in right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors mb-10">
          <span className="grid size-9 place-items-center rounded-xl bg-white text-black font-black">B</span>
          <span className="font-semibold">BrandlineTech</span>
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/30">
          <div className="mb-8">
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-[#C9952E]/10 text-[#C9952E] border border-[#C9952E]/20">
              <ShieldCheck size={22} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Sign In</h1>
            <p className="mt-2 text-sm text-white/50">Secure access to your Brandline website management panel.</p>
          </div>

          <form onSubmit={submit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">Admin email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 outline-none transition focus:border-[#C9952E]/70 focus:ring-2 focus:ring-[#C9952E]/10"
                placeholder="admin@brandlinetech.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-white/70">Password</span>
              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={17} />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-white/10 bg-black/30 pl-11 pr-12 py-3.5 outline-none transition focus:border-[#C9952E]/70 focus:ring-2 focus:ring-[#C9952E]/10"
                  placeholder="Enter your password"
                />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white/40 hover:text-white">
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>

            {error && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</p>}

            <button disabled={loading} className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 font-semibold text-black transition hover:bg-[#C9952E] disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Signing in…" : "Sign in to Admin"}
              {!loading && <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
