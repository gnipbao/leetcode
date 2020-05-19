/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let len = nums.length;
  let res = [];
  const backtrack = (path = []) => {
    if (path.length === len) {
      res.push(path);
    }
    for (const i of nums) {
      if (!path.includes(i)) {
        path.push(i);
        backtrack(path.slice());
        path.pop();
      }
    }
  };
  backtrack();
  return res;
};
