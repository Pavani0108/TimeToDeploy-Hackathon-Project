import { Link } from "react-router-dom";
import { Zap, Sun, Moon } from "lucide-react";
import Button from "../ui/Button";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
<nav
  className="
    fixed top-0 left-0 w-full z-50
    bg-white dark:bg-[#050816]
    backdrop-blur-xl
    border-b border-black/10 dark:border-white/10
    transition-colors duration-300
  "
>

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="
            flex items-center gap-2
            text-lg md:text-xl
            font-semibold
            text-gray-900 dark:text-white
          "
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>

          <span className="tracking-wide">TimeToDeploy</span>
        </Link>

        {/* CENTER LINKS */}
        <div
          className="
            hidden md:flex items-center gap-12
            text-md
            text-gray-600 dark:text-gray-300
          "
        >
          <a href="#features" className="hover:text-black dark:hover:text-white transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-black dark:hover:text-white transition">
            How It Works
          </a>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-lg
              text-gray-700 dark:text-white
              hover:bg-black/10 dark:hover:bg-white/10
              transition
            "
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* SIGN IN */}
          <Link to="/login">
            <Button
              variant="ghost"
              className="
                px-5 h-10
                text-md
                text-gray-800 dark:text-white
                hover:bg-black/5 dark:hover:bg-white/10
              "
            >
              Sign In
            </Button>
          </Link>

          {/* GET STARTED */}
          <Link to="/signup">
            <Button
              className="
                gradient-bg
                px-6 h-10
                text-md
                rounded-lg
                shadow-md
                hover:shadow-lg
                hover:scale-[1.03]
                transition
              "
            >
              Get Started
            </Button>
          </Link>

        </div>
      </div>
    </nav>
  );
}
