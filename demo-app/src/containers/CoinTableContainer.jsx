import { connect } from 'react-redux';

import CoinTable from '../CoinTable';
import { loadingResourceAction, fetchTransaction, fetchAll } from '../actions/resourceActions';

const mapStateToProps = ({ resource }) => {
  const { isLoading, hasFetched, entities } = resource;
  return {
    coins: entities ? entities.map(({ price, ...props }) => ({
      ...props,
      totalValue: price,
    })) : null,
    isLoading,
    hasFetched,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
