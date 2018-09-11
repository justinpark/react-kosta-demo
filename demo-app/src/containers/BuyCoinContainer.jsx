import { connect } from 'react-redux'; 

import BuyCoinContent from '../BuyCoinContent';
import { updatePrice } from '../actions/resourceActions';

const mapStateToProps = (store, { id }) => {
  const { entities } = store.resource;

  return entities[id];
};

const mapDispatchToProps = {
  updatePrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyCoinContent)
