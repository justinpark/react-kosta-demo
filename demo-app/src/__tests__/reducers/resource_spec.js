import { expect } from 'chai';

import resourceReducer, { initialState } from '../../reducers/resource';
import { addResourceAction } from '../../actions/resourceActions';

describe('resourceReducer', () => {
  it('returns initial state', () => {
    expect(resourceReducer()).to.eq(initialState);
  });

  it('type: ADD_RESOURCE', () => {
    const dispatch = addResourceAction();
    const newState = resourceReducer(initialState, dispatch);
    expect(newState).to.eql({
      isLoading: false,
      hasFetched: true,
    });
  });

  /// ....
});
