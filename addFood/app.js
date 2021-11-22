
var list = document.getElementById("list")
var par = document.createElement('p')
var img = document.createElement('img');
// var form = document.forms["my-form"]
const handleSubmit = (event) => {
    event.preventDefault();

    const foodName = document.getElementById("foodName").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const url = document.getElementById("url").value;
    let menu = [
        {
            id: Date.now(),
            foodName,
            price,
            description,
            category,
            url,
        }
    ]
    var MyFood = [];
    MyFood.push(menu);
    console.log(MyFood)
    localStorage.setItem('MyFood', MyFood)
    console.log(localStorage)
    list.innerHTML = `<div style = "background-image: url(${url});   width: 400px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  border: 5px solid orange;"></div>
    <div style = "display:flex; flex-direction: column; align-items: center; width:500px; padding: 20px;">   
    <p class = 'category'>${category}</p>
    <div class = "firstLine">
    <p class = 'foodName'>${foodName}</p>
    <p class = 'price'>$ ${price}</p>
    </div>
    <p class = 'description'>${description}</p>
    </div>
    `

    document.getElementById("foodName").value = ''
    document.getElementById("category").value = ''
    document.getElementById("price").value = ''
    document.getElementById("description").value = ''
    document.getElementById("url").value = ''
}