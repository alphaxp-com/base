import React from "react";

export const ApiContext = React.createContext<any>(null);

export function useApi(): React.Context<any> {
  return React.useContext(ApiContext);
}
