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
      price: Math.random()
    })),
    coins: [{
      code: 'BTX',
      name: '비트코인',
      totalRevenue: 12391230000,
      currentValue: 1020000,
    }, {
      code: 'RXP',
      name: '리플',
      totalRevenue: 1230000,
      currentValue: 20000,
    }, {
      code: 'ETH',
      name: '이더리움',
      totalRevenue: 30000,
      currentValue: 300,
    }],
  };
}
