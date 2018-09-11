import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CoinTable from '../CoinTable';

const coins = [{
  name: '내동전'
}];

storiesOf('CoinTable', module)
  .add('default', () => <CoinTable />)
  .add('with coins', () => <CoinTable coins={coins} />);
