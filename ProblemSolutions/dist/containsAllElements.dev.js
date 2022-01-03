"use strict";

// NEED TO BE CHECKED
// const containsAllElements = (arr1, arr2) => {
//     console.log(arr1.join('') === arr2.join(''))
// }
// console.log(containsAllElements(["monday", "tuesday"], ["tuesday"])) // false
// let arr1 = ["monday", "tuesday"].join('');
// let arr2 = ["monday", "tuesday"].join('');
// console.log(2 === '2')
var data = [{
  "name": "McKenzie, Stroman and DuBuque",
  "price": 6.7,
  "category": "breakfast",
  "quantity": 10
}, {
  "name": "Leffler and Sons",
  "price": 4.39,
  "category": "lunch",
  "quantity": 4
}, {
  "name": "Okuneva-Moore",
  "price": 2.16,
  "category": "dinner",
  "quantity": 4
}, {
  "name": "Crooks-Rath",
  "price": 3.34,
  "category": "lunch",
  "quantity": 10
}, {
  "name": "Reynolds, O'Hara and Jacobs",
  "price": 3.65,
  "category": "breakfast",
  "quantity": 6
}, {
  "name": "Gerlach Group",
  "price": 9.3,
  "category": "dinner",
  "quantity": 9
}, {
  "name": "Little-Goodwin",
  "price": 2.02,
  "category": "breakfast",
  "quantity": 1
}, {
  "name": "McDermott Inc",
  "price": 8.3,
  "category": "lunch",
  "quantity": 7
}, {
  "name": "Bauch-McCullough",
  "price": 8.15,
  "category": "dinner",
  "quantity": 1
}, {
  "name": "Gerlach and Sons",
  "price": 3.76,
  "category": "lunch",
  "quantity": 6
}]; // const res = (arr) => {
//     let result = 0;
//     arr.forEach((value) => {
//         result += value.price * value.quantity
//     })
//     return result
// }
// console.log(res(data))

var dashboard = function dashboard(arr) {
  var breakfast = 0;
  var lunch = 0;
  var dinner = 0;
  arr.map(function (item) {
    if (item.category === "breakfast") {
      breakfast += item.price * item.quantity;
    } else if (item.category === "lunch") {
      lunch += item.price * item.quantity;
    } else {
      dinner += item.price * item.quantity;
    }
  });
  return ["breakfast: ".concat(breakfast), "lunch: ".concat(lunch), "dinner: ".concat(dinner)];
};

console.log(dashboard(data));