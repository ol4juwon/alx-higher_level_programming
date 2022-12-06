#!/usr/bin/node
exports.addMeMaybe = function (x, callBack) {
  x++;
  callBack(x);
};
