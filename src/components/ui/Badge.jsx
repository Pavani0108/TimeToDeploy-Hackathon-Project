export default function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  const variants = {
    default:
      "bg-purple-600 text-white hover:bg-purple-700",

    secondary:
      "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white",

    destructive:
      "bg-red-600 text-white hover:bg-red-700",

    outline:
      "border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
  };

  return (
    <div
      className={`
        inline-flex items-center
        rounded-full
        px-2.5 py-0.5
        text-xs font-semibold
        transition-colors
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
