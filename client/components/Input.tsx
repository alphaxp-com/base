import React from "react";

export function Input({
  className = "mb-3 border-gray-300 text-gray-500 w-full",
  onChange,
  onClick,
  name,
  placeholder,
  postfix,
  prefix,
  type,
  value,
}: {
  className?: string;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  name?: string;
  placeholder: string;
  postfix?: JSX.Element;
  prefix?: JSX.Element;
  type: string;
  value?: string;
}) {
  return (
    <div className="relative">
      {prefix}
      <input
        className={className}
        onChange={onChange}
        onClick={onClick}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {postfix}
    </div>
  );
}
