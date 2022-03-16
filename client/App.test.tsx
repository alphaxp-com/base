import React from "react";
import renderer from "react-test-renderer";
import { describe, test } from "vitest";

import { App } from "./App";

describe("app", function () {
  test("renders", () => {
    renderer.create(<App />);
  });
});
