import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withLoading from './withLoading';
import { SELL_MODAL, BUY_MODAL, ModalConsumer } from './ModalProvider';

import LoadingProvider from './LoadingProvider';
import Text from './Text';

// PureComponent => SFC
function CoinTable({ coins, fetch, fetchCoins, message, toggle, emptyMessage, loadingEntities }) {
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
              <LoadingProvider loading={loadingEntities[id] || false}>
                <tr key={`tr_${id}`}>
                  <td>
                    <Text>{name}</Text>
                  </td>
                  <td><Text>{totalValue}</Text></td>
                  <td><Text>{currentValue}</Text></td>
                  <td>
                    <ModalConsumer>
                      {({ openModal }) => (
                        <React.Fragment>
                          <button className="btn" onClick={() => openModal(BUY_MODAL, { id })}>
                            매수
                          </button>
                          <button className="btn red lighten-4" onClick={() => openModal(SELL_MODAL, { id })}>
                            매도
                          </button>
                        </React.Fragment>
                      )}
                    </ModalConsumer>
                  </td>
                </tr>
              </LoadingProvider>
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
      <button className="btn" onClick={() => fetchCoins()}>
        코인고침
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
