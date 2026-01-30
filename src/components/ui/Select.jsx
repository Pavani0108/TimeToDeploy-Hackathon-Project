import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export function Select({ value, onValueChange, children }) {
  return (
    <div>{children}</div>
  );
}

export function SelectTrigger({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        h-10 w-full flex items-center justify-between
        border rounded-md px-3 text-sm
        bg-white dark:bg-[#0b0f2a]
      "
    >
      {children}
      <ChevronDown className="w-4 h-4 opacity-60" />
    </button>
  );
}

export function SelectValue({ placeholder, value }) {
  return <span>{value || placeholder}</span>;
}

export function SelectContent({ open, children }) {
  if (!open) return null;

  return (
    <div
      className="
        mt-1 border rounded-md
        bg-white dark:bg-[#0b0f2a]
        shadow-lg
      "
    >
      {children}
    </div>
  );
}

export function SelectItem({ value, onSelect, children }) {
  return (
    <div
      onClick={() => onSelect(value)}
      className="
        px-3 py-2 cursor-pointer text-sm
        hover:bg-gray-100 dark:hover:bg-white/10
        flex items-center justify-between
      "
    >
      {children}
      <Check className="w-4 h-4 opacity-50" />
    </div>
  );
}
