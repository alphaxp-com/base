import request from "supertest";
import { describe, expect, test } from "vitest";

import app from "./app";

describe("app", function () {
  test("default", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
