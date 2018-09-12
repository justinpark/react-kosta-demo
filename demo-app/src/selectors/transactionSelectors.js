import { createSelector } from 'reselect';

const EMPTY_ARRAY = [];

export const transactionsSelector = store => store.transactions;

export const rawCoinTransactionsSelector = createSelector(
  transactionsSelector,
  ({ entities, ids }) => ids
    ? ids.map(id => ({
        ...entities[id],
        totalValue: entities[id].price,
      }))
    : EMPTY_ARRAY,
);

export const coinTransactionsSelector = createSelector(
  rawCoinTransactionsSelector,
  transactions => transactions.filter(({ deleted }) => !deleted),
);
