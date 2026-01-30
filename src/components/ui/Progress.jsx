export default function Progress({ value = 0 }) {
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-purple-500 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
