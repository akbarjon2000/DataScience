const inputs = document.querySelectorAll("input")
var list = document.getElementById("list")
var par = document.createElement('p')
var img = document.createElement('img');
// var form = document.forms["my-form"]
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(list)
    const { foodName, price, description, category, url } = document.forms["my-form"]
    event.target.value ? alert("good") : alert("fiil in the form")
    const newEl = `
        <li>

            <h1>${foodName.value}</h1>
        </li>
        
    `;
    list.innerHTML += newEl;
    event.target.reset()
}