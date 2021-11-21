const inputs = document.querySelectorAll("input")
console.log(inputs)
var list = document.getElementById("list")
var par = document.createElement('p')
var img = document.createElement('img');
// var form = document.forms["my-form"]
const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log(list)
    const { foodName, price, description, category, url } = document.forms["my-form"]
console.log()
const newEl = "hello";
    list.innerHTML += newEl;
    event.target.reset()
}