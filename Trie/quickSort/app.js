function quickSort (arr) {
    let right = [];
    let left = [];
    let pivot = arr[arr.length - 1];

    if (arr < 2) {
        return arr;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbersArray = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(numbersArray)); // [11, 12, 22, 25, 34, 64, 90]