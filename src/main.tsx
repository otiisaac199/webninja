import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
