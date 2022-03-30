import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./index.css";

const app = document.createElement("div");
app.setAttribute("id", "app");
document.body.prepend(app);

const root = createRoot(app);
root.render(<App />);
