export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  const base =
    "px-4 py-2 rounded-md font-medium transition";

const styles = {
  primary:
    "bg-primary text-white hover:bg-blue-700",

  secondary:
    "bg-secondary text-white hover:bg-purple-700",

  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white"
};

  return (
    <button
      className={`${base} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
