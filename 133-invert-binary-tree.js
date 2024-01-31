/**
Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const temp = root.right;
  root.right = root.left;
  root.left = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(3);

const node3 = new TreeNode(2, node1, node2);

const node4 = new TreeNode(6);
const node5 = new TreeNode(9);

const node6 = new TreeNode(7, node4, node5);

const root = new TreeNode(4, node3, node6);

console.log(invertTree(root));
