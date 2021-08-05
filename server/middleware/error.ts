import debug from "debug";
import express from "express";

import { Exception } from "../utils/Exception";

const log = debug("app:middleware:error");

function handler(
  err: Exception,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  log(err);

  if (res.headersSent) {
    return next(err);
  }

  let { code } = err;
  if (isNaN(code)) {
    code = 500;
  }
  res.status(code).send(err);
}

function middleware(methods: string[] = []) {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (methods && !methods.includes(req.method)) {
      next(new Exception({ code: 405 }));
      return;
    }
    next(new Exception({ code: 404 }));
  };
}

export function error(methods = []): any {
  return [middleware(methods), handler];
}
