import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Input from './Input';
import Text from './Text';
import Button from './Button';

class BuyCoinContent extends PureComponent {
  render() {
    const { name, price } = this.props;
    return (
      <div>
        <h1>
          가격 수정 하기
        </h1>
        <h4>구매하려는 코인: {name}</h4>
        <h6></h6>
        <Text>가격</Text>
        <Input value={price}/>
        총 구매 비용: <Text>얼마</Text>
        <Button>수정</Button>
      </div>
    );
  }
}

BuyCoinContent.propTypes = {

};

export default BuyCoinContent;
