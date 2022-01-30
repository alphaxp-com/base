import React from "react";

import { LoadingProps } from "./Loading.d";
import "./Loading.css";

export function Loading({ page }: LoadingProps): JSX.Element {
  const className = React.useMemo(
    () =>
      page ? "flex items-center justify-center w-screen h-screen" : undefined,
    [page]
  );

  return (
    <div className={className}>
      <div className="spinner m-auto inline-flex">
        <span className="h-4 w-4 rounded-full bg-gray-200" />
        <span className="ml-1 h-4 w-4 rounded-full bg-gray-300" />
        <span className="ml-1 h-4 w-4 rounded-full bg-gray-400" />
      </div>
    </div>
  );
}
