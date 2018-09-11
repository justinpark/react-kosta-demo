import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LoadingProvider, { LoadingConsumer } from '../LoadingProvider';
import Text from '../Text';
import withLoading from '../withLoading';

const TextWithLoading = withLoading(true)(Text);
const TextWithLoader = withLoading(false)(Text);

const MyApp = ({ isLoading }) => (
  <LoadingProvider loading={isLoading}>
    <div>
      바디 컨텐츠
      <LoadingConsumer>
        {loading => <TextWithLoading isLoading={loading}>'안녕하세요'</TextWithLoading>}
      </LoadingConsumer>
      중간 내용
      <LoadingConsumer>
        {loading => <TextWithLoader isLoading={loading}>반갑습니다</TextWithLoader>}
      </LoadingConsumer>
    </div>
  </LoadingProvider>
);

storiesOf('LoadingProvider', module)
  .add('default', () => <MyApp />)
  .add('with loading', () => <MyApp isLoading/>);
