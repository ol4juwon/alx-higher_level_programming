#!/usr/bin/node
const { readFileSync, writeFile } = require('fs');
const { argv } = require('process');
const paths = argv.splice(2);
const getContent = (path) => {
  return readFileSync(path, 'utf8');
};
const writeContent = (path, content) => {
  return writeFile(path, content, 'utf8', err => { if (err) throw err.message; });
};

const newString = `${getContent(paths[2])} ${getContent(paths[3])}`;
writeContent(paths[4], newString);
