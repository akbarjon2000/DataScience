
let MyFood = [];
var list = document.getElementById("list")
var par = document.createElement('p')
var img = document.createElement('img');
// var form = document.forms["my-form"]
const renderLocalStorage = () => {
    console.log('rendering')
    {
        JSON.parse(localStorage.MyFood).map((value) => (

            list.innerHTML += `
            <div style="display:flex;" onclick = "onDelete()" value = ${value.id}>
            <div style = "background-image: url(${value.url});   width: 400px;
            height: 300px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            border: 5px solid orange;"></div>
            <div style = "display:flex; flex-direction: column; align-items: center; width:500px; padding: 20px;">
            <p class = 'category'>${value.category}</p>
            <div class = "firstLine">
            <p class = 'foodName'>${value.foodName}</p>
            <p class = 'price'>$ ${value.price}</p>
            </div>
            <p class = 'description'>${value.description}</p>
            </div>
            </div>
            `
        ))
    }
}
document.body.addEventListener('load', renderLocalStorage);
const handleSubmit = (event) => {
    event.preventDefault();

    const foodName = document.getElementById("foodName").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const url = document.getElementById("url").value;
    let menu = {
        id: Date.now(),
        foodName,
        price,
        description,
        category,
        url,
    }

    let Food = JSON.parse(localStorage.MyFood || "[]");
    if (Food?.length === 0) {
        MyFood.push(menu);
    } else {
        MyFood = [...Food, menu];
    }
    localStorage.setItem("MyFood", JSON.stringify(MyFood));
    {
        JSON.parse(localStorage.MyFood).map((value) => (

            list.innerHTML += `
            <div style="display:flex;" value = ${value.id} id = "item">
            <div style = "background-image: url(${value.url});   width: 400px;
            height: 300px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            border: 5px solid orange;"></div>
            <div style = "display:flex; flex-direction: column; align-items: center; width:500px; padding: 20px;">
            <p class = 'category'>${value.category}</p>
            <div class = "firstLine">
            <p class = 'foodName'>${value.foodName}</p>
            <p class = 'price'>$ ${value.price}</p>
            </div>
            <p class = 'description'>${value.description}</p>
            </div>
            </div>
            `
        ))
    }
    // document.getElementById("item").addEventListener("click", onDelete)
    // const onDelete = (id) => {
    //     JSON.parse(localStorage.MyFood).filter((value) => value.id !== id)


    // }
    document.getElementById("foodName").value = ''
    document.getElementById("category").value = ''
    document.getElementById("price").value = ''
    document.getElementById("description").value = ''
    document.getElementById("url").value = ''
}
// const handleSubmit = (event) => {
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