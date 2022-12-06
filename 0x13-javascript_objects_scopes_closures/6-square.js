#!/usr/bin/node
const SquareParent = require('./5-square.js');
class Square extends SquareParent {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c) {
      this.print('C');
    } else {
      this.print('X');
    }
  }

  print (c) {
    for (let i = 0; i < this.size; i++) {
      let newX = '';
      for (let j = 0; j < this.size; j++) {
        newX += `${c}`;
      }
      console.log(newX);
    }
  }
}
module.exports = Square;
