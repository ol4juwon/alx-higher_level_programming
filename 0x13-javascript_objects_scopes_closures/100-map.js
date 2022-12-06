#!/usr/bin/node
const x = require('./100-data.js');
const { list } = x;
console.log(list);
const newList = list.map((item, index) => { return item * index; });
console.log(newList);
