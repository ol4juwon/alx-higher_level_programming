#!/usr/bin/node
const args = process.argv;
const len = args.length;
const newArr = [];
let startIndex = 2;
if (len <= 3) {
    console.log(0);
} else {
  while( startIndex < len) {
    newArr.push(args[startIndex]);
    startIndex++;
  }
  newArr.sort();
  console.log(newArr[newArr.length -2]);
}
