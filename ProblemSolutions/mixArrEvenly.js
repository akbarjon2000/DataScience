// SOMETHING IS NOT WORKING
const mix = (arr1, arr2) => {
    var MaxLength = Math.max(arr1.length, arr2.length)
    var MinLength = Math.min(arr1.length, arr2.length)
    let LastIndex = MaxLength - MinLength;
    let newArr = [];
    if (arr2.length > arr1.length) {
        for (let i = 0; i < MinLength; i++) {
            newArr.push(arr1[i], arr2[i]);
        }
        newArr.push(arr2.slice(-LastIndex).join(''));
    }
    if (arr1.length > arr2.length) {
        for (let i = 0; i < MinLength; i++) {
            newArr.push(arr1[i], arr2[i]);
        }
        newArr.push(arr1.slice(-LastIndex).join());
    }
    return newArr
}
console.log(mix(['a', 'c', 'e', 'g', 'i', 'l', 'm', 'n'], ['b', 'd', 'f', 'h', 'j', 'k']))
