import { useState } from "react";

export function DropdownMenu({ children }) {
  return <div className="relative">{children}</div>;
}

export function DropdownMenuTrigger({ children }) {
  return children;
}

export function DropdownMenuContent({ children }) {
  return (
    <div
      className="
        absolute right-0 mt-2
        w-56
        bg-white dark:bg-[#0b0f2a]
        border rounded-lg shadow-lg
        z-50
      "
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        px-3 py-2 text-sm cursor-pointer
        hover:bg-gray-100 dark:hover:bg-white/10
        flex items-center gap-2
      "
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({ children }) {
  return (
    <div className="px-3 py-2 text-xs font-semibold text-gray-500">
      {children}
    </div>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-gray-200 dark:bg-white/10" />;
}
