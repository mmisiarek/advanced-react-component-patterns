import React from "react";
import PropTypes from "prop-types";

const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

class Toggle extends React.Component {
  static defaultProps = {
    onToggle: () => {},
    onReset: () => {},
    defaultOn: false
  };

  initialState = { on: this.props.defaultOn };
  state = this.initialState;

  getTogglerProps = ({ onClick, ...props } = {}) => {
    return {
      "aria-expanded": this.state.on,
      onClick: compose(onClick, this.toggle),
      ...props
    };
  };

  toggle = () => {
    if (this.isOnControlled()) {
      this.props.onToggle(!this.props.on);
    } else {
      this.setState(
        ({ on }) => ({ on: !on }),
        () => this.props.onToggle(this.state.on)
      );
    }
  };

  reset = () => {
    if (this.isOnControlled()) {
      this.props.onReset(!this.props.on);
    } else {
      this.setState(this.initialState, () => {
        this.props.onReset(this.initialState);
      });
    }
  };

  isOnControlled = () => {
    return this.props.on !== undefined;
  };

  render() {
    return this.props.render({
      on: this.isOnControlled() ? this.props.on : this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps,
      reset: this.reset
    });
  }
}

export default Toggle;
