import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./styles/Package.css";
import "./styles/BookingHistory.css";
import "./styles/Tips.css";
import "./styles/Destination.css";
import "./styles/BookingForm.css";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
 