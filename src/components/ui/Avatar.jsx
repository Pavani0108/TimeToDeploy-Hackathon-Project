export function Avatar({ className = "", children }) {
  return (
    <div
      className={`relative h-10 w-10 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10 ${className}`}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, className = "" }) {
  return (
    <img
      src={src}
      alt=""
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

export function AvatarFallback({ children, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full bg-gray-300 dark:bg-white/20 ${className}`}
    >
      {children}
    </div>
  );
}
