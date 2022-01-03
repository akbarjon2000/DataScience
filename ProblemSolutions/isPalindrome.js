var isPalindrome = function (x) {
    let len = x.toString().length;
    let start = x.toString().substring(0, Math.floor(len / 2));
    let end = x.toString().substring(len - Math.floor(len / 2));
    let flip = end.split('').reverse().join('');
    return (start === flip)
};

