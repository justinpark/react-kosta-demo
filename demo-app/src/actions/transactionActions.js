import selectorAction from 'selector-action';

import createActions from '../api-redux-pack/createActions';
import { transactionsSelector } from '../selectors/transactionSelectors';
import { filterSelector } from '../selectors/filterSelectors';

export const {
  fetch,
  fetchAll,
  remove,
  create,
  update,
} = createActions('transactions');

export const fetchTransactions = () => selectorAction(
  filterSelector,
  filters => fetchAll({
    query: {
      _sort: 'createAt',
      _order: 'asc',
      ...filters
    },
    meta: {
      toast: {
        onSuccess: '데이터를 가져왔습니다',
      },
    },
  })
)


export const updatePrice = (id, price) => selectorAction(
  transactionsSelector,
  ({ entities }) => update(id, {
    data: {
      ...entities[id],
      price,
    },
    meta: {
      toast: {
        onSuccess: '성공했습니다',
      },
    },
  })
);

