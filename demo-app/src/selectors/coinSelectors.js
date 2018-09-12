import createSelectors from '../api-redux-pack/createSelectors';

export const coinApiSelector = store => store.coins;

export const {
  collectionSelector: coinsSelector,
} = createSelectors(coinApiSelector);
