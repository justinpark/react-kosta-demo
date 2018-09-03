// immutable
const a = 1;
const b = a + 1;

const ilist = [-1];
const list2 = ilist.concat(0);
const list3 = ilist.concat(0, 2);
const list4 = [...list3, 3, 4];
const list5 = [
  ...list3.slice(0, 1),
  1.5,
  ...list3.slice(2)
];
const [_, ...shiftedList] = list5;
const [...popedList, _] = shiftedList;

// mutable
let c = 1;
c = c + 1;

const list = [];
list.push(0);
list.push(2);

list.splice(0, 1, 1.5);
list.shift();
list.pop();
