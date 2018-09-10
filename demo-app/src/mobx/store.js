import { observable, decorate } from 'mobx';

class Store {
  counter = 0;
}

decorate(Store, {
  counter: observable
});

export default new Store();
