import React from "react";

import { useFetch } from "../utils";

export function useApiService(
  url: string,
  params?: Record<string, unknown>
): any {
  const [data, setData] = React.useState(null);
  const [proxy, abort] = useFetch();

  React.useEffect(() => {
    if (!url) {
      return;
    }

    (async () => {
      const res = await proxy(url, params);
      setData(res);
    })();

    return abort;
  }, [url]);

  return [data, proxy];
}
