/**
Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  if (!root.left) return minDepth(root.right) + 1;

  if (!root.right) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

const treeNode1 = new TreeNode(9);

const treeNode2 = new TreeNode(15);
const treeNode3 = new TreeNode(7);
const treeNode4 = new TreeNode(20, treeNode2, treeNode3);

const treeNode5 = new TreeNode(22, treeNode1);

const root = new TreeNode(3, treeNode5, treeNode4);

console.log(minDepth(root));
