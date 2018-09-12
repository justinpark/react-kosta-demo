import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Filter extends PureComponent {
  render() {
    const { coins, setFilter } = this.props;
    return (
      <div>
        <select style={{ display: 'block' }} onChange={(e) => setFilter('code', e.target.value)}>
          <option value="">선택해 주세요</option>
          {coins.map(({ name, code }) => (
            <option value={code}>{name}</option>
          ))}
        </select>
      </div>
    );
  }
}

Filter.propTypes = {

};

export default Filter;
