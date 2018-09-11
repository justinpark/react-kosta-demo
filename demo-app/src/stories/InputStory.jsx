import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../Input';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('with value', () => <Input value="my value" />)
  .add('change action', () => <Input onChange={action('onChange')} />)
  .add('blur action', () => <Input onBlur={action('onBlur')} />);
