import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";
import { ImageProvider } from "./context/ImageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageProvider>
      <App />
      <Toaster position="top-right" />
    </ImageProvider>
  </StrictMode>
);