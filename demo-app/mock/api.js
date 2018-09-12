const nameMap = [{
  code: 'BTX',
  name: '비트코인'
}, {
  code: 'RXP',
  name: '리플'
}, {
  code: 'ETH',
  name: '이더리움'
}];

module.exports = function() {
  return {
    transactions: Array(50).fill('').map((_, i) => ({
      id: i + 1,
      ...nameMap[i % 3],
      price: Math.random(),
      createAt: +new Date() - i * 1000 * 60,
    })),
    coins: [
      {
        id: 1,
        code: 'BTX',
        name: '비트코인',
        totalValue: 12391230000,
        currentValue: 1020000,
      }, {
        id: 2,
        code: 'RXP',
        name: '리플',
        totalValue: 1230000,
        currentValue: 20000,
      }, {
        id: 3,
        code: 'ETH',
        name: '이더리움',
        totalValue: 30000,
        currentValue: 300,
      }
    ],
    users: [
      {
        id: 1,
        name: 'J',
        credit: 1000000000,
      },
    ],
  };
}
