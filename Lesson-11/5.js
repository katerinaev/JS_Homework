var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function divideArr(arr, n) {
    do {
        console.log(arr.splice(0, n))
    }
    while (arr.length > n)
    console.log(arr);
}
divideArr(arr, 4);