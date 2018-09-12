import { connect } from 'react-redux';

import Filter from '../Filter';
import { coinsSelector } from '../selectors/coinSelectors';
import { setFilter } from '../actions/filterActions';

const selector = (store) => ({
  coins: coinsSelector(store),
});

export default connect(selector, { setFilter })(Filter);
