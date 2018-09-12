const nameMap = ['비트코인', '리플', '이더리움'];


module.exports = function() {
  return {
    transactions: Array(50).fill('').map((_, i) => ({
      id: i + 1,
      name: nameMap[i % 3],
      price: Math.random()
    })),
    coins: [{
      name: '비트코인',
      totalRevenue: 12391230000,
      currentValue: 1020000,
    }, {
      name: '리플',
      totalRevenue: 1230000,
      currentValue: 20000,
    }, {
      name: '이더리움',
      totalRevenue: 30000,
      currentValue: 300,
    }],
  };
}
