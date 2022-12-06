#!/usr/bin/node
const x = process.argv[2];
if (!isNaN(x)) {
  while(x > 0) {
    console.log('C is fun');
    x--;
  }
} else {
  console.log('Missing number of occurrences');
}