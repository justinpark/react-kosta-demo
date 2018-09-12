import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Toast from '../Toast';

storiesOf('Toast', module)
  .add('default', () => <Toast />)
  .add('with visible', () => <Toast message="안녕하세요" visible />);
