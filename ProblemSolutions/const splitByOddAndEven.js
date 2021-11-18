//DONE
const splitByOddAndEven = (arr) => {
    let even = [];
    let odd = [];
    arr.map((value) => {
        if (value % 2 === 0) {
            even.push(value);
        } else {
            odd.push(value);
        }
    })
    console.log(even, odd);
}
console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9]))
