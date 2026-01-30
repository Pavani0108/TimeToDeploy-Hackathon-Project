import { motion } from "framer-motion";
import { Database, Cpu, LineChart, Rocket } from "lucide-react";

const steps = [
  {
    icon: Database,
    step: "01",
    title: "Data Integration",
    desc: "Connect your HR systems, project tools, and historical deployment data for comprehensive analysis.",
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    desc: "Our ML models analyze skill alignment, onboarding times, visa processing, and project requirements.",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-cyan-500/30",
    iconColor: "text-cyan-400"
  },
  {
    icon: LineChart,
    step: "03",
    title: "Timeline Prediction",
    desc: "Get accurate deployment timeline predictions with detailed breakdowns of contributing factors.",
    color: "from-emerald-500 to-green-500",
    glow: "shadow-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    icon: Rocket,
    step: "04",
    title: "Optimize & Deploy",
    desc: "Use insights to adjust staffing plans, set realistic expectations, and optimize deployments.",
    color: "from-orange-500 to-pink-500",
    glow: "shadow-orange-500/30",
    iconColor: "text-orange-400"
  }
];

export default function HowItWorks() {
  return (
<section
  id="how-it-works"
  className="
    py-28 relative overflow-hidden
    bg-gradient-to-b
    from-white via-purple-50 to-white
    dark:from-[#050814] dark:via-[#0a0f2a] dark:to-[#050814]
  "
>


      {/* Badge */}
      <div className="flex justify-center mb-5">
        <span
          className="
            px-5 py-1.5 rounded-full text-sm font-medium
            bg-gradient-to-r from-purple-500/20 to-pink-500/20
            text-purple-500 dark:text-purple-400
            border border-purple-500/30
            backdrop-blur
          "
        >
          How It Works
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-gray-900 dark:text-white">
        How <span className="gradient-text">TimeToDeploy</span> Works
      </h2>

      <p className="text-gray-600 dark:text-gray-400 text-center mb-16">
        From data to deployment in four simple steps
      </p>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="
  relative group
  rounded-2xl p-7
  bg-white/85 dark:bg-white/5
  backdrop-blur-xl
  border border-purple-100 dark:border-white/10
  hover:border-purple-400/50
  transition-all duration-300
"

          >

            {/* Step Number */}
            <div
              className={`
                absolute -top-4 left-6
                w-9 h-9 rounded-full
                bg-gradient-to-r ${s.color}
                flex items-center justify-center
                text-white text-sm font-bold
                shadow-lg ${s.glow}
              `}
            >
              {s.step}
            </div>

            {/* Icon */}
            <div
              className={`
                w-14 h-14 rounded-xl
                bg-white/70 dark:bg-white/5
                flex items-center justify-center
                mb-6
                group-hover:scale-110
                transition
                shadow-lg ${s.glow}
              `}
            >
              <s.icon className={`w-7 h-7 ${s.iconColor}`} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-md leading-relaxed">
              {s.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
