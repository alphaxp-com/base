import React from "react";

export const Page: React.FunctionComponent<{
  code: number;
  message: string;
  reset?: () => void;
}> = ({ code = 500, message, reset }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen"
      id="error"
    >
      <h1 className="text-8xl">{code}</h1>
      <h2 className="text-2xl">{message}</h2>
      {reset && <button onClick={reset}>retry request</button>}
    </div>
  );
};
