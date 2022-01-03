"use strict";

var numInStr = function numInStr(str) {
  var arr = str.split('');
  var result = 0;
  arr.map(function (value) {
    if (parseInt(value) !== NaN) {
      result += value;
    } // console.log(typeof (parseInt(value)))

  });
  return result;
};

console.log(numInStr('webbrain1 Academy2'));
var str = 'webbrain1 Academy2';
var arr = str.split('');
console.log(arr.map(function (value) {
  return parseInt(value) !== isNaN;
}));