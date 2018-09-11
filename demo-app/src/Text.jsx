import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Text extends PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Text.propTypes = {
  children: PropTypes.string,
};

export default Text;
