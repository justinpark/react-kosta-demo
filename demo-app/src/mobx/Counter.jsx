import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import store from './store';

class Counter extends PureComponent {
  render() {
    return (
      <div>
        <h1>Counter: {store.elapsedTime}</h1>
        <input value={store.counter}/>
        <button className="btn" onClick={() => { store.counter++;store.tick(); }}>증가</button>
        <button className="btn" onClick={() => store.counter--}>감소</button>
      </div>
    );
  }
}

Counter.propTypes = {

};

export default observer(Counter);
