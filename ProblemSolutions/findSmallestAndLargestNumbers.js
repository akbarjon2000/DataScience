//DONE
// const findSmallestAndLargestNumbers = (arr) => {
//     let Max = arr[0];
//     let Min = arr[0];
//     let newArr = []
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > Max) {
//             Max = arr[i]
//         }
//         else if (arr[i] < Min) {
//             Min = arr[i];
//         }
//     }

//     newArr.push(Min, Max);
//     return newArr
// }
// console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2, 9]))



//SECOND WAY


const findSmallestAndLargestNumbers = (arr) => {
    let sorted = arr.sort((a, b) => a - b);
    let Min = sorted[0];
    let Max = sorted[arr.length - 1]
    console.log(Min, Max)
}
console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2, 9]))
