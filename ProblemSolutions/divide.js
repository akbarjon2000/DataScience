var divide = function (dividend, divisor) {
    var res = Math.floor(dividend / divisor);

    if (dividend > 1 && divisor < 0 && dividend !== - divisor && dividend % divisor !== 0) {
        res += 1;
    } else if (dividend < 0 && divisor > 1 && -dividend !== divisor && dividend % divisor !== 0) {
        res += 1;
    }

    if (res < -(2 ** 31)) {
        return -(2 ** 31);
    } else if (res > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    } else {
        return res;
    }
};
console.log(divide(-2147483648, 2))


