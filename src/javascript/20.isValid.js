/**
 * @param {string} s
 * @return {boolean}
 * stack
 */
var isValid = function (s) {
  if (s.length == 0) return true;
  let stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (i of s) {
    if (map[i]) {
      stack.push(i);
    } else if (i !== map[stack.pop()]) {
      return false;
    }
  }
  return stack.length === 0;
};
