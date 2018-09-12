import React, { PureComponent } from 'react';
import AsyncComponent from './AsyncComponent';

const loader = () => new Promise((resolve) => {
  require.ensure([], (require) => {
    const result = require('./Home');
    resolve(result.default || result);
  });
});

export default (props) => (
  <AsyncComponent
    {...props}
    loader={loader}
  />
);
