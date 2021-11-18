
// function sortByHeight(array) {
//     array = [-1, 150, 190, 170, -1, -1, 160, 180];
//     newArrayPpl = [];
//     array.map((value) => {
//         if (value !== -1) {
//             newArrayPpl.push(value);
//         }
//     })
//     newArrayPpl.sort((a, b) => a - b);
//     let j = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== -1) {
//             array[i] = newArrayPpl[j]
//         }
//     }
//     return array
// }
// console.log(sortByHeight());




// let str = "Asdjasfskjvkaglkajsflahekablvbaljsfkahefdsfgfmahkj";




// function test(myStr) {
//     let lowercase = myStr.toLowerCase();
//     let len = myStr.length;
//     let a = [];
//     let b = [];
//     for (let i = 0; i < len; i++) {
//         if (lowercase[i] === 'a') {
//             a.push(i)
//             console.log(a.length);
//         }
//         else if (lowercase[i] === 'b') {
//             b.push(i);
//             console.log(b.length);
//         }
//     }
// }
// test(str);
// let a = 0;
// let b = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === 'a') {
//         a += 1
//     }
//     else if (str[i].toLowerCase() === 'b') {
//         b++;
//     }
// }
// console.log("a is: ", a, "\n", "b is: ", b)




// const test = (str) => {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     console.log(str === newStr);
// };

// test("aabb");




// const test = (str) => {
//     let sorted = str.split('').sort();
//     let len = sorted.length;
//     for (let i = 0; i < len; i += 2) {
//         for (let j = i + 1; j < len - 2; j++) {
//             console.log(str[j])
//         }
//     }

// }
// console.log(test('ababs'))

// let arr = [1, 2, 3, 4, 5, 6];
// let sum = arr.reduce(arrs, 100)
// let sum2 = arr.reduceRight(arrs)
// function arrs(start, total) {
//     return start - total;
// }

// console.log(sum);
// console.log(sum2);





// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value;
// }
// console.log(sum)

// function Test(str1, str2) {
//     sort1 = str1.split('').sort().join('');
//     sort2 = str2.split('').sort().join('');
//     if (sort1 === sort2) {
//         return true;
//     } else return false;
// }
// console.log(Test("elit", "lite"));

// let arr = [1, 2, 4, 8, 4, 5, 4, 4, 54, 45, 54, 54, 4, 54];
// let map = arr.map((value) => {
//     if (value >= 2 && value <= 4) {
//         total += value;
//     }
// })
// console.log(total)

// let sum = arr.reduce((total, current) => {
//     return total > current ? total : current;
// }, arr[0])
// console.log(sum)
// let fruit = ['banana', 'Apple', 'orange'];
// let setArr = fruit.toString().toLowerCase().split('');
// let len = setArr.length;
// console.log(len)
// let a = 0;
// fruit.map((value) => {
//     let setArr = value.toString().split('')
//     a = 0;
//     setArr.filter((as) => {
//     })

// })
// console.log(setArr[7])


// for (let i = 0; i < len; i++) {
//     if (setArr[i] === 'a') {
//         a += 1;
//         console.log(a)
//     }
// }

// for (let i = 0; i < 10; i++) {

// }
// console.log(i)


// let ar = [54, 45, 4542, 24, 7, 412, 1, 544, 4, 57, 4, 1, 27];
// const remove = (num) => {
//     let newArr = ar.filter((value) => ar.indexOf(num) ===);
//     console.log(newArr)
// }
// remove(4)

var data = [
    [0, 4, "Good night"],
    [5, 11, "Good morning"],
    [12, 17, "Good afternoon & Good time for WebBrain JavaScript Review"],
    [18, 24, "Good night"]
],

    hr = new Date().getHours();

// for (var i = 0; i < data.length; i++) {
//     if (hr >= data[i][0] && hr <= data[i][1]) {
//         console.log(data[i][2]);
//     }
// }


let arr = []
let str = "5646432168321384";
for (let i = 0; i < str.length; i++) {
    // console.log(Math.max(parseInt(str[i])))
}

const Max = (string) => {
    let ar = Array.from(parseInt(string))
    console.log(ar)
}
console.log(Array.from())