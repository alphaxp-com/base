function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function fetch(
  url: string,
  params: RequestInit = {},
  options: { delay: number; retries: number } = { delay: 1500, retries: 1 }
) {
  async function onError(err: Error): Promise<any> {
    const retries = options.retries - 1;
    if (retries === 0) {
      throw err;
    }
    return wait(options.delay).then(() =>
      fetch(url, params, { ...options, retries })
    );
  }

  return window.fetch(url, params).catch(onError);
}

export async function request(url: string, params: RequestInit): Promise<any> {
  try {
    params = Object.assign(
      {
        method: params.body ? "POST" : "GET",
        url: "/",
      },
      params
    );
    params.headers = Object.assign(
      { "Content-Type": "application/json" },
      params.headers
    );
    params.body =
      (params.headers as any)["Content-Type"].startsWith("application/json") &&
      typeof params.body !== "string"
        ? JSON.stringify(params.body)
        : params.body;

    const req = await fetch(url, params);
    let res: { code: number; data?: any; message: string; errors?: any[] };
    if (req.headers?.get("Content-Type")?.startsWith("application/json")) {
      res = await req.json();
    } else {
      res = {
        code: req.status,
        message: req.statusText,
      };
    }
    const { code, errors, message } = res;

    if (!req.ok) {
      console.error(message, { code, errors });

      const err = new Error();
      Object.assign(err, {
        code,
        errors,
        message,
      });

      throw err;
    }

    return res;
  } catch (e: any) {
    if (e.name === "AbortError") {
      return;
    }

    throw e;
  }
}

export function useFetch(): [
  (url: string, params?: any) => Promise<any>,
  () => void
] {
  const controller = new window.AbortController();
  const signal = controller.signal;

  const proxy = (url: string, params?: RequestInit) =>
    request(url, { signal, ...params });
  const abort = () => controller.abort();

  return [proxy, abort];
}
