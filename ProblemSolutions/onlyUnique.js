// NOT DONE
// const arr = [2019, 2020, 2019, 2018, 2020, 2021, 2030, 2020, 2019];

// // Using Array.filter
// const useFilter = arr => {
//     return arr.filter((value, index, self) => {
//         return self.indexOf(value) === index;
//     });
// };

// const result = useFilter(arr);
// console.log(result);

// NEED TO BE CHECKED
const onlyUnique = (arr) => {
    let unique = [];
    let repeated = [];
    arr.filter(value, index, self){
        if (self[index] === value) {
            repeated.push(value)
        }
    }
}
console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5]))