function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentValue) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentValue;
    }
  
    return arr;
  }
  
  const numbersArray = [64, 34, 25, 12, 22, 11, 90];
  console.log(insertSort(numbersArray)); // [11, 12, 22, 25, 34, 64, 90]
  