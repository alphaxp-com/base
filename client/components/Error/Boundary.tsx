import React from "react";

import { Page } from "./Page";

const isProduction = window.location.hostname !== "localhost";

export class Boundary extends React.Component {
  public static displayName = "ErrorBoundary";

  public state = {
    error: false,
  };

  public static getDerivedStateFromError(): { error: boolean } {
    return { error: true };
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo): void {
    if (isProduction) {
      (window as any)["gtag"]("event", "exception", {
        description: error,
        fatal: true,
      });
    } else {
      console.error(error, info);
    }
  }

  public render(): React.ReactNode {
    if (this.state.error) {
      return (
        <Page
          code={500}
          message="An error occurred"
          reset={() => this.setState({ error: null })}
        />
      );
    }

    return this.props.children;
  }
}
