/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // terminator
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  // process logic in current level
  if (p.val !== q.val) return false;
  // drill down
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
