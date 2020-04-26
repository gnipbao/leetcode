/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * Recursive Approach
 */
var inorderTraversal = function (root) {
  const res = [];
  function traversal(root) {
    if (root) {
      traversal(root.left);
      res.push(root.val);
      traversal(root.right);
    }
  }
  traversal(root);
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 *  Iterating method using Stack
 */
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};
