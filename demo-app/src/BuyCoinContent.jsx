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
    this.state = {
      price: props.price,
    };
  }

  componentDidUpdate({ price: newPrice }) {
    if (this.props.price !== newPrice) {
      this.setState({ price: newPrice });
    }
  }

  handlePriceChange(newPrice) {
    this.setState({ price: newPrice });
  }

  render() {
    const { id, name, updatePrice, ...otherAttrs } = this.props;
    const { price } = this.state;
    return (
      <div>
        <h1>
          가격 수정 하기
        </h1>
        <h4>구매하려는 코인: {name}</h4>
        <h6></h6>
        <Text
          noLoading={noLoading ? noLoading : undefined}
          {...(isLoading && { hasFetched: true, })}
        >가격</Text>
        <Input value={price} onChange={this.handlePriceChange}/>
        총 구매 비용: <Text noLoading>얼마</Text>
        <Button onClick={() => updatePrice(id, {
          ...otherAttrs,
          name,
          price: Number(price),
        })}>수정</Button>
      </div>
    );
  }
}

BuyCoinContent.propTypes = {

};

export default BuyCoinContent;
