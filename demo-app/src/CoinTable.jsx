import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withState from 'recompose/withState';
import withModal, { SELL_MODAL, BUY_MODAL } from './withModal';
// PureComponent => SFC
function CoinTable({ coins, openModal, message, toggle, setToggle }) {
  return (
    <div>
      {toggle && message}
      <table>
        <thead>
          <tr>
              <th>코인</th>
              <th>시가총액</th>
              <th>실시간시세</th>
              <th>매수/매도</th>
          </tr>
        </thead>

        <tbody>
          {coins.map(({ name, totalValue, currentValue }) => (
            <tr key={`tr_${name}`}>
              <td>{name}</td>
              <td>{totalValue}</td>
              <td>{currentValue}</td>
              <td>
                <button className="btn" onClick={() => openModal(BUY_MODAL)}>
                  매수
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn" onClick={() => openModal(SELL_MODAL)}>
        매도
      </button>
    </div>
  );
}

CoinTable.propTypes = {

};

export default withModal(CoinTable);
