#!/usr/bin/node
const { dict } = require('./101-dict');
const keys = Object.keys(dict);
const values = Object.values(dict);

console.log(keys, values);
let matched;
let index;
const result = {};
for (let i = 0; i < values.length; i++) {
  index = JSON.stringify(values[i]);
  result[index] = [];
  matched = keys.filter((key) => values[index] === dict[key]);
  matched.forEach((item) => { result[index].push(item); });
}
console.log(result);
