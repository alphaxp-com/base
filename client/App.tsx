import React from "react";

import { ErrorBoundary, Loading } from "./components";

export const App: React.FunctionComponent = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <h1>App</h1>
      </ErrorBoundary>
    </React.Suspense>
  );
};
