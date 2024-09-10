function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    const fusion = (left, right) => {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    };
  
    return fusion(mergeSort(left), mergeSort(right));
  }
  
  const numbersArray = [64, 34, 25, 12, 22, 11, 90];
  console.log(mergeSort(numbersArray)); // [11, 12, 22, 25, 34, 64, 90]
  