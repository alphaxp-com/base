import debug from "debug";
import express from "express";

const log = debug("app");

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  log("/");

  res.json({ status: "ok" });
});

export default app;
