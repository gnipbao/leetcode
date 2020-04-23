/**
 * @param {number[]} nums
 * @return {number}
 * Two Pointers
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(1).
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(1).
 */
var removeDuplicates = function (nums) {
  let count = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[i - count] = nums[i];
    } else {
      count++;
    }
  }
  return len - count;
};
