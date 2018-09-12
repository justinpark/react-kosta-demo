import { handle } from 'redux-pack';

const initialState = {
  visible: false,
  success: false,
  message: '',
};

export default (state = initialState, action) => {
  const { toast } = action.meta || {}
  if (toast) {
    return handle(state, action, {
      success: (prevState) => ({
        ...prevState,
        message: toast.onSuccess,
        visible: true,
      }),
      failure: (prevState) => ({
        ...prevState,
        message: toast.onError,
        visible: true,
      })
    })
  }
  return state;
};
