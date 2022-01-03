var squareIsWhite = function (coordinates) {
    var arr = coordinates.split('');
    var letter = arr[0];
    var num = parseInt(arr[1]);
    var index = null;
    var letters = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    var result = undefined;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letter) {
            index = i;
        }
    }
    if (index % 2 === 1 && num % 2 === 1) {
        result = false;
        return result;
    } else if (index % 2 === 1 && num % 2 === 0) {
        result = true;
        return result;
    } else if (index % 2 === 0 && num % 2 === 1) {
        result = true;
        return result;
    } else if (index % 2 === 0 && num % 2 === 0) {
        result = false;
        return result;
    }
    return result

};
console.log(squareIsWhite("e1"))