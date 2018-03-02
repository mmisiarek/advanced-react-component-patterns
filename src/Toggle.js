import React from "react";
import PropTypes from "prop-types";

const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

class Toggle extends React.Component {
  static defaultProps = { onToggle: () => {} };
  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );

  getTogglerProps = ({ onClick, ...props } = {}) => {
    return {
      "aria-expanded": this.state.on,
      onClick: compose(onClick, this.toggle),
      ...props
    };
  };
  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps
    });
  }
}

export default Toggle;
