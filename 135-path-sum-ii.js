/**
Path Sum II

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: []
Example 3:

Input: root = [1,2], targetSum = 0
Output: []
 

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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const ans = [];

  const dfs = (node, list, sum) => {
    if (!node) return;

    if (!node.left && !node.right && targetSum === sum + node.val)
      return ans.push([...list, node.val]);

    list.push(node.val);

    dfs(node.left, list, sum + node.val);
    dfs(node.right, list, sum + node.val);

    list.pop();
  };

  dfs(root, [], 0);
  return ans;
};

const node1 = new TreeNode(7);
const node2 = new TreeNode(2);

const node3 = new TreeNode(11, node1, node2);

const node4 = new TreeNode(4, node3);

const node5 = new TreeNode(5);
const node6 = new TreeNode(1);

const node7 = new TreeNode(4, node5, node6);

const node8 = new TreeNode(13);

const node9 = new TreeNode(8, node8, node7);

const root = new TreeNode(5, node4, node9);

console.log(pathSum(root, 22));
