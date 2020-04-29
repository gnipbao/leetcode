/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Recursive Approach
 */
var isValidBST = function (root) {
  function helper(node, lower, upper) {
    // recursion terminator
    if (node == null) return true;

    // process logic in current level
    let val = node.val;
    if (lower !== null && val <= lower) return false;
    if (upper !== null && val >= upper) return false;

    // drill down
    if (!helper(node.right, val, upper)) return false;
    if (!helper(node.left, lower, val)) return false;

    // reverse the current level status if needed
    return true;
  }
  return helper(root, null, null);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 *  Inordertraversal order
 */
var isValidBST = function (root) {
  const stack = [];
  let inorder = -Infinity;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // If next element in inorder traversal
    // is smaller than the previous one
    // that's not BST.
    root = stack.pop();
    if (root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
};
