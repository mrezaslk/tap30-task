import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { initialData } from "@shared/types";
import { InitialDataProvider } from "./context/InitialDataContext";
import '@client/style.css';

declare global {
  interface Window {
    __INITIAL_DATA__?: initialData;
  }
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found");
}
const initialData = window.__INITIAL_DATA__;
const app = (
  <React.StrictMode>
    {initialData ? (
      <InitialDataProvider value={initialData}>
        <App />
      </InitialDataProvider>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  const root = createRoot(container);
  root.render(app);
}
