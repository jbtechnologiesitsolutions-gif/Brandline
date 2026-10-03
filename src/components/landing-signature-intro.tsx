import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const INTRO_KEY = "brandline_home_intro_seen";

export function LandingSignatureIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    try {
      if (window.sessionStorage.getItem(INTRO_KEY)) return;
      window.sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // If session storage is unavailable, show the intro once for this mount.
    }

    setVisible(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, 3200);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-[#111111] px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.025 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(235,23,93,.18), transparent 34%), radial-gradient(circle at 30% 70%, rgba(204,82,122,.08), transparent 30%)",
            }}
          />

          <div className="relative w-full max-w-5xl text-center">
            <motion.p
              className="mb-5 text-[10px] font-bold uppercase tracking-[.34em] text-white/35 sm:text-xs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
            >
              Welcome to
            </motion.p>

            <div className="relative mx-auto inline-block max-w-full px-2 pb-5">
              <motion.div
                className="overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.3, duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
              >
                <div
                  className="whitespace-nowrap text-[clamp(3.1rem,10vw,8.5rem)] leading-none text-white"
                  style={{
                    fontFamily:
                      '"Segoe Script", "Brush Script MT", "Snell Roundhand", cursive',
                    fontWeight: 600,
                    letterSpacing: "-0.055em",
                  }}
                >
                  Brandline<span className="text-[#EB175D]">Tech</span>
                </div>
              </motion.div>

              <svg
                viewBox="0 0 900 80"
                className="absolute -bottom-2 left-1/2 h-12 w-[105%] -translate-x-1/2 overflow-visible sm:h-16"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M28 36 C165 62 310 20 455 36 C590 50 720 60 872 22"
                  stroke="#EB175D"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.85, duration: 1.35, ease: "easeInOut" }}
                />
                <motion.path
                  d="M700 44 C770 74 836 70 888 38"
                  stroke="rgba(255,255,255,.55)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.35, duration: 0.8, ease: "easeOut" }}
                />
              </svg>
            </div>

            <motion.p
              className="mx-auto mt-8 max-w-xl text-xs uppercase tracking-[.2em] text-white/35 sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Empowering Your Brand&apos;s Digital Journey
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[#EB175D]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.75, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
