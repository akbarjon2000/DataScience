//DONE
const findCommonWords = (firstArray, secondArray) => {
    let mix = [...firstArray, ...secondArray];
    for (let i = 0; i < mix.length; i++) {
        for (let j = i + 1; j < mix.length; j++) {
            if (mix[i] === mix[j]) {
                return mix[i];
            }
        }
    }

}

const firstArray = ["dog", "cat", "parrot"]
const secondArray = ["lizard", "rat", "cat"]
console.log(findCommonWords(firstArray, secondArray))

