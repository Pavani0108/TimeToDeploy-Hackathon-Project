export default function Slider({ value, onValueChange, min = 0, max = 100, step = 1 }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onValueChange([Number(e.target.value)])}
      className="w-full accent-purple-500"
    />
  );
}
