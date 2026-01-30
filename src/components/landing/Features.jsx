import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  BarChart3,
  Users,
  Globe,
  Zap,
  TrendingUp,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description:
      "Advanced machine learning models trained on historical deployment data for accurate timeline forecasting.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "Skill Alignment Analysis",
    description:
      "Automatically assess skill gaps and estimate time required for training or upskilling.",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Globe,
    title: "Visa Processing Intelligence",
    description:
      "Track and predict visa approval timelines based on historical and real-time trends.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: BarChart3,
    title: "Onboarding TAT Tracking",
    description:
      "Monitor onboarding turnaround time with predictive insights.",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Resource Optimization",
    description:
      "Match candidates to projects using readiness scores and predictions.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Zap,
    title: "Real-time Alerts",
    description:
      "Get notified about potential delays before they impact delivery.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: TrendingUp,
    title: "Timeline Breakdown",
    description:
      "See factor-wise contribution to overall deployment timeline.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description:
      "Identify high-risk deployments early and take proactive action.",
    color: "from-yellow-500 to-orange-500"
  }
];

export default function Features() {
  return (
<section
  id="features"
  className="
    relative py-32
    bg-gradient-to-b
    from-purple-50 via-white to-pink-50
    dark:from-[#060913] dark:to-[#0b1024]
  "
>

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="
              px-5 py-1.5 rounded-full text-sm font-medium
              bg-gradient-to-r from-purple-500 to-pink-500
              text-white shadow-md shadow-purple-500/30
            "
          >
            Features
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl lg:text-6xl
            font-extrabold text-center
            text-gray-900 dark:text-white
          "
        >
          Powerful Features for{" "}
          <span className="gradient-text">Smarter Deployments</span>
        </h2>

        <p
          className="
            text-gray-600 dark:text-gray-400
            text-center max-w-3xl mx-auto mt-6 text-lg
          "
        >
          Everything you need to predict, plan, and optimize your resource
          deployment workflow.
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
className="
  relative rounded-3xl p-8
  bg-white/80 dark:bg-white/5
  backdrop-blur-xl
  border border-purple-100 dark:border-white/10
  hover:border-purple-400/60
  hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
  transition-all duration-300
"

            >
              {/* Icon */}
              <div
                className={`
                  w-14 h-14 rounded-2xl
                  bg-gradient-to-br ${f.color}
                  flex items-center justify-center
                  mb-6
                `}
              >
                <f.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
