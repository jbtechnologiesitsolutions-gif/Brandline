import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, LockKeyhole, Mail, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import type { FormEvent, ReactNode } from "react";

export type CustomerAuthMode = "login" | "register";

type CustomerAuthCardProps = {
  mode: CustomerAuthMode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  error?: string;
  success?: string;
  children: ReactNode;
};

export default function CustomerAuthCard({ mode, onSubmit, error, success, children }: CustomerAuthCardProps) {
  const isLogin = mode === "login";

  return (
    <main className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#F6F1F3] px-5 py-12 sm:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 45, -10, 0], y: [0, -25, 18, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-16 size-80 rounded-full bg-[#EB175D]/12 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -35, 20, 0], y: [0, 32, -16, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 bottom-10 size-96 rounded-full bg-[#CC527A]/14 blur-3xl"
        />
      </div>

      <div className="section-shell relative grid min-h-[640px] overflow-hidden rounded-[2rem] border border-[#AAA7A7]/25 bg-white/65 shadow-[0_30px_100px_-45px_rgba(54,54,54,.45)] backdrop-blur-xl lg:grid-cols-[.9fr_1.1fr]">
        <motion.section
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative hidden overflow-hidden bg-[#363636] p-10 text-white lg:flex lg:flex-col lg:justify-between"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(235,23,93,.34),transparent_30%),radial-gradient(circle_at_82%_78%,rgba(204,82,122,.24),transparent_34%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white/75">
              <Sparkles className="size-3.5 text-[#EB175D]" /> Customer portal
            </span>
            <h1 className="mt-8 max-w-md font-display text-5xl font-extrabold leading-[1.02] tracking-tight">
              One place for your BrandlineTech journey.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/58">
              Sign in to keep your enquiries, project communication and service requests organized as the customer portal expands.
            </p>
          </div>

          <div className="relative grid gap-3">
            {["Secure customer access", "Track service enquiries", "Ready for your upcoming customer dashboard"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.08 }}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[.04] px-4 py-3.5 text-sm text-white/75"
              >
                <CheckCircle2 className="size-4 text-[#EB175D]" /> {item}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="flex items-center justify-center p-6 sm:p-10 lg:p-14"
        >
          <div className="w-full max-w-xl">
            <div className="mb-8 flex items-center justify-between gap-4">
              <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-[#363636]">
                Brandline<span className="text-[#EB175D]">Tech</span>
              </Link>
              <span className="grid size-11 place-items-center rounded-2xl bg-[#EB175D]/9 text-[#EB175D]">
                {isLogin ? <LockKeyhole className="size-5" /> : <UserRound className="size-5" />}
              </span>
            </div>

            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB175D]">
              {isLogin ? "Welcome back" : "Create your account"}
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-[#363636]">
              {isLogin ? "Customer Login" : "Customer Registration"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#666163]">
              {isLogin
                ? "Access your BrandlineTech customer area using your registered email and password."
                : "Create your BrandlineTech customer profile to keep future service requests and communication in one place."}
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              {children}

              {error && <div className="rounded-xl border border-red-400/25 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
              {success && <div className="rounded-xl border border-emerald-500/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{success}</div>}

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#363636] px-5 py-4 text-sm font-bold text-white shadow-lg"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#EB175D] transition-all duration-300 ease-out group-hover:w-full" />
                <span className="relative z-10">{isLogin ? "Sign in to customer portal" : "Create customer account"}</span>
                <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#666163]">
              <span>{isLogin ? "New to BrandlineTech?" : "Already registered?"}</span>
              <Link
                to={isLogin ? "/customer-register" : "/customer-login"}
                className="font-bold text-[#EB175D] transition-colors hover:text-[#CC527A]"
              >
                {isLogin ? "Create account" : "Sign in"}
              </Link>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 border-t border-[#AAA7A7]/20 pt-5 text-xs text-[#666163]">
              <ShieldCheck className="size-4 text-[#EB175D]" /> Customer and admin access remain separate.
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export function AuthField({ icon, ...props }: { icon?: "mail" | "lock" | "user" } & React.InputHTMLAttributes<HTMLInputElement>) {
  const Icon = icon === "mail" ? Mail : icon === "lock" ? LockKeyhole : UserRound;
  return (
    <label className="group relative block">
      <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#AAA7A7] transition-colors group-focus-within:text-[#EB175D]" />
      <input
        {...props}
        className={`w-full rounded-xl border border-[#AAA7A7]/30 bg-white/80 py-3.5 pl-11 pr-4 text-sm text-[#363636] outline-none transition focus:border-[#EB175D]/55 focus:ring-4 focus:ring-[#EB175D]/8 ${props.className ?? ""}`}
      />
    </label>
  );
}
