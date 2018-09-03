const objectOne = { one: 1, two: 2 };
const objectTwo = { three: 3, four: 4 };

const combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectOne.three,
  four: objectOne.four,
};

const combined = {
  ...objectOne,
  ...objectTwo,
};
