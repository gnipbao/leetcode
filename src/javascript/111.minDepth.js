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
var minDepth = function (root) {
  // recursion terminator
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;

  // process logic in current level
  // drill down
  let min_depth = Number.MAX_SAFE_INTEGER;
  if (root.right) {
    min_depth = Math.min(minDepth(root.right), min_depth);
  }
  if (root.left) {
    min_depth = Math.min(minDepth(root.left), min_depth);
  }
  return min_depth + 1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * Iterating method using Stack BFS
 */
var minDepth = function (root) {
  if (root == null) return 0;
  const stack = [root];
  let depth = 0;
  while (stack.length) {
    const len = stack.length;
    depth++;
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return depth;
};
