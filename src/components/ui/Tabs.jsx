import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export function Tabs({ defaultValue, value, onValueChange, children }) {
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const activeValue = value !== undefined ? value : internalValue;

  const setValue = (val) => {
    if (onValueChange) {
      onValueChange(val);
    } else {
      setInternalValue(val);
    }
  };

  return (
    <TabsContext.Provider value={{ activeValue, setValue }}>
      {children}
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return (
    <div
      className={`inline-flex h-10 items-center rounded-md bg-gray-100 p-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = "" }) {
  const { activeValue, setValue } = useContext(TabsContext);
  const isActive = activeValue === value;

  return (
    <button
      onClick={() => setValue(value)}
      className={`
        px-3 py-1.5 text-sm rounded-sm transition-all
        ${isActive ? "bg-white shadow font-medium" : "text-gray-500"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = "" }) {
  const { activeValue } = useContext(TabsContext);

  if (activeValue !== value) return null;

  return <div className={`mt-2 ${className}`}>{children}</div>;
}
