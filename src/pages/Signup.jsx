import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Eye, EyeOff, Mail, Lock, User, Building } from "lucide-react";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import ThemeToggle from "../components/common/ThemeToggle";
import { useToast } from "../components/ui/use-toast";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to TimeToDeploy."
      });
const username = getNameFromEmail(formData.email);

localStorage.setItem(
  "user",
  JSON.stringify({
    name: username,
    email: formData.email
  })
);

navigate("/dashboard");
    }, 1200);
  }

  function getNameFromEmail(email) {
  return email.split("@")[0];
}

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#05060f]">

      {/* ================= LEFT BRAND PANEL ================= */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden items-center justify-center">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500" />

        <div className="absolute top-10 right-10 w-72 h-72 bg-white/20 blur-3xl rounded-full" />
        <div className="absolute bottom-16 left-10 w-96 h-96 bg-white/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center text-white max-w-lg px-12"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Zap className="w-10 h-10" />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Start Your Journey
          </h2>

          <p className="text-lg text-white/90">
            Join hundreds of companies using AI to predict deployment timelines
            and optimize resource planning.
          </p>
        </motion.div>
      </div>

      {/* ================= RIGHT FORM PANEL ================= */}
      <div className="flex-1 relative flex items-center justify-center px-6 sm:px-10">

        {/* Light & Dark Background */}
        <div className="
          absolute inset-0 -z-10
          bg-gradient-to-br
          from-gray-50 via-purple-50 to-white
          dark:from-[#05060f] dark:to-[#0b0f2a]
        " />

        {/* Theme Toggle */}
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            w-full max-w-md
            bg-white/80 dark:bg-white/5
            backdrop-blur-xl
            border border-gray-200 dark:border-white/10
            rounded-2xl
            p-8
            shadow-xl
          "
        >

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              TimeToDeploy
            </span>
          </Link>

          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create an account
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Start your free trial. No credit card required.
          </p>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <Label>Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Company</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    name="company"
                    placeholder="Acme Inc"
                    value={formData.company}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

            </div>

            {/* Email */}
            <div>
              <Label>Work Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label>Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 pr-10"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="
                w-full h-12
                gradient-bg
                rounded-lg
                text-white font-medium
                shadow-lg
                hover:scale-[1.02]
                transition
              "
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>

          </form>

          {/* Terms */}
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
            By creating an account, you agree to our{" "}
            <span className="text-purple-500 hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-purple-500 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>

          {/* Sign In */}
          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 font-medium hover:underline">
              Sign in
            </Link>
          </p>

        </motion.div>
      </div>
    </div>
  );
}
    