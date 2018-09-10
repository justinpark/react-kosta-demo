import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, withStylesPropTypes } from '../withStyles';

const propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

const defaultProps = {
};

function Button({ children, css, styles, primary, secondary, onClick }) {
  return (
    <button onClick={onClick} {...css(styles.button, primary && styles.primary, secondary && styles.secondary)}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyles(({ color, unit, size, lineHeight }) => ({
  button: {
    fontSize: size.md,
    color: color.white,
    backgroundColor: color.gray,
    paddingLeft: 4 * unit,
    paddingRight: 4 * unit,
    textDecoration: 'none',
    outline: 0,
    border: 'none',
    borderRadius: 2,
    lineHeight: lineHeight.md,
  },
  primary: {
    backgroundColor: color.primary,
  },
  secondary: {
    backgroundColor: color.secondary,
  },
}))(Button);
