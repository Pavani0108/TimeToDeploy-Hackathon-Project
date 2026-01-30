import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Clock,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import NewPredictionForm from "../components/dashboard/NewPredictionForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import {Dialog} from "../components/ui/Dialog";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line
} from "recharts";

/* ---------------- COMPONENT ---------------- */

export default function Dashboard() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  /* ---------------- LOAD LATEST PREDICTION ---------------- */

  useEffect(() => {
    const stored = localStorage.getItem("latestPrediction");
    if (stored) {
      setPredictionResult(JSON.parse(stored));
    }
  }, []);

  /* ---------------- STATS ---------------- */

  const stats = predictionResult
    ? [
        {
          name: "Predicted Days",
          value: Math.round(predictionResult.predicted_days),
          icon: Clock
        },
        {
          name: "Prediction Percentage",
          value: `${Math.round(
            predictionResult.prediction_confidence_percent
          )}%`,
          icon: TrendingUp
        },
        {
          name: "Skill Match",
          value: `${predictionResult.skill_match_percent}%`,
          icon: ShieldCheck
        },
        {
          name: "Deployment Risk",
          value: predictionResult.deployment_risk.category,
          icon: AlertTriangle
        }
      ]
    : [];

  /* ---------------- CHART DATA ---------------- */

  const breakdownData = predictionResult
    ? Object.entries(
        predictionResult.breakdown_factors
      ).map(([name, value]) => ({ name, value }))
    : [];

  const forecastData = predictionResult
    ? predictionResult.future_forecast_trend.map(item => ({
        date: item.forecast_date,
        days: Math.round(item.expected_avg_deployment_days)
      }))
    : [];

  return (
    <DashboardLayout>

<div className="space-y-5">

{/* ================= HEADER ================= */}

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

  <div>
<h1 className="text-xl font-bold">Dashboard</h1>

<p className="text-sm text-gray-500">
  Monitor deployment predictions
</p>
  </div>

  <Button
  className="gradient-bg px-4 h-9 text-sm flex items-center gap-2"
    onClick={() => setIsDialogOpen(true)}
  >
    <Plus className="w-4 h-4" />
    New Prediction
  </Button>

  <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
    <NewPredictionForm onClose={() => setIsDialogOpen(false)} />
  </Dialog>

</div>

{/* ================= STATS ================= */}

{predictionResult && (

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

{stats.map((stat, i) => (

<motion.div
  key={stat.name}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.05 }}
>

<Card>
<CardContent className="p-5 mt-3">

<div className="flex items-center justify-between">
  <stat.icon className="w-6 h-6 text-purple-500" />
</div>

<p className="text-xl font-bold mt-3">
  {stat.value}
</p>

<p className="text-sm text-gray-500">
  {stat.name}
</p>

</CardContent>
</Card>

</motion.div>

))}

</div>

)}

{/* ================= SUMMARY ================= */}

{predictionResult && (

<Card className="overflow-hidden">

<div className="gradient-bg p-4 text-white">

<p className="text-sm">Predicted Deployment</p>

<div className="flex items-end gap-2 ">
  <span className="text-3xl font-bold">
    {Math.round(predictionResult.predicted_days)}
  </span>
  <span>days</span>
</div>

<p className="text-sm mt-1 font-semibold">
  Expected Date:
  {" "}
  {predictionResult.expected_candidate_deployment_date}
</p>

</div>

<CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-5">

<div>
  <p className="text-xs text-gray-500">Risk</p>
  <p>{predictionResult.deployment_risk.category}</p>
</div>

<div>
  <p className="text-xs text-gray-500">Client Impact</p>
  <p>{predictionResult.deployment_risk.client_impact}</p>
</div>

<div>
  <p className="text-xs text-gray-500">Action</p>
  <p>{predictionResult.deployment_risk.action}</p>
</div>

</CardContent>

</Card>

)}

{/* ================= BREAKDOWN ================= */}

{predictionResult && (

<Card>

<CardHeader>
<CardTitle className="text-sm flex items-center gap-2 font-semibold
          bg-gradient-to-r from-purple-600 to-pink-500
          bg-clip-text text-transparent">Timeline Breakdown</CardTitle>
</CardHeader>

<CardContent className="h-64">

<ResponsiveContainer width="100%" height="100%">

<BarChart
  data={breakdownData}
  layout="vertical"
>

<CartesianGrid strokeDasharray="3 3" />
<XAxis type="number" fontSize={14} />
<YAxis type="category" dataKey="name" width={160} fontSize={14} />
<Tooltip />

<Bar dataKey="value" fill="#8b5cf6" />

</BarChart>

</ResponsiveContainer>

</CardContent>

</Card>

)}

{/* ================= FORECAST ================= */}

{predictionResult && (

<Card>

<CardHeader>
<CardTitle className="text-sm flex items-center gap-2 font-semibold
          bg-gradient-to-r from-purple-600 to-pink-500
          bg-clip-text text-transparent">Future Deployment Trend</CardTitle>
</CardHeader>

<CardContent className="h-64">

<ResponsiveContainer width="100%" height="100%">

<LineChart data={forecastData}>

<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="date" />
<YAxis />
<Tooltip />

<Line
  type="monotone"
  dataKey="days"
  stroke="#8b5cf6"
  strokeWidth={4}
/>

</LineChart>

</ResponsiveContainer>

</CardContent>

</Card>

)}

{/* ================= MISSING SKILLS ================= */}

{predictionResult && (

<Card>

<CardHeader>
<CardTitle className="text-sm flex items-center gap-2 font-semibold
          bg-gradient-to-r from-purple-600 to-pink-500
          bg-clip-text text-transparent">Missing Skills</CardTitle>
</CardHeader>

<CardContent>

{predictionResult.missing_skills.length === 0 ? (

<p className="text-green-500">
  No missing skills 🎉
</p>

) : (

<div className="flex gap-2 flex-wrap" >

{predictionResult.missing_skills.map(skill => (

<Badge
  key={skill}
  className="bg-red-500 text-red-500 pt-2 pb-2"
>
  {skill}
</Badge>

))}

</div>

)}

</CardContent>

</Card>

)}

{/* ================= AI RECOMMENDATION ================= */}

{predictionResult && (

<Card>

<CardHeader className="pb-2">
  <CardTitle className="text-sm flex items-center gap-2 font-semibold
          bg-gradient-to-r from-purple-600 to-pink-500
          bg-clip-text text-transparent">
    <Sparkles className="w-4 h-4 text-purple-500" />
    AI Staffing Recommendation
  </CardTitle> 
</CardHeader>

<CardContent className="p-4">

<div className="
  bg-purple-500/5
  border border-purple-500/20
  rounded-lg
  p-4
">

<p className="
  whitespace-pre-line
  text-sm
  leading-relaxed
  text-gray-700
  dark:text-gray-300
">
  {predictionResult.ai_staffing_recommendation}
</p>

</div>

</CardContent>

</Card>

)}


</div>

</DashboardLayout>
);
}
