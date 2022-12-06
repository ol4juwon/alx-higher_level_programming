#!/usr/bin/node
const c = parseInt(process.argv[2]);
function factorial (num) {
  let fact = 1;
  while ( num > 0) {
    fact *= num;
    num--;
  }
  return fact;
};
console.log(factorial(Number(c)));
