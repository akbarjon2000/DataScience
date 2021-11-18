//DONE
const buildArray = (arr, indexes) => {
    let newArr = [];
    for (let i = 0; i < indexes.length; i++) {
        newArr.push(arr[indexes[i]]);
    }
    return newArr
}
console.log(buildArray(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4]))
