import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, LockKeyhole, UserPlus } from "lucide-react";

export function CustomerPortalCard() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#2f2f2f]/90 p-6 text-white shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(235,23,93,.28),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(204,82,122,.22),transparent_28%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#F6A6C0]">Customer Portal</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Login or create your BrandlineTech customer account.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                A dedicated customer area for future enquiries, project communication, service updates and account access.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <motion.div whileHover={{ y: -5, rotate: -0.6 }} transition={{ type: "spring", stiffness: 320, damping: 24 }}>
                <Link
                  to="/customer-login"
                  className="group flex min-h-44 flex-col justify-between rounded-2xl border border-white/10 bg-white/[.07] p-5 transition hover:border-[#EB175D]/40 hover:bg-white/[.1]"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-[#EB175D] text-white shadow-lg shadow-[#EB175D]/20">
                    <LockKeyhole className="size-5" />
                  </span>
                  <div className="mt-8">
                    <h3 className="font-display text-xl font-extrabold">Customer Login</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white/58 transition group-hover:text-white">
                      Sign in <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -5, rotate: 0.6 }} transition={{ type: "spring", stiffness: 320, damping: 24 }}>
                <Link
                  to="/customer-register"
                  className="group flex min-h-44 flex-col justify-between rounded-2xl border border-white/10 bg-white p-5 text-[#363636] transition hover:border-[#EB175D]/35 hover:shadow-xl"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-[#EB175D]/10 text-[#EB175D]">
                    <UserPlus className="size-5" />
                  </span>
                  <div className="mt-8">
                    <h3 className="font-display text-xl font-extrabold">Create Account</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#666163] transition group-hover:text-[#EB175D]">
                      Register now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
