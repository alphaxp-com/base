import React from "react";

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function fetch(
  url: string,
  params: Record<string, unknown> = {},
  { retries = 1, delay = 1500 }
) {
  async function onError(err: Error): Promise<any> {
    retries = retries - 1;
    if (retries === 0) {
      throw err;
    }
    return wait(delay).then(() => fetch(url, params, { delay, retries }));
  }

  return window.fetch(url, params).catch(onError);
}

export async function api(
  url: string,
  params?: Record<string, unknown>
): Promise<any> {
  const req = await fetch(url, params, { retries: 3 });
  const res = await req.json();
  if (!req.ok) {
    const err = new Error();
    Object.assign(err, res);
    throw err;
  }
  return res;
}

export function useApiService(
  url: string,
  params?: Record<string, unknown>
): any {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const controller = new window.AbortController();
    const signal = controller.signal;

    (async () => {
      const res = await api(url, { ...params, signal });
      setData(res);
    })();

    return () => controller.abort();
  }, [url]);

  return [data, api];
}
