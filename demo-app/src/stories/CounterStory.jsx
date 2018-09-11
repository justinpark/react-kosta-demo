import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Counter from '../mobx/Counter';

storiesOf('Counter', module)
  .add('default', () => <Counter />);
