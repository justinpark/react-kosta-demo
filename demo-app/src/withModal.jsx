import React from 'react';

import PropTypes from 'prop-types';

// TODO:

// openModal
// closeModal
// openModal => 모달이 켜짐
// closeModal => 모달이 닫혀 짐
// recompose/withState, withHandlers 을 활용

export default Component => {
  const ComponentWithModal = (props, { modal }) => {
    const { openModal, closeModal } = modal;
    return (
      <React.Fragment>
        <Component
          {...props}
          openModal={openModal}
          closeModal={closeModal}
        />
      </React.Fragment>
    );
  };

  ComponentWithModal.contextTypes = {
    modal: PropTypes.shape({
      openModal: PropTypes.func,
      closeModal: PropTypes.func,
    }),
  };

  return ComponentWithModal;
};
