import { XIcon } from "@heroicons/react/outline";
import React from "react";

export function Modal({
  children,
  onClose,
  visible = false,
}: {
  children: React.ReactChild;
  onClose: () => void;
  visible: boolean;
}) {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-white fixed z-10 flex h-screen w-screen items-center justify-center bg-opacity-70">
      <div className="border-gray-300 bg-white relative border p-9 shadow-xl">
        <button className="absolute right-2 top-2" onClick={() => onClose()}>
          <XIcon className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}
