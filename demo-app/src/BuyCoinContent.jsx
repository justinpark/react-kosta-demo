import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BuyCoinContent extends PureComponent {
  render() {
    const { coinCode } = this.props;
    return (
      <div>
        <h1>
          코인 구매 하기
        </h1>
        <h4>구매하려는 코인: {coinCode}</h4>
      </div>
    );
  }
}

BuyCoinContent.propTypes = {

};

export default BuyCoinContent;
