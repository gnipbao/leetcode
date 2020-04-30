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
 * Recursive Approach
 */
var findBottomLeftValue = function (root) {
  let max = -1;
  let value = 0;
  function get(node, level) {
    // recursion terminator
    if (!node) return;
    // process logic in current level
    if (level > max) {
      max = level;
      value = node.val;
    }
    // drill down
    get(node.left, level + 1);
    get(node.right, level + 1);
  }
  get(root, 0);
  return value;
};

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
 * levelorderTraversal right->left last
 */
var findBottomLeftValue = function (root) {
  const stack = [root];
  while (stack.length) {
    root = stack.shift();
    root.right && stack.push(root.right);
    root.left && stack.push(root.left);
  }
  return root.val;
};
