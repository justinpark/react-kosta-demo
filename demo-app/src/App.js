import React, { Component } from 'react';
import logo from './logo.svg';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import defaultProps from 'recompose/defaultProps';
import { Provider } from 'react-redux';

import AppNav from './AppNav';
import CoinTable from './CoinTable';
import withLoading from './withLoading';
import withError from './withError';
import Counter from './mobx/Counter';
import configureStore from './configureStore';
import Api from './Api';
import CoinTableContainer from './containers/CoinTableContainer';
import ModalProvider from './ModalProvider';
import ToastContainer from './containers/ToastContainer';
import FilterContainer from './containers/FilterContainer';
// const CoinTableWithLoading = compose(
//   withError('서버에 이상있음'),
//   defaultProps({
//     coins: [],
//   }),
//   mapProps(({ coins, ...otherProps }) => ({
//     ...otherProps,
//     coins: coins.map(({
//       name,
//       total_value: totalValue,
//       current_value: currentValue,
//     }) => ({
//         name,
//         totalValue,
//         currentValue,
//       })),
//   })),
// )(CoinTable);
const AppNavWithLoading = compose(
  withError('관리자에게 문의해주세요'),
  withLoading,
)(AppNav);

const CoinTableWithLoading = withLoading(false)(CoinTable);

// var str = 'name=park&age=20&height=175cm';
// str.split('&');

// var a? = [1,2,3,4,5];
// prevValue = 3, 3, 2
// const sum = arr => arr.reduce(function(prevValue, value) {
//   var total = prevValue + value;
//   return total;
// }, 0);
// console.log(sum(a), 'total');
// [{ key: 'name', value: 'park' }, { }, {}];
// => { name: 'park' };
  // ['name=park', 'age=20', 'height=175cm']
  // [{ key: 'name', value: 'park' }, { }, {}];
  // chunks.forEach(function(chunk, index) {
  //   var [key, value] = chunk.split('=');
  //   result[key] = value;
  // });


// clearTimeout(id)
// var id = setTimeout
const debounce = function(func, delay) {
  let prevJob;
  return function(...args) {
    if (prevJob) {
      clearTimeout(prevJob);
    }
    const self = this;
    prevJob = setTimeout(function() {
      console.log(self, 'self');
      console.log(this, 'this');
      func.apply(self, args);
    }, delay);
  };
};

var getList = (args) => console.log('getList', args);
var debouncedList = debounce(getList, 1000);


const parse = str =>
  str.split('&') // ['name=park', 'age=20', 'height=175cm']
    .map((chunk) => chunk.split('=')) // [['name','park'], ['age','20'], ['height','175cm']]
    .reduce((prevValue, [key, value]) => ({ // prevValue: {}, ['name', 'park']
      ...prevValue,
      [key]: value, // ['name']: 'park'
    }), {});

class App extends Component {
  constructor(props) {
    super(props);
    const initState = {
      user: {
        name: '아무개',
        height: '170cm',
      },
    };
    this.store = configureStore(initState);
  }
  componentDidMount() {
    Api.get('transactions');
  }
  render() {
    const coins = [{
      name: '비트코인',
      total_value: '142조',
      current_value: '8,200,000원',
    }, {
      name: '이더리움',
      total_value: '30조',
      current_value: '200,000원',
    }, {
      name: '리플',
      total_value: '12조',
      current_value: '400원',
    }];

    return (
      <Provider store={this.store}>
        <ModalProvider>
          <div className="App">
            <AppNav />
            <FilterContainer />
            <CoinTableContainer />
            <ToastContainer />
          </div>
        </ModalProvider>
      </Provider>
    );
  }
}

export default App;
