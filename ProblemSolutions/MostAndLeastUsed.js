const MostAndLeastUsed = (str) => {
    let sorted = str.split('').sort((a, b) => a.localeCompare(b));
    let obj = {};
    sorted.map((value) => {
        for (let i = 0; i < sorted.length; i++) {
            for (let j = 0; j < sorted.length; j++) {
                if (sorted[i] === sorted[j]) {
                    let
                }
            }
        }
    })
    console.log(sorted)
}
console.log(MostAndLeastUsed("ooooooooasdad"))