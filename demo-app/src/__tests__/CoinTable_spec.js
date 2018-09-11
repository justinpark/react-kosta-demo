import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import wrap from 'mocha-wrap';

import CoinTable from '../CoinTable';

const getWrapper = props => shallow(
  <CoinTable {...props} />
).dive().dive().dive();

describe('CoinTable', () => {
  it('renders', () => {
    expect(() => {
      render(<CoinTable />);
    }).not.to.throw();
  });

  it('renders empty message', () => {
    const emptyMessage = '비어있음';
    const wrapper = getWrapper({ emptyMessage });
    expect(wrapper.html()).to.include(emptyMessage);
  });

  describe('with coins', () => {
    const expectedName = 'fake coin';
    const coins = [{
      name: expectedName,
    }];

    it('renders coin list', () => {
      const wrapper = getWrapper({ coins });
      expect(wrapper.html()).to.include(expectedName);
    });
  });
});
