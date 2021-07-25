import React from "react";

export const Page: React.FunctionComponent<{
  code: number;
  message: string;
}> = ({ code = 500, message }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen"
      id="error"
    >
      <h1 className="text-8xl">{code}</h1>
      <h2 className="text-2xl">{message}</h2>
    </div>
  );
};
