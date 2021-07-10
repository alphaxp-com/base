import React from "react";

export const Page: React.FunctionComponent<{
  code: number;
  message: string;
}> = ({ code = 500, message }) => {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen"
      id="error"
    >
      <h1>{code}</h1>
      <h2>{message}</h2>
    </div>
  );
};
