import React from "react";
import { render } from "react-dom";

import { App } from "./App";
import "./index.css";

const app = document.createElement("div");
app.setAttribute("id", "app");
document.body.prepend(app);

render(<App />, app);
