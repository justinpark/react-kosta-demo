import { decorate, observable, computed, action } from 'mobx';

class TransactionStore {
  price = 0;
  amount = 0;

  get total() {
    return this.price * this.amount;
  }

  submit() {
    this.price = 0;
    this.amount = 0;
  }
}
decorate(TransactionStore, {
  price: observable,
  amount: observable,
  total: computed,
  submit: action,
});

export default new TransactionStore();
