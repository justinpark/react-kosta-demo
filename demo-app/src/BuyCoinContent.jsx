import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Input from './Input';
import Text from './Text';
import Button from './Button';

class BuyCoinContent extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.state = {
      price: props.price,
    };
  }

  componentDidUpdate({ price: newPrice }) {
    if (this.props.price !== newPrice) {
      this.setState({ price: newPrice });
    }
  }

  handleStockChange(newStock) {
    this.setState({ stock: newStock });
  }

  handlePriceChange(newPrice) {
    this.setState({ price: newPrice });
  }

  render() {
    const { id, name, updatePrice, ...otherAttrs } = this.props;
    const { price, stock } = this.state;
    const total = Number(price) * Number(stock);
    return (
      <div>
        <h1>
          구매하기 하기
        </h1>
        <h4>구매하려는 코인: {name}</h4>
        <h6></h6>
        <Text noLoading>가격</Text>
        <Input value={price} onChange={this.handlePriceChange}/>
        <Text noLoading>총 수량</Text>
        <Input value={stock} onChange={this.handleStockChange}/>
        총 구매 비용: <Text noLoading>{total}</Text>
        <Button onClick={() => updatePrice(id, Number(price))}>
          구매
        </Button>
      </div>
    );
  }
}

BuyCoinContent.propTypes = {

};

export default BuyCoinContent;
