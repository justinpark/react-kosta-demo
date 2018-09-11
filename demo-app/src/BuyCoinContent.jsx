import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Input from './Input';
import Text from './Text';
import Button from './Button';

import store from './stores/TransactionStore';

class BuyCoinContent extends PureComponent {
  render() {
    const { coinCode } = this.props;
    return (
      <div>
        <h1>
          코인 구매 하기
        </h1>
        <h4>구매하려는 코인: {coinCode}</h4>
        <h6></h6>
        <Text>가격</Text>
        <Input value={store.price}/>
        <Text>수량</Text>
        <Input value={store.amount}/>
        총 구매 비용: <Text>{store.total}</Text>
        <Button onClick={store.submit}>구매</Button>
      </div>
    );
  }
}

BuyCoinContent.propTypes = {

};

export default observer(BuyCoinContent);
