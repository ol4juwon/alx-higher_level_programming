#!/usr/bin/node
const { readFileSync, writeFile } = require('fs');
const { argv } = require('process');
const paths = argv.splice(2);
const getContent = (path) => {
  return readFileSync(path, 'utf-8');
};
const writeContent = (path, content) => {
  return writeFile(path, content, err => { if (err) throw err; });
};

const newString = `${getContent(paths[2])} ${getContent(paths[3])}`;
writeContent(paths[4], newString);
