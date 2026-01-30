import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  MapPin,
  GraduationCap,
  Globe,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  TrendingUp
} from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/Select";
import Slider from "../ui/Slider";
import Textarea from "../ui/Textarea";
import {Card, CardContent} from "../ui/Card";
import Progress from "../ui/Progress";
import Badge from "../ui/Badge";
import { api } from "../../api/api";

export default function NewPredictionForm({ onClose }) {

  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const [result, setResult] = useState(null);

const [formData, setFormData] = useState({
  candidateName: "",
  currentRole: "",
  yearsExperience: "",
  candidateSkills: "",
  projectName: "",
  visaStatus: "",
  visaCountry: "",
  projectGoliveStatus: "",
  onboardingTat: "",
  requiredSkills: ""
});

  /* ---------------- GENERATE ---------------- */

async function handleGenerate() {
  try {
    setIsGenerating(true);

const payload = {
  candidate_skills: formData.candidateSkills
    .split(",")
    .map(s => s.trim()),

  required_skills: formData.requiredSkills
    .split(",")
    .map(s => s.trim()),

  onboarding_tat: Number(formData.onboardingTat),

  visa_status: formData.visaStatus,

  visa_country:
    formData.visaStatus === "Required"
      ? formData.visaCountry
      : "None",

  project_golive_status: formData.projectGoliveStatus
};


    const response = await api.post("/predict", payload);

    setResult(response.data);
    setStep(3);

  } catch (err) {
    console.error(err);
    alert("Prediction failed");
  } finally {
    setIsGenerating(false);
  }
}

  /* ================================================= */

  return (
    <div className="space-y-6">

      {/* ---------------- PROGRESS STEPS ---------------- */}

<div className="flex justify-center items-center gap-8 mb-10">

{[1,2,3].map((s) => (

<div key={s} className="flex items-center gap-3">

<div
  className={`w-9 h-9 rounded-full flex items-center justify-center
  text-sm font-semibold
  ${step >= s
    ? "gradient-bg text-white shadow-md"
    : "bg-gray-300 dark:bg-white/10 text-gray-500"}
`}
>
{s}
</div>

{s < 3 && (
<div className="w-12 h-[2px] bg-gray-300 dark:bg-white/10" />
)}

</div>

))}

</div>


      {/* ================================================= */}
      {/* STEP 1 */}
      {/* ================================================= */}

{step === 1 && (

<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  className="space-y-10"
>

{/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{/* Candidate Name */}
<div className="space-y-2">
  <Label className="text-sm">Candidate Name</Label>
  <div className="relative">
    <User className="input-icon" />
    <Input
      className="pl-11 h-12 text-base"
      placeholder="Enter candidate name"
  value={formData.candidateName}
  onChange={(e) =>
    setFormData({ ...formData, candidateName: e.target.value })
  }
    />
  </div>
</div>

{/* Current Role */}
<div className="space-y-2">
  <Label className="text-sm">Current Role</Label>
  <div className="relative">
    <Briefcase className="input-icon" />
    <Input
      className="pl-11 h-12 text-base"
      placeholder="Current job title"
  value={formData.currentRole}
  onChange={(e) =>
    setFormData({ ...formData, currentRole: e.target.value })
  }
    />
  </div>
</div>

{/* Target Role */}
{/* <div className="space-y-2">
  <Label className="text-sm">Target Role</Label>
<Input
      placeholder="Target Role"
    value={formData.targetRole}
  onChange={(e) =>
    setFormData({ ...formData, targetRole: e.target.value })
  }
  />
</div> */}

{/* Experience */}
<div className="space-y-2">
  <Label className="text-sm">Years of Experience</Label>
  <div className="relative">
    <GraduationCap className="input-icon" />
    <Input
      type="number"
      className="pl-11 h-12 text-base"
      placeholder="Years"
  value={formData.yearsExperience}
  onChange={(e) =>
    setFormData({ ...formData, yearsExperience: e.target.value })
  }
    />
  </div>
</div>

</div>

{/* SKILL */}
<div className="space-y-4">
{/* Candidate Skills */}
<Label>Candidate Skills</Label>
<Input
  placeholder="Python, AWS, Spark"
  value={formData.candidateSkills}
  onChange={(e) =>
    setFormData({ ...formData, candidateSkills: e.target.value })
  }
/>
</div>

{/* ACTION */}
<div className="flex justify-end pt-6">
  <Button
    className="gradient-bg px-10 h-12 text-base"
    onClick={() => setStep(2)}
  >
    Next Step
  </Button>
</div>

</motion.div>
)}

      {/* ================================================= */}
      {/* STEP 2 */}
      {/* ================================================= */}
{step === 2 && (

<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  className="space-y-10"
>

{/* FORM GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Project Name */}
  <div className="space-y-2">
    <Label>Project Name</Label>
    <Input
      value={formData.projectName}
      onChange={(e) =>
        setFormData({ ...formData, projectName: e.target.value })
      }
    />
  </div>

  {/* Visa Status */}
  <div className="space-y-2">
    <Label>Visa Status</Label>
    <select
className="
  w-full h-12 rounded-lg px-3
  bg-white text-gray-900
  border border-gray-300
  focus:outline-none focus:ring-2 focus:ring-purple-500
  dark:bg-[#0b1022] dark:text-white
  dark:border-white/10
"
      value={formData.visaStatus}
      onChange={(e) =>
        setFormData({ ...formData, visaStatus: e.target.value })
      }
    >
      <option>Not Required</option>
      <option>Required</option>
    </select>
  </div>

  {/* Visa Country */}
  {formData.visaStatus === "Required" && (
    <div className="space-y-2">
      <Label>Visa Country</Label>
      <select
className="
  w-full h-12 rounded-lg px-3
  bg-white text-gray-900
  border border-gray-300
  focus:outline-none focus:ring-2 focus:ring-purple-500
  dark:bg-[#0b1022] dark:text-white
  dark:border-white/10
"
        value={formData.visaCountry}
        onChange={(e) =>
          setFormData({ ...formData, visaCountry: e.target.value })
        }
      >
        <option>USA</option>
        <option>UK</option>
      </select>
    </div>
  )}

  {/* Onboarding TAT */}
  <div className="space-y-2">
    <Label>Onboarding TAT (days)</Label>
    <Input
      type="number"
      value={formData.onboardingTat}
      onChange={(e) =>
        setFormData({ ...formData, onboardingTat: e.target.value })
      }
    />
  </div>

  {/* Project Go-Live Status */}
  <div className="space-y-2">
    <Label>Project Go-Live Status</Label>
    <select
className="
  w-full h-12 rounded-lg px-3
  bg-white text-gray-900
  border border-gray-300
  focus:outline-none focus:ring-2 focus:ring-purple-500
  dark:bg-[#0b1022] dark:text-white
  dark:border-white/10
"
      value={formData.projectGoliveStatus}
      onChange={(e) =>
        setFormData({
          ...formData,
          projectGoliveStatus: e.target.value
        })
      }
    >
      <option value="">Select status</option>
      <option>Pipeline</option>
      <option>Planning Phase</option>
      <option>Go-Live Confirmed</option>
      <option>Go-Live Critical (&lt;30 days)</option>
      <option>Project Delayed</option>
    </select>
  </div>

  {/* Required Skills - FULL WIDTH */}
  <div className="space-y-2 md:col-span-2">
    <Label>Required Skills</Label>
    <Input
      placeholder="Python, AWS, Spark"
      value={formData.requiredSkills}
      onChange={(e) =>
        setFormData({ ...formData, requiredSkills: e.target.value })
      }
    />
  </div>

</div>

{/* ACTIONS */}
<div className="flex justify-between pt-6">

  <Button variant="outline" onClick={() => setStep(1)}>
    Back
  </Button>

  <Button
    className="gradient-bg px-10 h-12 text-base"
    disabled={isGenerating}
    onClick={handleGenerate}
  >
    {isGenerating ? "Analyzing..." : "Generate Prediction"}
  </Button>

</div>

</motion.div>
)}


{/* ================================================= */}
{/* STEP 3 */}
{/* ================================================= */}

{step === 3 && result && (

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  className="space-y-8"
>

{/* ================= RESULT SUMMARY ================= */}

<Card className="overflow-hidden border border-purple-500/30">

  {/* Header */}
  <div className="gradient-bg px-8 py-7 text-white">
    <p className="text-md opacity-90">AI Prediction Result</p>

    <div className="flex items-end gap-2 mt-2">
      <span className="text-5xl font-bold">
        {Math.round(result.predicted_days)}
      </span>
      <span className="text-xl mb-1">days</span>
    </div>

    <p className="text-sm opacity-80 mt-2">
      Estimated deployment timeline
    </p>
  </div>

  {/* Body */}
  <CardContent className="p-6 mt-6">

    {/* Confidence */}
    <div className="space-y-2">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Prediction Confidence
      </p>

      <div className="flex items-center gap-3">
        <Progress
          value={result.prediction_confidence_percent}
          className="h-3 flex-1"
        />

        <span className="font-semibold">
          {Math.round(result.prediction_confidence_percent)}%
        </span>
      </div>
    </div>

  </CardContent>

</Card>

{/* ================= BREAKDOWN ================= */}

<Card className="border border-border">

<CardContent className="p-6">

<h4 className="font-semibold mb-6 flex items-center gap-2 mt-5">
  <TrendingUp className="w-5 h-5 text-purple-500" />
  Timeline Breakdown
</h4>

<div className="space-y-4">

{result.breakdown_factors &&
 Object.entries(result.breakdown_factors).map(
   ([factor, days], index) => (

  <div
    key={index}
    className="flex items-center justify-between"
  >

    {/* Left */}
    <div className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
      <span>{factor}</span>
    </div>

    {/* Right */}
    <span className="font-semibold w-20 text-right">
      {Math.round(days)} days
    </span>

  </div>

))}

</div>

</CardContent>
</Card>

{/* ================= ACTIONS ================= */}

<div className="flex justify-end pt-4">

<Button
  className="gradient-bg px-8 h-11"
  onClick={() => {
    localStorage.setItem("latestPrediction", JSON.stringify(result));
    onClose();

    setTimeout(() => {
      window.location.reload();
    }, 150);
  }}
>
  Save & Continue
</Button>

</div>

</motion.div>
)}

    </div>
  );
}
