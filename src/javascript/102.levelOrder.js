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
 *  Recursive Approach
 */
var levelOrder = function (root) {
  const res = [];
  function helper(node, level) {
    // recursion terminator
    if (node == null) {
      return;
    }
    // process logic in current level
    if (res.length == level) {
      res.push([]);
    }
    res[level].push(node.val);
    // drill down
    node.left && helper(node.left, level + 1);
    node.right && helper(node.right, level + 1);
    // reverse the current level status
  }
  helper(root, 0);
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Iterating method using Stack
 */
var levelOrder = function (root) {
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
  return ret;
};
