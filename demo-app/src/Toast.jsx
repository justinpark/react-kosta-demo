import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Toast extends PureComponent {
  render() {
    const { visible, message } = this.props;

    return visible && (
      <div id="toast-container">
        <div className="toast">
          {message}
        </div>
      </div>
    );
  }
}

Toast.propTypes = {

};

export default Toast;
