"use strict";

var list = document.getElementById("list");
var par = document.createElement('p');
var img = document.createElement('img'); // var form = document.forms["my-form"]

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  var foodName = document.getElementById("foodName").value;
  var price = document.getElementById("price").value;
  var description = document.getElementById("description").value;
  var category = document.getElementById("category").value;
  var url = document.getElementById("url").value;
  var menu = [{
    id: Date.now(),
    foodName: foodName,
    price: price,
    description: description,
    category: category,
    url: url
  }];
  var MyFood = [];
  MyFood.push(menu);
  console.log(MyFood);
  localStorage.setItem('MyFood', MyFood);
  console.log(localStorage);
  list.innerHTML = "<div style = \"background-image: url(".concat(url, ");   width: 400px;\n  height: 300px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  border: 5px solid orange;\"></div>\n    <div style = \"display:flex; flex-direction: column; align-items: center; width:500px; padding: 20px;\">   \n    <p class = 'category'>").concat(category, "</p>\n    <div class = \"firstLine\">\n    <p class = 'foodName'>").concat(foodName, "</p>\n    <p class = 'price'>$ ").concat(price, "</p>\n    </div>\n    <p class = 'description'>").concat(description, "</p>\n    </div>\n    ");
  document.getElementById("foodName").value = '';
  document.getElementById("category").value = '';
  document.getElementById("price").value = '';
  document.getElementById("description").value = '';
  document.getElementById("url").value = '';
};