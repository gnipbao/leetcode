function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  const mid = Math.floor(len >> 1),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(l, r) {
  const res = [];
  // 3 while
  while (l.length > 0 && r.length > 0) {
    if (l[0] <= r[0]) {
      res.push(l.shift());
    } else {
      res.push(r.shift());
    }
  }
  while (l.length) res.push(l.shift());
  while (r.length) res.push(r.shift());
  return res;
}
