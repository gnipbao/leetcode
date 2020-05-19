/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  let res = [];
  const backtrack = (nums, start = 0, track = []) => {
    res.push(track);
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      // select
      track.push(nums[i]);
      // backtrack
      backtrack(nums, i + 1, track.slice());
      // unselect
      track.pop();
    }
  };
  backtrack(nums);
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let n = nums.length;
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let tmpPath = [];
  let res = [];
  let hash = {};
  let backtrack = (tmpPath, start) => {
    res.push(tmpPath);
    for (let i = start; i < n; i++) {
      if (hash[i] || (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i]))
        continue;
      hash[i] = true;
      tmpPath.push(nums[i]);
      backtrack(tmpPath.slice(), i + 1);
      hash[i] = false;
      tmpPath.pop();
    }
  };
  backtrack(tmpPath, 0);
  return res;
};
