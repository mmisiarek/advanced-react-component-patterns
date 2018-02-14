import React from "react";
import "./App.css";

import Toggle, { withToggle } from "./Toggle";

const MyToggle = withToggle(({ toggle: { on, toggle } }) => (
  <button onClick={toggle}>{on ? "on" : "off"}</button>
));

const MyEventComponent = withToggle(({ toggle, on, event }) => {
  const props = { [event]: on };
  return toggle.on ? <button {...props}>The {event} event</button> : null;
});

function App() {
  return (
    <Toggle onToggle={on => console.log("toggle", on)}>
      <div>
        <MyToggle />
        <hr />
        <Toggle.On>Button is on</Toggle.On>
        <Toggle.Off>Button is off</Toggle.Off>
        <Toggle.Button />
        <MyEventComponent event="onClick" on={e => alert(e.type)} />
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
