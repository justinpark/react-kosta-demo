import { connect } from 'react-redux';

import CoinTable from '../CoinTable';
import { loadingResourceAction, fetchTransaction } from '../actions/resourceActions';
import { fetchAll } from '../actions/transactionActions';
import { fetchAll as fetchCoinAll } from '../actions/coinActions';

const mapStateToProps = ({ transactions }) => {
  const { isLoading, hasFetched, entities, ids, loadingEntities } = transactions;
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
    fetchCoins: () => dispatch(fetchCoinAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
