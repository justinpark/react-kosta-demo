// ECMA 6
class Shape {
  static staticProps = {
      staticVar1: 'sval1',
  };
  var1 = 'var1';

  constructor (id, x, y) {
      this.id = id
      this.move(x, y)
  }
  move (x, y) {
      this.x = x
      this.y = y
  }
}

// ECMA 5
var Shape = function (id, x, y) {
  this.id = id;
  this.var1 = 'var1';
  this.move(x, y);
};
Shape.staticProps = {
  staticVar1: 'sval1'
};
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
