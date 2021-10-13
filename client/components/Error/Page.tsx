import React from "react";

import { PageProps } from "./Page.d";

export function Page({ code = 500, message, reset }: PageProps): JSX.Element {
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
}
