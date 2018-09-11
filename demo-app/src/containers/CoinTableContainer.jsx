import { connect } from 'react-redux';

import CoinTable from '../CoinTable';
import { loadingResourceAction, fetchTransaction } from '../actions/resourceActions';

const mapStateToProps = ({ resource }) => {
  const { isLoading, hasFetched, entities } = resource;
  return {
    coins: entities,
    isLoading,
    hasFetched,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchTransaction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
