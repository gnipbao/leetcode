/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const depth = (root) => {
  if (root == null) return -1;
  return Math.max(depth(root.left), depth(root.right)) + 1;
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root == null) return true;
  if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
};

const helper = (root) => {
  if (root == null) return 0;
  const left = helper(root.left);
  if (left == -1) return -1;
  const right = helper(root.right);
  if (right == -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return helper(root) != -1;
};
