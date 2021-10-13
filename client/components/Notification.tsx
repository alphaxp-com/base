import React from "react";

import { NotificationComponentProps } from "./Notification.d";

export function Notification({
  message,
  onClose = () => null,
  type = "info",
}: NotificationComponentProps): JSX.Element | null {
  React.useEffect(() => {
    if (!message) {
      return;
    }

    setTimeout(onClose, 10 * 1000);
  }, [message, onClose]);

  if (!message) {
    return null;
  }

  const bgColor = React.useMemo(() => {
    switch (type) {
      case "alert":
        return "bg-yellow-100";
      case "error":
        return "bg-red-100";
      case "info":
        return "bg-gray-100";
      case "success":
        return "bg-green-100";
    }
  }, [type]);

  const borderColor = React.useMemo(() => {
    switch (type) {
      case "alert":
        return "border-yellow-400";
      case "error":
        return "border-red-400";
      case "info":
        return "border-gray-300";
      case "success":
        return "border-green-500";
    }
  }, [type]);

  const textColor = React.useMemo(() => {
    switch (type) {
      case "alert":
        return "text-yellow-600";
      case "error":
        return "text-red-600";
      case "info":
        return "text-gray-600";
      case "success":
        return "text-green-600";
    }
  }, [type]);

  return (
    <div
      className={`flex fixed top-7 right-7 px-6 py-4 pr-12 body-font bg-white border rounded shadow-lg z-10 ${bgColor} ${borderColor} ${textColor}`}
    >
      <p className="text-base">{message}</p>
      <button
        className="absolute right-2 top-1 p-2 text-xl"
        onClick={onClose}
        type="button"
      >
        &times;
      </button>
    </div>
  );
}
