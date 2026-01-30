import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Eye, EyeOff, Mail, Lock } from "lucide-react";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import ThemeToggle from "../components/common/ThemeToggle";
import { useToast } from "../components/ui/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

function handleSubmit(e) {
  e.preventDefault();
  setIsLoading(true);

  const username = getNameFromEmail(email);

  localStorage.setItem(
    "user",
    JSON.stringify({
      name: username,
      email
    })
  );

  setTimeout(() => {
    setIsLoading(false);
    navigate("/dashboard");
  }, 1500);
}

  function getNameFromEmail(email) {
  return email.split("@")[0];
}


  return (
    <div className="min-h-screen flex">

      {/* ================= LEFT PANEL (FORM) ================= */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 relative">

        {/* Background */}
        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-br
            from-gray-50 via-purple-50 to-white
            dark:from-[#05060f] dark:to-[#0b0f2a]
          "
        />

        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            max-w-md w-full mx-auto
            bg-white/80 dark:bg-white/5
            backdrop-blur-xl
            border border-gray-200 dark:border-white/10
            rounded-2xl
            p-8
            shadow-xl
          "
        >

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900 dark:text-white">
              TimeToDeploy
            </span>
          </Link>

          {/* Header */}
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Welcome back
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sign in to your account to continue
          </p>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <Label>Password</Label>
               
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-12 gradient-bg"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

          </form>

          {/* Signup */}
          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>

        </motion.div>
      </div>

      {/* ================= RIGHT VISUAL PANEL ================= */}
      <div className="hidden lg:flex flex-1 gradient-bg items-center justify-center p-16 relative overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center text-white max-w-lg"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
            <Zap className="w-10 h-10" />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Predict with Precision
          </h2>

          <p className="text-xl text-white/80">
            AI-powered deployment timeline predictions to optimize your
            resource planning and deliver projects on time.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
