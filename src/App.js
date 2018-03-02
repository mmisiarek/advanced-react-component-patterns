import React, { Component } from "react";
import "./App.css";

import Toggle from "./Toggle";
import Switch from "./Switch";

class App extends Component {
  initialState = {
    on: false,
    timesClicked: 0
  };
  state = this.initialState;
  render() {
    const { on } = this.state;
    return (
      <Toggle
        on={on}
        defaultOn={true}
        onToggle={on =>
          this.setState(({ on, timesClicked }) => ({
            timesClicked: timesClicked + 1,
            on: timesClicked >= 4 ? false : !on
          }))
        }
        onReset={() => this.setState(this.initialState)}
        render={({ on, getTogglerProps, reset }) => (
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
            <button onClick={reset}>Reset state</button>
          </div>
        )}
      />
    );
  }
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
