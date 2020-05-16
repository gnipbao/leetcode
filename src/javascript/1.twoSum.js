/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Brute Force
 * Time complexity : O(n^2).
 * Space complexity : O(1).
 */
var twoSum = function (nums, target) {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * One-pass Hash Table
 * Time complexity : O(n).
 * Space complexity : O(n).
 */
var twoSum = function (nums, target) {
  let len = nums.length;
  let map = new Map();
  for (let i = 0; i < len; i++) {
    let k = target - nums[i];
    if (map.has(k)) {
      return [map.get(k), i];
    }
    map.set(nums[i], i);
  }
};
