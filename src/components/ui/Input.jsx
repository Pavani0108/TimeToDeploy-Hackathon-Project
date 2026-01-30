import React from "react";

export default function Input({
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
     className={`
  w-full h-12
  rounded-lg
  bg-white dark:bg-white/5
  border border-gray-300 dark:border-white/10
  px-4
  text-gray-900 dark:text-white
  placeholder:text-gray-500 dark:placeholder:text-gray-400
  focus:outline-none
  focus:ring-2 focus:ring-purple-500
  ${className}
`}

      {...props}
    />
  );
}
