import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(e) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.target.value, e)
    }
  }
  handleBlur(e) {
    this.props.onBlur(e.target.value, e);
  }
  render() {
    const { value } = this.props;
    return (
      <input
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={value}
      />
    );
  }
}

Input.defaultProps = {
  onBlur: () => {},
};

export default Input;
