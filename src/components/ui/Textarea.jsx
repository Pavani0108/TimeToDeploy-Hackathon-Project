export default function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`
        min-h-[80px] w-full rounded-md
        border px-3 py-2 text-sm
        bg-white dark:bg-[#0b0f2a]
        ${className}
      `}
      {...props}
    />
  );
}
