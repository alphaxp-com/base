import { Exception } from "./Exception";
import _fetch from "node-fetch";

type FetchParamsProps = {
  body?: any;
  headers?: any;
  method?: any;
};

export async function fetch(
  uri: string,
  params?: FetchParamsProps
): Promise<any> {
  uri = uri.replace(/(?:[^:])(\/{2,})/g, (match, group) =>
    match.replace(group, "/")
  );

  const req = await _fetch(uri, params);
  const res = await req.json();
  if (!req.ok) {
    throw new Exception({
      code: req.status,
      message: req.statusText,
    });
  }

  return res;
}
