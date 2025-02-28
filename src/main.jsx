import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import "./style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Create a root and render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);