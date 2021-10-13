import debug from "debug";
import express from "express";

import { error, logger, promisify, schema } from "./middleware";
import { Exception } from "./utils/Exception";

const log = debug("app");

const app = express();

app.use(logger);
app.use(schema("./schema.json"));

app.get(
  "/error",
  promisify(() => {
    log("/error");

    throw new Exception({ code: 404 });
  })
);

app.get(
  "/",
  promisify((req: express.Request, res: express.Response) => {
    log("/");

    res.json({ status: "ok" });
  })
);

app.use(error());

export default app;
