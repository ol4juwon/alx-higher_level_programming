#!/usr/bin/node
const str = process.argv[2];
if (!isNaN(parseInt(str))) {
  console.log(`My number: ${str}`);
} else {
  console.log('Not a number');
}
