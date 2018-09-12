import { handle } from 'redux-pack';
import {
  INIT_RESOURCE,
  ADD_RESOURCE,
  LOADING_RESOURCE,
  LOADED_RESOURCE,
  REQUEST_RESOURCE,
  UPDATE_PRICE,
  UPDATE_RESOURCE,
} from '../actions/resourceActionTypes';

export const initialState = {
  isLoading: false,
  loadingEntities: {},
  hasFetched: false,
  entities: {},
  ids: [],
  pagination: {},
};

export default function(state = initialState, action = {}) {
  const { type, payload } = action;
  if (type === INIT_RESOURCE) {
    const { data } = payload;
    const ids = data.map(({ id }) => id);
    const entities = data.reduce((finalEntities, entity) => ({
      ...finalEntities,
      [entity.id]: entity,
    }), {});
    return {
      ...state,
      entities,
      ids,
      isLoading: false,
    };
  } else if (type === ADD_RESOURCE) {
    return {
      ...state,
      isLoading: false,
      hasFetched: true,
    };
  } else if (type === LOADING_RESOURCE) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (type === LOADED_RESOURCE) {
    const { data } = payload;
    return {
      ...state,
      isLoading: false,
      entities: data,
    };
  } else if (type === REQUEST_RESOURCE) {
    const { data } = payload || {};
    return handle(state, action, {
      start: prevState => ({ ...prevState, isLoading: true }),
      success: prevState => {
        const ids = data.map(({ id }) => id);
        const entities = data.reduce((finalEntities, entity) => ({
          ...finalEntities,
          [entity.id]: entity,
        }), {});
        return {
          ...prevState,
          entities,
          ids,
          isLoading: true,
        };
      },
      finish: prevState => ({ ...prevState, isLoading: false }),
    });
  } else if (type === UPDATE_RESOURCE) {
    const { id, data: entity } = payload || {};
    return handle(state, action, {
      start: prevState => ({
        ...prevState,
        loadingEntities: {
          ...prevState.loadingEntities,
          [id]: true,
        },
      }),
      success: prevState => {
        return {
          ...prevState,
          entities: {
            ...prevState.entities,
            [entity.id]: entity,
          },
        };
      },
      finish: prevState => ({
        ...prevState,
        loadingEntities: {
          ...prevState.loadingEntities,
          [entity.id]: false,
        },
      }),
    });
  } else if (type === UPDATE_PRICE) {
    const { id, price } = payload;
    const { entities } = state;

    return {
      ...state,
      entities: {
        ...entities,
        [id]: {
          ...entities[id],
          price,
        },
      },
    };
  }
  return state;
}
