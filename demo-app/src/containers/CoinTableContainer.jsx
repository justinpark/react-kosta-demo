import { connect } from 'react-redux';

import CoinTable from '../CoinTable';
import { loadingResourceAction, fetchTransaction } from '../actions/resourceActions';
import { fetchTransactions } from '../actions/transactionActions';
import { fetchAll as fetchCoinAll } from '../actions/coinActions';

import { coinTransactionsSelector } from '../selectors/transactionSelectors';

const mapStateToProps = (store) => {
  const { isLoading, hasFetched, loadingEntities } = store.transactions;

  return {
    coins: coinTransactionsSelector(store),
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
