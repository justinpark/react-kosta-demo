import { connect } from 'react-redux';

import CoinTable from '../CoinTable';
import { loadingResourceAction, fetchTransaction, fetchAll } from '../actions/resourceActions';

const mapStateToProps = ({ resource }) => {
  const { isLoading, hasFetched, entities, ids, loadingEntities } = resource;
  return {
    coins: ids
      ? ids.map(id => ({
          ...entities[id],
          totalValue: entities[id].price,
        }))
      : undefined,
    isLoading,
    hasFetched,
    loadingEntities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
