


const EKUB = (a, b) => {
    var bigNum = Math.max(a, b);
    var smallNum = Math.min(a, b);
    let arr = [];
    if (bigNum % smallNum === 0) {
        return smallNum;
    } else {
        var mid = Math.floor(bigNum / 2);
        for (let i = mid; i > 0; i--) {
            if (bigNum % i === 0 && smallNum % i === 0) {
                arr.push(i);
            }
        }
    }
    let division = arr.sort((a, b) => a - b);
    return (division[arr.length - 1]);
}
console.log(EKUB(36, 9))
