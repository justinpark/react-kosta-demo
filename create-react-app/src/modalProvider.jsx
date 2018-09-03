import renderNothing from 'recompose/renderNothing';

const provider = (contents, modalKey = DEFAULT_MODAL_KEY) => {
  class ModalProvider extends PureComponent {
    getChildContext() {
      return {
        [modalKey]: {
          openModal: this.open,
          closeModal: this.close,
        },
      };
    }
    close() {
      this.setState(() => ({ visible: false }));
    }
    open(contentId, modalParams = {}) {
      this.modalProps = modalParams;
      this.content = contents[contentId] || renderNothing;
      this.setState(() => ({ visible: true }));
    }
 
    render() {
      const { children } = this.props;
      const Component = this.content;
      return [
        <Modal key="modal-provider">
          <Component {...this.modalProps} />
        </Modal>,
        children,
      ];
    }
  }

  ModalProvider.childContextTypes = { [modalKey]: modalShape };

  return ModalProvider;
};

export default provider;
