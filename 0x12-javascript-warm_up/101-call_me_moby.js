#!/usr/bin/node
exports.callMeMoby = function (x, callBack) {
  while (x > 0) {
    callBack();
    x--;
  }
};
