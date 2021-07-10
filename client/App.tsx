import React from "react";

import { ErrorBoundary } from "./components";

export const App: React.FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <h1>App</h1>
    </ErrorBoundary>
  );
};
