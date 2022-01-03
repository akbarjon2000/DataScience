//Done

const getLastKid = (kids, toys, position) => {
    if (kids === 1) {
        return 1;
    } else if (toys === 1) {
        return position;
    } else if (((toys + position) - 1) % kids === 0) {
        return kids;
    } else {
        return (((toys + position) - 1) % kids);
    }
}
console.log(getLastKid(3, 7, 1))

