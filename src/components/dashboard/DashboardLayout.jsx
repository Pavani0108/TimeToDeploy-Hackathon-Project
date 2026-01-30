import { useState, useEffect, useRef  } from "react";
import { useNavigate } from "react-router-dom";

import { Search, ChevronDown, Settings, LogOut, Zap, User  } from
 "lucide-react";
import Input from "../ui/Input";
import ThemeToggle from "../common/ThemeToggle";
/* ---------------- COMPONENT ---------------- */

export default function DashboardLayout({ children }) {
const navigate = useNavigate();
const [user, setUser] = useState(null);

  const [userOpen, setUserOpen] = useState(false);
const dropdownRef = useRef(null);

useEffect(() => {
  const stored = localStorage.getItem("user");
  if (stored) {
    setUser(JSON.parse(stored));
  }
}, []);

useEffect(() => {
  const handler = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setUserOpen(false);
    }
  };

  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, []);

function handleLogout() {
  localStorage.removeItem("user");
  navigate("/");
}


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#070b18] flex flex-col">

      {/* Topbar */}
<header
  className="
    sticky top-0 z-30 h-20

    backdrop-blur-md
    bg-white/80 dark:bg-[#050814]/95
    border-b border-gray-200 dark:border-white/10
  "
>
  <div className="flex items-center justify-between h-full px-4 md:px-6">

    {/* LEFT SIDE */}
    <div className="flex items-center gap-4">

      {/* LOGO */}
      <div className="flex items-center gap-5">
        <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <span className="font-bold text-lg">TimeToDeploy</span>
      </div>
    </div>

    {/* RIGHT SIDE */}
<div className="flex items-center gap-4 relative" ref={dropdownRef}>

      <ThemeToggle />

      {/* USER */}
      <button
        onClick={() => setUserOpen((prev) => !prev)}
        className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
      >
<div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">
  <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
</div>
        <span className="text-md font-medium">
          {user?.name || "User"}
        </span>

        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {/* DROPDOWN */}
      {userOpen && (
        <div
          className="
            absolute right-0 top-12
            w-56
            rounded-lg
            border border-gray-200 dark:border-white/10
            bg-white dark:bg-[#0b1022]
            shadow-xl
            z-50
          "
        >
          <div className="px-3 py-2 text-sm font-medium">
            My Account
          </div>

          <div className="border-t border-gray-200 dark:border-white/10" />

          <div className="border-t border-gray-200 dark:border-white/10" />

<button
  onClick={handleLogout}
  className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
>
  <LogOut className="w-4 h-4" />
  Sign out
</button>

        </div>
      )}

    </div>

  </div>
</header>


      {/* Page */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
