import React from "react";
import { render } from "react-dom";

import "./index.css";

function App() {
  return <h1>App</h1>;
}

const app = document.createElement("div");
app.setAttribute("id", "app");
document.body.prepend(app);

render(<App />, app);
