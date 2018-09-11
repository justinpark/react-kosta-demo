import { handle } from 'redux-pack';

const initialState = {
  visible: false,
  success: false,
  message: '',
};

export default function(state = initialState, action) {
  const { toast } = action.meta || {};
  if (toast) {
    return handle(state, action, {
      success: prevState => ({
        ...prevState,
        visible: true,
        success: true,
        message: toast.onSuccess,
      }),
    });
  }
  return state;
}
