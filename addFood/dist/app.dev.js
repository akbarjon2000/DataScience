"use strict";

var MyFood = [];
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
  localStorage.setItem("MyFood", "[]");
  MyFood = JSON.parse(localStorage.MyFood);
  MyFood.push(menu);
  localStorage.setItem("MyFood", JSON.stringify(MyFood));
  list.innerHTML = "<div style = \"background-image: url(".concat(url, ");   width: 400px;\n  height: 300px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  border: 5px solid orange;\"></div>\n    <div style = \"display:flex; flex-direction: column; align-items: center; width:500px; padding: 20px;\">\n    <p class = 'category'>").concat(category, "</p>\n    <div class = \"firstLine\">\n    <p class = 'foodName'>").concat(foodName, "</p>\n    <p class = 'price'>$ ").concat(price, "</p>\n    </div>\n    <p class = 'description'>").concat(description, "</p>\n    </div>\n    ");
  document.getElementById("foodName").value = '';
  document.getElementById("category").value = '';
  document.getElementById("price").value = '';
  document.getElementById("description").value = '';
  document.getElementById("url").value = '';
}; // const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("hello")
//     const foodName = document.getElementById("foodName").value;
//     const price = document.getElementById("price").value;
//     const description = document.getElementById("description").value;
//     const category = document.getElementById("category").value;
//     const url = document.getElementById("url").value;
//     let menu = [
//         {
//             id: Date.now(),
//             foodName,
//             price,
//             description,
//             category,
//             url,
//         }
//     ]
//     list.innerHTML = `
//     <div style = "display: flex;">
//     <div style = "background-image: url(${url});   width: 400px;
//     height: 300px;
//     background-size: cover;
//     background-position: center;
//     border-radius: 10px;
//     border: 5px solid orange;"></div>
//     <div style = "display:flex; flex-direction: column; align-items: center; width:500px; padding: 20px;">
//     <p class = 'category'>${category}</p>
//     <div class = "firstLine">
//     <p class = 'foodName'>${foodName}</p>
//     <p class = 'price'>$ ${price}</p>
//     </div>
//     <p class = 'description'>${description}</p>
//     </div>
//     </div>
//     `
//     const food = document.createElement('p');
//     food.innerText = foodName;
//     list.appendChild(food);
// }