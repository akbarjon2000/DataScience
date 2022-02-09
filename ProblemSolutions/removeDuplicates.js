
// NEED TO CHECK

function removeDuplicates(arr) {
    // Return, if array is empty
    // or contains a single element

    let n = arr.length;
    var temp = [];

    var j = 0;
    for (var i = 0; i < n - 1; i++)
        if (arr[i] != arr[i + 1])
            temp[j++] = arr[i];
    temp[j++] = arr[n - 1];

    for (var i = 0; i < j; i++)
        arr[i] = temp[i];

    return j;
}