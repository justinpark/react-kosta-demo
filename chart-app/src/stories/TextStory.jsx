import React from 'react';

import { storiesOf } from '@storybook/react';
import Text from '../components/Text';

storiesOf('Text', module)
  .add('with text', () => <Text>Hello Text</Text>);
