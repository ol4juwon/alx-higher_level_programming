#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  const apps = list.filter((item) => { return item === searchElement; }).length;
  return (apps);
};
