const list = [{
  list_id: 1,
  list_value: '10',
}, {
  list_id: 2,
  list_value: '20',
}, {
  list_id: 3,
  list_value: '30',
}];

const qs = 'banana=10&apple=20&orange=30';
const chunks = qs.split('&');

let items = [];
let cart = {};
let total = 0;

chunks.forEach((chunk) => {
  const [ id, value ] = chunk.split('=');
  items.push({ id, value });
  cart[id] = value;
  total += Number(value);
});

const items = chunks
  .map(chunk => chunk.split('='))
  .map(([ id, value ]) => ({ id, value }));

const cart = items.reduce((res, { id, value }) => ({ ...res, [id]: Number(value) }), {});

const items = list.map(({ list_id: id, list_value: value }) => ({ id, value }));
const els = list.map(({ list_id: id, list_value: value }) => `${id}: ${value}`);
