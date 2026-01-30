import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, TrendingUp, Users, Sparkles } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-28 pb-32">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

{/* Overlay */}
<div
  className="
    absolute inset-0
    bg-gradient-to-b
    from-white/90 via-white/80 to-white
    dark:from-black/70 dark:via-black/60 dark:to-[#070b18]
  "
/>

{/* Blur */}
<div className="absolute inset-0 backdrop-blur-sm" />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
className="
  inline-flex items-center gap-2
  px-5 py-2 rounded-full mb-10

  bg-white/80 dark:bg-white/10
  backdrop-blur-md

  text-gray-800 dark:text-white
  border border-purple-200 dark:border-white/20

  shadow-sm dark:shadow-[0_0_25px_rgba(168,85,247,0.25)]
"

          >
            <Sparkles className="w-4 h-4 text-primary" />
            AI-Powered Deployment Intelligence
          </motion.div>

          {/* Heading */}
          <h1
className="
  text-2xl sm:text-4xl md:text-5xl lg:text-6xl
  font-extrabold
  text-gray-900 dark:text-white
  leading-tight tracking-tight

  drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]
  dark:drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)]
"

          >
            Predict Deployment{" "}
            <span className="gradient-text">Timelines</span>{" "}
            With{" "}
            <span className="gradient-text">Precision</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leverage AI-driven time series forecasting to accurately predict
            candidate deployment timelines. Factor in skill alignment,
            onboarding TAT, visa readiness and more.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">

            <Link to="/signup">
              <Button
  className="
    gradient-bg
    px-12 py-4
    text-base
    rounded-xl
    shadow-xl
    hover:scale-105 transition
    flex items-center gap-2
  "
>

                See How It Works
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

          </div>

          {/* ================= STATS ================= */}
          <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-8">

            {[
              { icon: Clock, label: "Faster Deployments", value: "40%" },
              { icon: TrendingUp, label: "Prediction Accuracy", value: "94%" },
              { icon: Users, label: "Resources Optimized", value: "10K+" },
            ].map((s) => (
              <div
                key={s.label}
                className="
                  bg-white/70 dark:bg-white/5
backdrop-blur-xl
border border-black/10 dark:border-white/10
 rounded-2xl p-8 text-center
                  hover:scale-105 transition
                "
              >
                <s.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold gradient-text">
                  {s.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {s.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#070b18]" />

    </section>
  );
}
