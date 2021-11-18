//DONE
const hello = (arr) => {
    arr.sort((a, b) => 0.5 - Math.random())
    console.log(arr)
}

hello([1, 2, 3])