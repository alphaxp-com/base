import React from "react";

import { Loading } from "./Loading";

export function Button({
  children,
  className = "border border-gray-300 text-gray-500 px-4 py-2",
  isLoading = false,
  name,
  onChange,
  type = "submit",
  value,
}: {
  children: React.ReactChild;
  className?: string;
  isLoading?: boolean;
  name?: string;
  onChange?: (e: any) => void;
  type?: "button" | "submit" | "reset" | undefined;
  value?: string;
}) {
  return (
    <button
      className={className}
      onChange={onChange}
      name={name}
      type={type}
      value={value}
    >
      {isLoading ? <Loading className="h-2 w-2" /> : children}
    </button>
  );
}
