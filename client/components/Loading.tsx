import React from "react";

import { LoadingProps } from "./Loading.d";
import "./Loading.css";

export const Loading: React.FunctionComponent<LoadingProps> = ({ page }) => {
  const className = React.useMemo(
    () =>
      page ? "flex items-center justify-center w-screen h-screen" : undefined,
    [page]
  );

  return (
    <div className={className}>
      <div className="spinner inline-flex m-auto">
        <span className="w-4 h-4 bg-gray-200 rounded-full" />
        <span className="ml-1 w-4 h-4 bg-gray-300 rounded-full" />
        <span className="ml-1 w-4 h-4 bg-gray-400 rounded-full" />
      </div>
    </div>
  );
};
