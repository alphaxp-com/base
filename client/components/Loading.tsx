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
        <span className={`${_className} bg-gray-200 rounded-full`} />
        <span className={`${_className} bg-gray-300 ml-1 rounded-full`} />
        <span className={`${_className} bg-gray-400 ml-1 rounded-full`} />
      </div>
    </div>
  );
}
