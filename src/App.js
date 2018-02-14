import React from "react";
import "./App.css";

import Toggle from "./Toggle";

function App() {
  return (
    <Toggle onToggle={on => console.log("toggle", on)}>
      <div>
        <Toggle.On>Button is on</Toggle.On>
        <Toggle.Off>Button is off</Toggle.Off>
        <Toggle.Button />
      </div>
    </Toggle>
  );
}

/*
 *
 *
 * Below here are irrelevant
 * implementation details...
 *
 *
 */

export default App;
