#!/usr/bin/node
const SquareParent = require('./5-square.js');
class Square extends SquareParent {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c) {
      this.print(c);
    } else {
      this.print('X');
    }
  }

  print (c) {
    for (let i = 0; i < size; i++) {
      let newX = '';
      for (let j = 0; j < size; j++) {
        newX += `${c}`;
      }
      console.log(newX);
    }
  }
}
module.exports = Square;
