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
 * Recursion
 */
var isSymmetric = function (root) {
  return isMirrior(root, root);

  function isMirrior(r1, r2) {
    // terminator
    if (r1 == null && r2 == null) return true;
    if (r1 == null || r2 == null) return false;
    // process logic in current level
    // drill down
    return (
      r1.val === r2.val &&
      isMirrior(r1.left, r2.right) &&
      isMirrior(r1.right, r2.left)
    );
  }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * Iteractor queue
 */
var isSymmetric = function (root) {
  let queue = [root, root];
  while (queue.length) {
    let l = queue.shift();
    let r = queue.shift();
    if (l === null && r === null) continue;
    if (l === null || r === null) return false;
    if (l.val !== r.val) return false;
    queue.push(l.left);
    queue.push(r.right);
    queue.push(l.right);
    queue.push(r.left);
  }
  return true;
};
