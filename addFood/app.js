const inputs = document.querySelectorAll("input")
var list = document.getElementsByClassName("list")
var par = document.createElement('p')
function handleSubmit(event) {
    console.log(event)
    console.log(list)
    event.preventDefault()
    const { foodName, price, description, category, image } = document.forms['my-forms']

}