import React from "react";

import { ApiContext } from "../contexts/Api";
import { useApiService } from "../services/api";

type ApiProviderProps = {
  children: React.ReactNode;
  url: string;
  params?: any;
};

export function ApiProvider({ children, url, params }: ApiProviderProps): any {
  const [data, api] = useApiService(url, params);
  const value = React.useMemo(() => [data, api], [api, data]);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}
