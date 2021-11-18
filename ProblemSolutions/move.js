//DONE
const move = (arr, index1, index2) => {
    indexOf = arr[index1]
    arr.splice(index1, 1, arr[index2]);
    arr[index2] = indexOf
    return arr
}
console.log(move([4, 5, 7, 8, 6], 3, 1)) // [4, 7, 5]
