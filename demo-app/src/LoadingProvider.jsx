import React from 'react';

const { Provider, Consumer: LoadingConsumer } = React.createContext('loading');

export { LoadingConsumer };
export default function({ loading, children }) {
  return (
    <Provider value={loading}>
      {children}
    </Provider>
  );
}
