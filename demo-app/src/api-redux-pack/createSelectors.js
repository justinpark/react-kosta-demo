import { createSelector } from 'reselect';

const EMPTY_ARRAY = [];

export default resourceSelector => {
  const rawCollectionSelector = createSelector(
    resourceSelector,
    ({ entities, ids }) => ids
      ? ids.map(id => entities[id])
      : EMPTY_ARRAY,
  );
  const collectionSelector = createSelector(
    rawCollectionSelector,
    collection => collection.filter(({ deleted }) => !deleted),
  );
  return {
    rawCollectionSelector,
    collectionSelector,
  }
};
