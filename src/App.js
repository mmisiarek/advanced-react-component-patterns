import React from "react";
import "./App.css";

import Toggle, { withToggle } from "./Toggle";

const MyToggle = withToggle(({ on, toggle }) => (
  <button onClick={toggle}>{on ? "on" : "off"}</button>
));

function App() {
  return (
    <Toggle onToggle={on => console.log("toggle", on)}>
      <div>
        <Toggle.On>Button is on</Toggle.On>
        <Toggle.Off>Button is off</Toggle.Off>
        <Toggle.Button />
        <MyToggle />
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
