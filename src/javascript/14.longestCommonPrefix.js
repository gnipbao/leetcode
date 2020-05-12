/**
 * @param {string[]} strs
 * @return {string}
 * brute-force
 */
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return "";
  let pre = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(pre) != 0) {
      pre = pre.substring(0, pre.length - 1);
    }
  }
  return pre;
};

/**
 * @param {string[]} strs
 * @return {string}
 * slice
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  return strs[0];
};

var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let min = 0,
    max = 0;
  for (let i = 1; i < strs.length; i++) {
    if (strs[min] > strs[i]) min = i;
    if (strs[max] < strs[i]) max = i;
  }
  for (let j = 0; j < strs[min].length; j++) {
    if (strs[min].charAt(j) !== strs[max].charAt(j)) {
      return strs[min].substring(0, j);
    }
  }
  return strs[min];
};

var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  return lCPrefixRec(strs);
};
// 若分裂后的两个数组长度不为 1，则继续分裂
// 直到分裂后的数组长度都为 1，
// 然后比较获取最长公共前缀
function lCPrefixRec(arr) {
  let length = arr.length;
  if (length === 1) {
    return arr[0];
  }
  let mid = Math.floor(length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, length);
  return lCPrefixTwo(lCPrefixRec(left), lCPrefixRec(right));
}

// 求 str1 与 str2 的最长公共前缀
function lCPrefixTwo(str1, str2) {
  let j = 0;
  for (; j < str1.length && j < str2.length; j++) {
    if (str1.charAt(j) !== str2.charAt(j)) {
      break;
    }
  }
  return str1.substring(0, j);
}
