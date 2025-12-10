import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
if (container) {
  const root = ReactDom.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
