import createActions from '../api-redux-pack/createActions';

export const {
  fetch,
  fetchAll,
  remove,
  create,
  update,
} = createActions('transactions');

export const fetchTransactions = () => fetchAll({
  meta: {
    toast: {
      onSuccess: '데이터를 가져왔습니다',
    },
  },
});

export const updatePrice = (id, transaction) => update(id, {
  data: transaction,
  meta: {
    toast: {
      onSuccess: '성공했습니다',
    },
  },
});
