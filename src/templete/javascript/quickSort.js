function quickSort(arr) {
  // terminator
  if (arr.length <= 1) return arr;
  // process current logic
  let left = [],
    right = [];
  let pivotIndex = Math.floor(arr.length >> 1);
  let pivot = arr.splice(povitIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // drill down
  return quickSort(left).concat([pivot], quickSort(right));
}
