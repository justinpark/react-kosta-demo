import { observable, decorate, computed, action } from 'mobx';

class Store {
  start = Date.now();
  current = Date.now();
  counter = 0;

  get elapsedTime() {
    return this.current - this.start + "milliseconds";
  }
  tick() {
    this.current = Date.now();
  }
}

decorate(Store, {
  // counter: observable,
  // current: observable,
  // elapsedTime: computed,
  tick: action,
});

export default new Store();
