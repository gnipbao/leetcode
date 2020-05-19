/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [],
    track = [];
  const backtrack = (path, start, n, k) => {
    if (path.length == k) {
      res.push(path);
    }
    for (let i = start; i < n + 1; i++) {
      // select
      path.push(i);
      // backtrack
      backtrack(path.slice(), i + 1, n, k);
      // unselect
      path.pop();
    }
  };
  backtrack(track, 1, n, k);
  return res;
};
