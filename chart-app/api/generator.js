const getPrices = (current, moment) => Array(30).fill('').map((_, i) => {
  const isUp = parseInt(Math.random() * 2) > 0 ? 1 : -1;
  const price = current + (parseInt(Math.random() * current, 10) / 100) * isUp;
  const start = current + (parseInt(Math.random() * current, 10) / 100) * isUp;
  const end = current + (parseInt(Math.random() * current, 10) / 100) * isUp;

  return {
    id: i + 1,
    price,
    start,
    end,
    date: moment().add(i - 30, 'days').format()
  };
});

module.exports = function() {
  const moment = require('moment');
  return {
    coins: [
      {
        id: 'BTC',
        name: '비트코인',
        prices: getPrices(7350000, moment)
      },
      {
        id: 'ETH',
        name: '이더리움',
        prices: getPrices(230000, moment)
      },
      {
        id: 'XRP',
        name: '리플',
        prices: getPrices(300, moment)
      }
    ],
  };
}
