#!/usr/bin/node
const numArgs = process.argv.length;
console.log(numArgs);
if (numArgs < 3) {
  console.log('No argument');
} else if (numArgs === 3) {
  console.log('Argument found');
} else if ( numArgs > 3) {
  console.log('Arguments found');
}
