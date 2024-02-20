/**
Minimum Absolute Difference in BST

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let ans = Infinity;
  const values = [];
  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    values.push(node.val);
    dfs(node.right);
  }
  dfs(root);

  for (let i = 1; i < values.length; i++) {
    ans = Math.min(ans, values[i] - values[i - 1]);
  }
  return ans;
};
