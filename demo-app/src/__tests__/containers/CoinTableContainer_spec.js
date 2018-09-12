import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CoinTableContainer from '../../containers/CoinTableContainer';
import CoinTable from '../../CoinTable';
import mockStore from '../../mockStore';
import Api from '../../Api';

const getWrapper = (props, initState = {
  resource: {
    entities: [],
    isLoading: false,
  },
}) => shallow(
  <CoinTableContainer />,
  {
    context: {
      store: mockStore(initState),
    },
  }
);

describe('<CoinTableContainer>', () => {
  it('renders okay', () => {
    expect(() => {
      getWrapper();
    }).not.to.throw();
  });

  it('passes the entities values', () => {
    const expectedEntity = {
      id: 12,
      name: 'My Coin',
      price: 39478230,
    };
    const expectedLoading = true;
    const wrapper = getWrapper(null, {
      resource: {
        entities: {
          [expectedEntity.id]: expectedEntity,
        },
        ids: [expectedEntity.id],
        isLoading: expectedLoading,
      },
    });
    const { coins, isLoading, fetch } = wrapper.props();
    expect(coins.length).to.eq(1);
    expect(typeof fetch).to.eq('function');
    const fetchStub = sinon.stub(Api, 'get').returns(Promise.resolve({ data: [] }));
    expect(fetchStub.callCount).to.eq(0);
    fetch();
    expect(fetchStub.callCount).to.eq(1);
    expect(fetchStub.calledWith('transactions?_limit=10')).to.eq(true);
  });
});
