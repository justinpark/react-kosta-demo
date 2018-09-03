// ECMA 6
function f ([ name, val ]) {
  console.log(name, val)
}
function g ({ name: n, val: v }) {
  console.log(n, v)
}
function h ({ name, val }) {
  console.log(name, val)
}
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });

const props = {
  name: 'Justin',
};
const { name: nameProp } = props;

// ECMA 5
function f (arg) {
  var name = arg[0];
  var val  = arg[1];
  console.log(name, val);
};
function g (arg) {
  var n = arg.name;
  var v = arg.val;
  console.log(n, v);
};
function h (arg) {
  var name = arg.name;
  var val  = arg.val;
  console.log(name, val);
};
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });

var props = {
  name: 'Justin'
};
var nameProp = props.name;
