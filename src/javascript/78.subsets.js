/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [],
    list = [];
  if (nums == null) return res;
  dfs(res, nums, list, 0);

  function dfs(res, nums, list, index) {
    // terminator
    if (index == nums.length) {
      res.push(list);
      return;
    }
    // drill down
    dfs(res, nums, list, index + 1); // no pick
    list.push(nums[index]);
    dfs(res, nums, list.slice(), index + 1); // pick
    // reverse state
    list.pop();
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ret = [],
    track = [];
  const backtrack = (nums, start, track) => {
    ret.push(track);
    for (let i = start; i < nums.length; i++) {
      // select
      track.push(nums[i]);
      // backtrack
      backtrack(nums, i + 1, track.slice());
      // unselect
      track.pop();
    }
  };
  backtrack(nums, 0, track);
  return ret;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ret = [[]];
  for (let i = 0; i < nums.length; i++) {
    let len = ret.length;
    for (let j = 0; j < len; j++) {
      let sub = ret[j].slice();
      sub.push(nums[i]);
      ret.push(sub);
      // ret.push(ret[j].concat([nums[i]]));
      // ret.push([...ret[j], nums[i]])
    }
  }
};
