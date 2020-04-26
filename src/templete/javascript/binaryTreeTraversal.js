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
 * root - left - right
 */
var preorderTraversal = function (root) {
  const ret = [];
  function traversal(root) {
    if (root !== null) {
      ret.push(root.val);
      traversal(root.left);
      traversal(root.right);
    }
  }
  traversal(root);
  return ret;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * left - root - right
 */
var inorderTraversal = function (root) {
  const ret = [];
  function traversal(root) {
    if (root) {
      traversal(root.left);
      ret.push(root.val);
      traversal(root.right);
    }
  }
  traversal(root);
  return ret;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * left - right - root
 */
var postorderTraversal = function (root) {
  const res = [];
  function traversal(root) {
    if (root !== null) {
      traversal(root.left);
      traversal(root.right);
      res.push(root.val);
    }
  }
  traversal(root);
  return res;
};
