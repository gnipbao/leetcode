/**
 * @param {number[]} A
 * @return {boolean}
 * Two Pointers
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(1).
 */
var validMountainArray = function (A) {
  if (A.length < 3) return false;
  let N = A.length,
    left = 0,
    right = A - 1;
  while (left < N - 2 && A[left] < A[left + 1]) {
    left++;
  }
  while (right > 1 && A[right] < A[right - 1]) {
    right--;
  }
  return left === right;
};

/**
 * @param {number[]} A
 * @return {boolean}
 * one pass
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(1).
 */
var validMountainArray = function (A) {
  let len = A.length,
    i = 0;
  while (i < len - 1 && A[i] < A[i + 1]) {
    i++;
  }
  if (i == 0 || i == len - 1) {
    return false;
  }
  while (i < len - 1 && A[i] > A[i + 1]) {
    i++;
  }
  return i == len - 1;
};

/**
 * @param {number[]} A
 * @return {boolean}
 *
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(1).
 */
var validMountainArray = function (A) {
  const len = A.length;
  if (len < 3) return false;
  // 1.find max index
  let max = 0;
  A.forEach((i, idx) => {
    if (i > A[max]) {
      max = idx;
    }
  });

  // 2.peak can't be first or last
  if (max == 0 || max == len - 1) {
    return false;
  }
  // 3. check each end
  for (let i = 0; i < max; i++) {
    if (A[i] >= A[i + 1]) {
      return false;
    }
  }
  for (let i = max; i < len - 1; i++) {
    if (A[i] <= A[i + 1]) {
      return false;
    }
  }
  return true;
};
