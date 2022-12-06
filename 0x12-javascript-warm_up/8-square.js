#!/usr/bin/node
let x = process.argv[2];
if (isNaN(x)) {
  console.log('Missing size');
}
let i = 0, j = 0;
let newx = '' ;
for (; i < x; i++) {
    for (; j < x; j++) {
        newx += 'X';
    }
    console.log(newx);
}
