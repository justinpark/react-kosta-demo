import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ModalProvider, { BUY_MODAL, ModalConsumer } from '../ModalProvider';
import Modal from '../Modal';
import Button from '../Button';

const MyComponent = ({ openModal }) => (
  <ModalConsumer>
    {({ openModal }) => (
      <Button onClick={() => openModal(BUY_MODAL, { coinCode: 'BTX' })}>창열기</Button>
    )}
  </ModalConsumer>
);

storiesOf('Modal', module)
  .add('open BUY_MODAL', () => (
    <ModalProvider>
      자식 노드
      <MyComponent />
    </ModalProvider>
  ));
