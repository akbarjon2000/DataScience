//DONE  
const splitByOddAndEven = (arr) => {
    let even = [];
    let odd = [];
    arr.map((value) => {
        if (value % 2 === 0) {
            even.push(value);
        }
        if (value % 2 === 1) {
            odd.push(value);
        }
    })
    let sortedEven = []
    let sortedOdd = []
    even.sort((a, b) => { return a - b })
    for (let i = 0; i < even.length; i++) {
        if (even[i] !== even[i + 1]) {
            sortedEven.push(even[i])
        }
    }
    odd.sort((a, b) => { return a - b })
    for (let i = 0; i < odd.length; i++) {
        if (odd[i] !== odd[i + 1]) {
            sortedOdd.push(odd[i])
        }
    }
    let all = [sortedEven, sortedOdd];
    console.log(all)
}
console.log(splitByOddAndEven([2, 3, 7, 6, 3, 2, 4, 9]))