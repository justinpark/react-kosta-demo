import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withStylesPropTypes } from '../withStyles';

const propTypes = {
};

const defaultProps = {
};

function Modal({
  title,
  message,
  css,
  stuyles
}) {
  return (
    <div>
      <div id="modal1" className="modal open" style={{ zIndex: 1003, display: 'block', opacity: 1, top: '30%' }}>
        <div className="modal-content">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
      <div className="modal-overlay" style={{ zIndex: 1002, display: 'block', opacity: 0.5 }}></div>
    </div>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
