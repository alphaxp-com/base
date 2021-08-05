import React from "react";

import { ErrorBoundary, Loading } from "./components";
import { ApiProvider } from "./providers";

export const App: React.FunctionComponent = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ApiProvider url="/api.json">
          <h1>App</h1>
        </ApiProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
