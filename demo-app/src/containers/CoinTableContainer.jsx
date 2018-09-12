import { connect } from 'react-redux';

import CoinTable from '../CoinTable';
import { loadingResourceAction, fetchTransaction } from '../actions/resourceActions';
import { fetchTransactions } from '../actions/transactionActions';
import { fetchAll as fetchCoinAll } from '../actions/coinActions';

import { coinsSelector } from '../selectors/coinSelectors';

const mapStateToProps = (store) => {
  const { isLoading, hasFetched, loadingEntities } = store.transactions;

  return {
    coins: coinsSelector(store),
    isLoading,
    hasFetched,
    loadingEntities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchTransactions()),
    fetchCoins: () => dispatch(fetchCoinAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
