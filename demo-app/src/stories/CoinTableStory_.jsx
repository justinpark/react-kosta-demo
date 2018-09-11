import React from 'react';

import { storiesOf } from '@storybook/react';
import CoinTable from '../CoinTable';

storiesOf('CoinTable', module)
  .add('without coins', () => <CoinTable />)
  .add('with coins', () => (
    <CoinTable coins={[{ name: '마이코인' }]} />
  ));
