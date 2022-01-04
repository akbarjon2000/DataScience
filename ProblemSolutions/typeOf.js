const typeOf = (v) => {
    return Object.prototype.toString.call(v).slice(8, -1);
}
console.log(typeOf("asdasd"))
console.log(typeOf([]))
console.log(typeOf({}))
console.log(typeOf(undefined))
console.log(typeOf(NaN))
console.log(typeOf(123))
console.log(typeOf(null))