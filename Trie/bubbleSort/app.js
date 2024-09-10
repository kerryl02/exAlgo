function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const numbersArray = [64, 34, 25, 12, 22, 11, 90];
  console.log(bubbleSort(numbersArray)); // [11, 12, 22, 25, 34, 64, 90]
  