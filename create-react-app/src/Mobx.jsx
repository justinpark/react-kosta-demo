import React from 'react';
import { observable, computed, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import { serializable } from 'serializr';

const store = observable({ second: 0 });

setTimeout(runInAction(() => {
  store.second++;
}), 1000);

@observer
class Timer extends React.Component {

  render() {
    return <div>{store.second}</div>
  }
}

class Store {
  api = new API();
  @observable data;

  toJSON() {
    const { api, ...copy} = Object.assign({}, this);
    return copy;
  }
}

class Store {
  api = new API();
  @serializable @observable data;

  @computed get area() {
    return this.data.x + this.data.y;
  }

  toJSON() {
    const { api, ...copy} = Object.assign({}, this);
    return copy;
  }
}



export default Timer;
