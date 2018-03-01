import React from "react";
import "./App.css";

import Toggle from "./Toggle";
import Switch from "./Switch";
function MyToggle({ on, toggle }) {
  return <button onClick={toggle}>{on ? "on" : "off"}</button>;
}

function App() {
  return (
    <Toggle
      onToggle={on => console.log("toggle", on)}
      render={({ on, toggle }) => (
        <div>
          {on ? "The button is on" : "The button is off"}
          <Switch on={on} onClick={toggle} />
          <hr />
          <MyToggle on={on} toggle={toggle} />
        </div>
      )}
    />
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
