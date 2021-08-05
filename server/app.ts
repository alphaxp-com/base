import debug from "debug";
import express from "express";

import { error, logger, promisify, schema } from "./middleware";

const log = debug("app");

const app = express();

app.use(logger);
app.use(schema("./schema.json"));

app.get(
  "/",
  promisify((req: express.Request, res: express.Response) => {
    log("/");

    res.json({ status: "ok" });
  })
);

app.use(error());

export default app;
