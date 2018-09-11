import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BuyCoinContent from './BuyCoinContent';
import SellCoinContent from './SellCoinContent';

export const BUY_MODAL = 'buy_modal';
export const SELL_MODAL = 'sell_modal';
export const MODALS = {
  [BUY_MODAL]: BuyCoinContent,
  [SELL_MODAL]: SellCoinContent,
};

const { Provider, Consumer: ModalConsumer } = React.createContext('modal');
export { ModalConsumer };

class ModalProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen(contentId, modalProps) {
    this.contentId = contentId;
    this.modalProps = modalProps;
    /// VVVVVV setState
    this.setState(() => ({
      showModal: true,
    }));
  }
  handleClose() {
    this.setState(() => ({
      showModal: false,
    }));
  }
  // getChildContext() {
  //   return {
  //     modal: {
  //       openModal: this.handleOpen,
  //       closeModal: this.handleClose,
  //     },
  //   };
  // }
  render() {
    const { children } = this.props;
    const { showModal } = this.state;
    const ModalComponent = MODALS[this.contentId];
    return (
      <Provider
        value={{
          openModal: this.handleOpen,
          closeModal: this.handleClose,
        }}
      >
        {children}
        {showModal && ModalComponent && (
          <div>
            <div id="modal1" className="modal open" style={{ zIndex: 1003, display: 'block', opacity: 1, top: '30%' }}>
              <div className="modal-content">
                <ModalComponent {...this.modalProps} />
              </div>
              <div className="modal-footer">
                <button onClick={this.handleClose}>Close</button>
              </div>
            </div>
            <div className="modal-overlay" style={{ zIndex: 1002, display: 'block', opacity: 0.5 }}></div>
          </div>
        )}
      </Provider>
    );
  }
}

ModalProvider.propTypes = {
  isOpen: PropTypes.bool,
};
// ModalProvider.childContextTypes = {
//   modal: PropTypes.shape({
//     openModal: PropTypes.func,
//     closeModal: PropTypes.func,
//   }),
// };

export default ModalProvider;
