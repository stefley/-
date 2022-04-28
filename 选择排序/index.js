let arr = [4, 1, 6, 5, 3, 2, 8, 7, 10, 9];

function compare(a, b) {
  return a > b;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 冒泡
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// 选择排序

function selectSort(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        let maxIndex = 0;
        for(let j = 1; j < arr.length - i; j++) {
            compare(arr[j], arr[maxIndex]) && (maxIndex = j)
        }
        swap(arr, maxIndex, arr.length - 1 - i)
    }
    return arr
}
console.log(selectSort(arr));
