#!/usr/bin/node
exports.esrever = function (list) {
  const newArr = [];
  list.forEach((item) => { newArr.unshift(item); });
  return (newArr);
};
