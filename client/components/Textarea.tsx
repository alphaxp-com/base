import React from "react";

export function Textarea({
  className = "mb-3 border-gray-300 text-gray-500 w-full",
  onChange,
  name,
  placeholder,
  value,
}: {
  className?: string;
  onChange?: (e: any) => void;
  name: string;
  placeholder: string;
  value?: string;
}) {
  return (
    <textarea
      className={className}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}
