import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import withModal, { SELL_MODAL, BUY_MODAL } from '../components/withModal';

const TestApp = ({ openModal, id, label }) => (
  <Button primary onClick={() => openModal(id)}>{label}</Button>
);

const TestAppwithModal = withModal(TestApp);

storiesOf('Modal', module)
  .add('openModal with SELL_MODAL', () => <TestAppwithModal id={SELL_MODAL} label={'판매'}/>)
  .add('openModal with BUY_MODAL', () => <TestAppwithModal id={BUY_MODAL} label={'구매'}/>);
