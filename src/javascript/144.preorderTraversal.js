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
var preorderTraversal = function (root) {
  const res = [];
  function traversal(root) {
    if (root) {
      res.push(root.val);
      traversal(root.left);
      traversal(root.right);
    }
  }
  traversal(root);
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * Iterating method using Stack
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
};
