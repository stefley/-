const arr = [4, 10, 3, 5, 1, 2, 8, 6, 7, 9];

function compare(a, b) {
  return a > b;
}

function swap(arr, i, j) {}

function quickSort(arr) {
  if (!arr.length ) return [];
  let leader = arr[0],
    left = [],
    right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= leader) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  left.push(leader);
  return [...left, ...right];
}

console.log(quickSort(arr));
