/**
Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
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
var diameterOfBinaryTree = function (root) {
  let ans = 0;
  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    ans = Math.max(ans, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return ans;
};

const treeNode1 = new TreeNode(4);
const treeNode2 = new TreeNode(5);
const treeNode3 = new TreeNode(2, treeNode1, treeNode2);

const treeNode4 = new TreeNode(3);

const root = new TreeNode(1, treeNode3, treeNode4);

console.log(diameterOfBinaryTree(root));
