import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import QueryProvider from "./providers/QueryProvider";
import App from "./App";
import "./index.css";
import { BusinessStatusProvider } from "./context/BusinessStatusContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <BusinessStatusProvider>
          <App />
        </BusinessStatusProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
