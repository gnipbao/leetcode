/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [];

  function helper(root, sum, path) {
    // terminator
    if (root == null) return;
    path.push(root.val);
    if (root.left == null && root.right == null && sum == root.val)
      res.push([...path]);

    helper(root.left, sum - root.val, path);
    helper(root.right, sum - root.val, path);
    path.pop();
  }

  helper(root, sum, []);

  return res;
};
