import React from "react";

import { ApiProviderProps } from "./Api.d";
import { useApiService } from "../services/api";

export const ApiContext = React.createContext<any>(null);

export function ApiProvider({ children, url, params }: ApiProviderProps): any {
  const [data, api] = useApiService(url, params);
  const value = React.useMemo(() => [data, api], [api, data]);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi(): React.Context<any> {
  return React.useContext(ApiContext);
}
