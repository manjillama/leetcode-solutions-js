/**
Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) {
    return true;
  }

  if (p == null || q == null) {
    return false;
  }

  if (p.val != q.val) {
    return false;
  }

  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  return left && right;
};

const treeNode1 = new TreeNode(2);
const treeNode2 = new TreeNode(3);

const treeNode3 = new TreeNode(2);
const treeNode4 = new TreeNode(3);

const root1 = new TreeNode(1, treeNode1, treeNode2);
const root2 = new TreeNode(1, treeNode3, treeNode4);

console.log(isSameTree(root1, root2));
