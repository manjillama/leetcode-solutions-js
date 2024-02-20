/**
Kth Smallest Element in a BST

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const ans = [];

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    ans.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  return ans[k - 1];
};

const treeNode1 = new TreeNode(2);

const treeNode2 = new TreeNode(1, null, treeNode1);

const treeNode3 = new TreeNode(4);

const root = new TreeNode(3, treeNode2, treeNode3);
console.log(kthSmallest(root, 1));
