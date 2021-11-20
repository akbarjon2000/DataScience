"use strict";

var inputs = document.querySelectorAll("input");
var list = document.getElementById("list");
var par = document.createElement('p');
var img = document.createElement('img'); // var form = document.forms["my-form"]

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target[0].value);
  console.log(list);
  var _document$forms$myFo = document.forms["my-form"],
      foodName = _document$forms$myFo.foodName,
      price = _document$forms$myFo.price,
      description = _document$forms$myFo.description,
      category = _document$forms$myFo.category,
      url = _document$forms$myFo.url;
  event.target.value ? alert("good") : alert("fiil in the form");
  var newEl = "\n        <li>\n\n            <h1>".concat(foodName.value, "</h1>\n        </li>\n        \n    ");
  list.innerHTML += newEl;
  event.target.reset();
};