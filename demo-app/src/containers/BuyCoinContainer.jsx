import { connect } from 'react-redux'; 

import BuyCoinContent from '../BuyCoinContent';
import { updatePrice } from '../actions/transactionActions';

const mapStateToProps = (store, { id }) => {
  const { entities } = store.coins;
  const attrs = entities[id];

  return attrs;
};

const mapDispatchToProps = {
  updatePrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyCoinContent)
