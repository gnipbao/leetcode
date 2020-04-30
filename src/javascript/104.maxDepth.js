/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * Recursive  Approach
 */
var maxDepth = function (root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;
  let depth = Number.MIN_SAFE_INTEGER;
  if (root.left) {
    depth = Math.max(maxDepth(root.left), depth);
  }
  if (root.right) {
    depth = Math.max(maxDepth(root.right), depth);
  }
  return depth + 1;
};
