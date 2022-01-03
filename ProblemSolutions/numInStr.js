

const numInStr = (str) => {
    let arr = str.split('');
    let result = 0;
    arr.map((value) => {
        if (parseInt(value) !== NaN) {
            result += value;
        }
        // console.log(typeof (parseInt(value)))
    })
    return result;
}
console.log(numInStr('webbrain1 Academy2'))
let str = 'webbrain1 Academy2';
let arr = str.split('');
console.log(arr.map((value) => parseInt(value) !== isNaN))