import React from "react";

import { ErrorBoundary, Loading } from "./components";
import { ApiProvider } from "./hooks";

export function App(): JSX.Element {
  return (
    <React.Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ApiProvider url="/api.json">
          <h1>App</h1>
        </ApiProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
