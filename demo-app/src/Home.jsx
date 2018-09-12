import React from 'react';

import FilterContainer from './containers/FilterContainer';
import CoinTableContainer from './containers/CoinTableContainer';
import ToastContainer from './containers/ToastContainer';

export default () => (
  <React.Fragment>
    <FilterContainer />
    <CoinTableContainer />
    <ToastContainer />
  </React.Fragment>
);
