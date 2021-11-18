// NEED TO BE CHECKED
const jumbledAlphabetically = [
    ["e", "d", "f"],
    ["a", "c", "b"],
    ["m", "o", "n"]
]

// const alphabetize = (arr) => {

// }
// console.log(alphabetize(jumbledAlphabetically))
let joined = jumbledAlphabetically.join(',').sort((a, b) => a - b)
console.log(joined)
// console.log(jumbledAlphabetically.sort((a, b) => a - b))