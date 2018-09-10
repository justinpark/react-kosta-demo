import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CoinTable from '../CoinTable';

describe('CoinTable', () => {
  it('renders', () => {
    expect(() => {
      shallow(<CoinTable />);
    }).not.to.throw();
  });
});
