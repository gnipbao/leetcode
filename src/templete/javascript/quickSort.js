function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [],
    right = [];
  const povitIndex = Math.floor(arr.length >> 2);
  const povit = arr.splice(povitIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < povit) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([povit], quickSort(right));
}
