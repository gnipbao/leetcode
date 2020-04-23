/**
 * @param {number} n
 * @return {number}
 * Dynamic Programming
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(n).
 */
var climbStairs = function (n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 * Dynamic Programming
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(1).
 */
var climbStairs = function (n) {
  if (n == 1) return 1;
  let first = 1,
    second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

/**
 * @param {number} n
 * @return {number}
 * Recursion with Memoization
 * Complexity Analysis
 * Time complexity : O(n).
 * Space complexity : O(n).
 */
var climbStairs = function (n) {
  let memo = [];
  const _climbstairs = (i, n, memo) => {
    // base case
    if (i > n) {
      return 0;
    }
    if (i == n) {
      return 1;
    }
    if (memo[i] > 0) {
      return memo[i];
    }
    memo[i] = _climbstairs(i + 1, n, memo) + _climbstairs(i + 2, n, memo);
    return memo[i];
  };
  return _climbstairs(0, n, memo);
};
