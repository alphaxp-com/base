import React from "react";

import { LoadingProps } from "./Loading.d";
import "./Loading.css";

export function Loading({
  className: _className = "h-4 w-4",
  page,
}: LoadingProps): JSX.Element {
  const className = React.useMemo(
    () =>
      page ? "flex items-center justify-center w-screen h-screen" : undefined,
    [page]
  );

  return (
    <div className={className}>
      <div className="spinner m-auto inline-flex">
        <span className={`${_className} rounded-full bg-gray-200`} />
        <span className={`${_className} ml-1 rounded-full bg-gray-300`} />
        <span className={`${_className} ml-1 rounded-full bg-gray-400`} />
      </div>
    </div>
  );
}
