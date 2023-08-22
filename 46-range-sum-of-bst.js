/**
Range Sum of BST

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rangeSumBST = function (root, low, high) {
  let ans = 0;
  if (!root) return ans;

  if (root.val >= low && root.val <= high) ans += root.val;

  if (root.val > low) ans += rangeSumBST(root.left, low, high);

  if (root.val < high) ans += rangeSumBST(root.right, low, high);

  return ans;
};

const treeNode1 = new TreeNode(3);
const treeNode2 = new TreeNode(7);
const treeNode3 = new TreeNode(5, treeNode1, treeNode2);

const treeNode4 = new TreeNode(18);
const treeNode5 = new TreeNode(15, undefined, treeNode4);

const root = new TreeNode(10, treeNode3, treeNode5);

console.log(rangeSumBST(root, 7, 15));
