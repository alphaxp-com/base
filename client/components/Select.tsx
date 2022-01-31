import React from "react";

export function Select({
  className = "mb-3 border-gray-300 text-gray-500 w-full",
  name,
  onChange,
  options,
  value,
}: {
  className?: string;
  name: string;
  onChange?: (e: any) => void;
  options: any[];
  value: string;
}) {
  return (
    <select className={className} name={name} onChange={onChange} value={value}>
      {options.map(({ label, value }: { label: string; value: string }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
