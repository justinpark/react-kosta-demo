import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from '../Text';
import withLoading from '../withLoading';

const TextWithLoading = withLoading(true)(Text);

storiesOf('Text', module)
  .add('default', () => <Text>안녕하세요</Text>)
  .add('with loading', () => <TextWithLoading isLoading>안녕하세요</TextWithLoading>);
