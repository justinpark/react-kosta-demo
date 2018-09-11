import React from 'react';
import PropTypes from 'prop-types';

function Modal({ children }, { modal }) {
  const { openModal, closeModal } = modal;
  return children({ openModal, closeModal });
}

Modal.propsTypes = {
  children: PropTypes.func.isRequired,
};

Modal.contextTypes = {
  modal: PropTypes.shape({
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
  }),
};

export default Modal;
