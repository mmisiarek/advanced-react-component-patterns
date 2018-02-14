import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div
    style={{
      marginTop: 40,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center"
    }}
  >
    <App />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
