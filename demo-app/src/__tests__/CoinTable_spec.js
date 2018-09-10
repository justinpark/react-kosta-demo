import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import wrap from 'mocha-wrap';

import CoinTable from '../CoinTable';

describe('CoinTable', () => {
  it('renders', () => {
    expect(() => {
      render(<CoinTable />);
    }).not.to.throw();
  });
});
