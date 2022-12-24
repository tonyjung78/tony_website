import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter basename="/tony_website">
      <App />
    </BrowserRouter>
  </>
);