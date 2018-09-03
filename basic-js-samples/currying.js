function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

const multiplyX = x => a => multiply(a, x);

// a.k.a
function multiplyX(x) {
  return function(a) {
    return multiply(a, x);
  }
}


// x
// => x * 2
// => (x * 2) * 3
// => ((x * 2) * 3) + 4

const equation = a => b => c => x => ((x * a) * b) + c;
const fomula = equation(2)(3)(4);
const result = fomula(x);

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(a, 2);
const addX = x => a => add(x, a);
const fomula = x => addX(4)(multiplyX(3)(multiplyX(2)(x)));


function compose() {
  const funcs = Array.prototype.slice.call(arguments);
  return funcs.reduce(
    function (funcA, funcB) {
      return function() {
        const args = Array.prototype.slice.call(arguments);
        return funcA(funcB.call(this, args));
      }
    },
    function(k) {
      return k;
    },
  );
}
// a.k.a.
// const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg);

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(a, 2);
const addX = x => a => add(x, a);

// x
// => x * 2
// => (x * 2) * 3
// => ((x * 2) * 3) + 4
const fomula = compose(
  multiplyX(2),
  multiplyX(3),
  addX(4),
);
