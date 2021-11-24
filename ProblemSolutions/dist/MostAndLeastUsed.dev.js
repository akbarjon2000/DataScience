"use strict";

var MostAndLeastUsed = function MostAndLeastUsed(str) {
  var sorted = str.split('').sort(function (a, b) {
    return a.localeCompare(b);
  });
  var obj = {};
  sorted.map(function (value) {
    for (var i = 0; i < sorted.length; i++) {
      for (var j = 0; j < sorted.length; j++) {
        if (sorted[i] === sorted[j]) {
          obj = {};
        }
      }
    }
  });
  console.log(sorted);
};

console.log(MostAndLeastUsed("ooooooooasdad"));