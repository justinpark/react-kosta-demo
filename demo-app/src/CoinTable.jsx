import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withLoading from './withLoading';
import { SELL_MODAL, BUY_MODAL, ModalConsumer } from './ModalProvider';

// PureComponent => SFC
function CoinTable({ coins, fetch, message, toggle, emptyMessage }) {
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
            {coins.map(({ id, name, totalValue, currentValue }) => (
              <tr key={`tr_${id}`}>
                <td>{name}</td>
                <td>{totalValue}</td>
                <td>{currentValue}</td>
                <td>
                  <ModalConsumer>
                    {({ openModal }) => (
                      <>
                        <button className="btn" onClick={() => openModal(BUY_MODAL, { id })}>
                          매수
                        </button>
                        <button className="btn red lighten-4" onClick={() => openModal(BUY_MODAL, { id })}>
                          매도
                        </button>
                      </>
                    )}
                  </ModalConsumer>
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
