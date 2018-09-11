const nameMap = ['비트코인', '리플', '이더리움'];


module.exports = function() {
  return {
    transactions: Array(50).fill('').map((_, i) => ({
      id: i + 1,
      name: nameMap[i % 3],
      price: Math.random()
    })),
  };
}
