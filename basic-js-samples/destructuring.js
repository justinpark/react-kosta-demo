const props = {
  name: 'robin',
  obj: {
    deepDive: ['first'],
  },
};

const name = props.name;

const { name } = props;

// deep dive
const { obj: { deepDive } } = props;
console.log(deepDive);

const { obj: { deepDive: [firstArrayValue] } } = props;
console.log(firstArrayValue);

const array = ['one', 'two'];

const first = array[0];
const second = array[1];

const [ first, second, three = 'empty' ] = array;
const three = array[2] || 'empty';
