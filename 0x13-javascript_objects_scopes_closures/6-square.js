#!/usr/bin/node
const SquareParent = require('./5-square.js');
class Square extends SquareParent {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let newX = '';
      for (let j = 0; j < this.height; j++) {
        newX += `${c}`;
      }
      console.log(newX);
    }
  }
}
module.exports = Square;
