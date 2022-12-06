#!/usr/bin/node
const { dict } = require('./101-data');
const keys = Object.keys(dict);
const values = Object.values(dict);
let matched;
let index;
const result = {};
for (let i = 0; i < values.length; i++) {
  index = JSON.stringify(values[i]);
  result[index] = [];
  matched = keys.filter((key) => values[i] === dict[key]);
  matched.forEach((item) => { result[index].push(item); });
}
console.log(result);
