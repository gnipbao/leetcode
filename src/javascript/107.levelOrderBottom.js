/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Recursive Appoach
 */
var levelOrderBottom = function (root) {
  const res = [];
  const helper = (node, level) => {
    // recursion terminator
    if (!node) return res;
    // process logic in current level
    if (res.length == level) {
      res.push([]);
    }
    res[level].push(node.val);
    // drill down
    helper(node.left, level + 1);
    helper(node.right, level + 1);
    // reverse the current level status
    // no
  };
  helper(root, 0);
  return res.reverse();
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Iterating method with stack
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  const ret = [];
  const stack = [root];
  while (stack.length) {
    const len = stack.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      level.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    ret.push(level);
  }
  return ret.reverse();
};
