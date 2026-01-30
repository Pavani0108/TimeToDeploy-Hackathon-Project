export function Card({ className = "", children }) {
  return (
    <div className={`rounded-lg border bg-white dark:bg-[#0b0f2a] shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({ className = "", children }) {
  return <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>;
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>;
}
