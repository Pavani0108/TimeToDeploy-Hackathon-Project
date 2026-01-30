import { X } from "lucide-react";

export function Dialog({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Box */}
      <div
        className="
          relative
          w-[95%] max-w-3xl
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-white dark:bg-[#0b0f2a]
          p-8
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            text-gray-500 hover:text-gray-900
            dark:text-gray-400 dark:hover:text-white
          "
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}

/* Simple wrappers */

export function DialogHeader({ children }) {
  return <div className="mb-6">{children}</div>;
}

export function DialogTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}

export function DialogDescription({ children }) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
      {children}
    </p>
  );
}
