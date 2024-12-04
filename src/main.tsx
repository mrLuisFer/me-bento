import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./app/css/base.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
