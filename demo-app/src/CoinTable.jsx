import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withLoading from './withLoading';
import { SELL_MODAL, BUY_MODAL } from './ModalProvider';

// PureComponent => SFC
function CoinTable({ coins, fetch, openModal, message, toggle, emptyMessage }) {
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
        {coins && (
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
        )}
        {!coins && (
          <tbody>
            <tr>
              <td colSpan="4">
                {emptyMessage}
              </td>
            </tr>
          </tbody>
        )}
      </table>
      <button className="btn" onClick={() => fetch()}>
        새로고침
      </button>
    </div>
  );
}
CoinTable.defaultProps = {
  emptyMessage: '자료없음',
};

CoinTable.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.any),
  emptyMessage: PropTypes.string,
};

export default withLoading(false)(CoinTable);
