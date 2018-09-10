import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

// TODO:

// openModal
// closeModal
// openModal => 모달이 켜짐
// closeModal => 모달이 닫혀 짐
// recompose/withState, withHandlers 을 활용
import BuyCoinContent from './BuyCoinContent';
import SellCoinContent from './SellCoinContent';

export const BUY_MODAL = 'buy_modal';
export const SELL_MODAL = 'sell_modal';
export const MODALS = {
  [BUY_MODAL]: BuyCoinContent,
  [SELL_MODAL]: SellCoinContent,
};

export default Component => {
  const ComponentWithModal = ({ showModal, closeModal, modalContentId, ...props }) => {
    const ModalComponent = MODALS[modalContentId];
    return (
      <React.Fragment>
        <Component {...props} closeModal={closeModal} />
        {showModal && (
          <div>
            <div id="modal1" className="modal open" style={{ zIndex: 1003, display: 'block', opacity: 1, top: '30%' }}>
              <div className="modal-content">
                {ModalComponent && <ModalComponent />}
              </div>
              <div className="modal-footer">
                <button onClick={() => closeModal()}>Close</button>
              </div>
            </div>
            <div className="modal-overlay" style={{ zIndex: 1002, display: 'block', opacity: 0.5 }}></div>
          </div>
        )}
      </React.Fragment>
    );
  };

  return compose(
    withState('showModal', 'handleModal', false),
    withState('modalContentId', 'setModalContent', ''),
    withHandlers({
      openModal: ({ handleModal, setModalContent }) => (contentId) => {
        setModalContent(contentId);
        handleModal(true);
      },
      closeModal: ({ handleModal }) => () => handleModal(false),
    }),
  )(ComponentWithModal);
};
