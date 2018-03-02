import React from "react";
import "./App.css";

import Toggle from "./Toggle";
import Switch from "./Switch";

function App() {
  return (
    <Toggle
      onToggle={on => console.log("toggle", on)}
      render={({ on, getTogglerProps }) => (
        <div>
          {on ? "The button is on" : "The button is off"}
          <Switch on={on} {...getTogglerProps()} />
          <hr />
          <button
            {...getTogglerProps({
              onClick: () => console.log("MyToggleClick"),
              id: "mt"
            })}
          >
            {on ? "on" : "off"}
          </button>
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
