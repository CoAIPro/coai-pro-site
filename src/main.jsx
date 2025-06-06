import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import PasswordGate from "./components/PasswordGate";
import router from "./routes/Routes";
import "./styles/index.css";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PasswordGate>
      <RouterProvider router={router} />
    </PasswordGate>
  </StrictMode>,
)
