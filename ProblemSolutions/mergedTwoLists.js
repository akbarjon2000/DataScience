var mergeTwoLists = function (list1, list2) {
    if (list1.length === 0 && list2.length === 0) {
        return [];
    } else {
        list1.map((value) => {
            list2.push(value);
        })
        return list2.sort();
    }
};
console.log(mergeTwoLists([], []));