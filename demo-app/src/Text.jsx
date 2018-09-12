import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LoadingConsumer } from './LoadingProvider';
import withLoading from './withLoading';

const PureText = ({ children }) => (
  <div>
    {children}
  </div>
);
const PureTextWithLoading = withLoading(true)(PureText)

class Text extends PureComponent {
  render() {
    const { children, noLoading } = this.props;
    if (noLoading) {
      return (
        <PureText>
          {children}
        </PureText>
      )
    }
    return (
      <LoadingConsumer>
        {(loading) => (
          <PureTextWithLoading isLoading={loading}>
            {children}
          </PureTextWithLoading>
        )}
      </LoadingConsumer>
    );
  }
}

Text.propTypes = {
  children: PropTypes.string,
  noLoading: PropTypes.bool,
};

export default Text;
