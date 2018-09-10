import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

import { withStyles } from '../withStyles';

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
  const ComponentWithModal = ({ showModal, closeModal, modalContentId, css, styles, ...props }) => {
    const ModalComponent = MODALS[modalContentId];
    return (
      <React.Fragment>
        <Component {...props} closeModal={closeModal} />
        {showModal && (
          <div>
            <div id="modal1" {...css(styles.modal)}>
              <div className="modal-content">
                {ModalComponent && <ModalComponent />}
              </div>
              <div className="modal-footer">
                <button onClick={() => closeModal()}>Close</button>
              </div>
            </div>
            <div {...css(styles.overlay)}></div>
          </div>
        )}
      </React.Fragment>
    );
  };

  return compose(
    withStyles(() => ({
      modal: {
        zIndex: 1003,
        display: 'block',
        opacity: 1,
        top: '30%',
        position: 'fixed',
        left: 0,
        right: 0,
        backgroundColor: '#fafafa',
        padding: 0,
        width: '55%',
        margin: 'auto',
        overflowY: 'auto',
        borderRadius: 2,
      },
      overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
        zIndex: 1002,
        display: 'block',
        top: 0,
        left: 0,
      },
    })),
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
