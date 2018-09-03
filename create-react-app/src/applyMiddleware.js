export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);
    const { getState } = store;
    let dispatch;
    const chain = middlewares.map(middleware => middleware({ getState, dispatch }));
    dispatch = compose(...chain)(store.dispatch);
    
    return {
      ...store,
      dispatch
    };
  }
}
