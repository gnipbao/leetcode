/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * inorder
 */
var kthSmallest = function (root, k) {
  let i = 0;
  let val = null;
  traversal(root);
  function traversal(root) {
    // terminator
    if (root) {
      traversal(root.left);
      if (++i === k) {
        val = root.val;
        return;
      }
      traversal(root.right);
    }
  }
  return val;
};
