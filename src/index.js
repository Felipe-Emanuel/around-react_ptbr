import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { CurrentUserContextProvider } from "./contexts/CurrentUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <App />
    </CurrentUserContextProvider>
  </React.StrictMode>
);
