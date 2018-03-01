import React from "react";
import PropTypes from "prop-types";

class Toggle extends React.Component {
  static defaultProps = { onToggle: () => {} };
  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );
  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default Toggle;
