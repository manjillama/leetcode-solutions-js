/**
Path Sum
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const dfs = (node, sum) => {
    if (!node.left && !node.right) {
      return sum + node.val === targetSum ?? false;
    }

    let left, right;
    if (node.left) left = dfs(node.left, sum + node.val);
    if (node.right) right = dfs(node.right, sum + node.val);

    return left || right;
  };

  return dfs(root, 0);
};

const treeNode1 = new TreeNode(7);
const treeNode2 = new TreeNode(2);
const treeNode3 = new TreeNode(11, treeNode1, treeNode2);
const treeNode4 = new TreeNode(4, treeNode3);

const treeNode5 = new TreeNode(1);
const treeNode6 = new TreeNode(4, undefined, treeNode5);
const treeNode7 = new TreeNode(13);
const treeNode8 = new TreeNode(8, treeNode7, treeNode6);

const root = new TreeNode(5, treeNode4, treeNode8);

console.log(hasPathSum(root, 22));
