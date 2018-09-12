import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Toast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
    this.hide = this.hide.bind(this);
  }

  componentDidUpdate({ visible: newVisible }) {
    if (this.props.visible !== newVisible) {
      this.setState({ visible: true });
      this._tid = setTimeout(this.hide, 1000);
    }
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const { message } = this.props;
    const { visible } = this.state;

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
