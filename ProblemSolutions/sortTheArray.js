// DONE
const sortTheArray = (arr) => {
    let nums = [];
    let chars = [];
    arr.map((value) => {
        if (typeof value === 'number') {
            nums.push(value);
            nums.sort((a, b) => a - b)
        } else {
            chars.push(value);
            chars.sort((a, b) => a.localeCompare(b));
        }
    })
    let result = [...nums, ...chars];
    console.log(result)
}
console.log(sortTheArray(["b", 6, "a", "q", 7, 2]));
