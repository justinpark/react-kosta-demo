import { connect } from 'react-redux'; 

import BuyCoinContent from '../BuyCoinContent';

const mapStateToProps = (store, { id }) => {
  const { entities } = store.resource;
  console.log('id', id);
  const selectedItem = entities.find(({ id: entityId }) => entityId === id);

  return {
    ...selectedItem,
  };
};

export default connect(mapStateToProps)(BuyCoinContent)
