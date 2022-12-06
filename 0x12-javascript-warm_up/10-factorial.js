#!/usr/bin/node
const c = parseInt(process.argv[2]);
const factorial = ( num ) => {
  let fact = 1;
  while( num > 0){
    fact *= num;
    num--;
}
return fact;
};
console.log(factorial(c));
