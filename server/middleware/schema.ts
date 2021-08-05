import Ajv from "ajv";
import express from "express";
import fs from "fs";
import path from "path";

import { Exception } from "../utils/Exception";

const ajv = new Ajv({ allErrors: true });

export function schema(uri: string): any {
  const schema = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", uri), "utf-8")
  );

  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if ("schema" in req.query) {
      res.status(200).send(schema);

      return;
    }

    if (
      !["DELETE", "GET", "HEAD", "OPTIONS"].includes(req.method) &&
      !ajv.validate(schema, req.body)
    ) {
      return next(
        new Exception({
          code: 400,
          errors: ajv.errors,
          expose: true,
          message: "Schema validation error",
        })
      );
    }

    return next();
  };
}
