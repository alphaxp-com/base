import React from "react";

import "./Loading.css";

export const Loading: React.FunctionComponent<{ page?: boolean }> = ({
  page,
}) => {
  const className = React.useMemo(
    () =>
      page ? "flex items-center justify-center w-screen h-screen" : undefined,
    [page]
  );

  return (
    <div className={className}>
      <div className="spinner inline-flex m-auto">
        <span className="bg-theme-blue w-4 h-4 rounded-full" />
        <span className="bg-theme-black ml-1 w-4 h-4 rounded-full" />
        <span className="bg-theme-red ml-1 w-4 h-4 rounded-full" />
      </div>
    </div>
  );
};
