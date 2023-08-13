/**
Maximum Difference Between Node and Ancestor
Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

 

Example 1:


Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
Example 2:


Input: root = [1,null,2,null,0,3]
Output: 3
 

Constraints:

The number of nodes in the tree is in the range [2, 5000].
0 <= Node.val <= 105
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
var maxAncestorDiff = function (root) {
  if (root == null) {
    return 0;
  }

  let result = 0;
  dfs(root, root.val, root.val);

  function dfs(root, max, min) {
    if (root == null) {
      result = Math.max(result, max - min);
      return;
    }

    max = Math.max(max, root.val);
    min = Math.min(min, root.val);

    dfs(root.left, max, min);
    dfs(root.right, max, min);
  }

  return result;
};

const treeNode1 = new TreeNode(4);
const treeNode2 = new TreeNode(7);

const treeNode3 = new TreeNode(6, treeNode1, treeNode2);

const treeNode4 = new TreeNode(1);

const treeNode5 = new TreeNode(3, treeNode4, treeNode3);

const treeNode6 = new TreeNode(13);

const treeNode7 = new TreeNode(14, treeNode6);

const treeNode8 = new TreeNode(10, undefined, treeNode7);

const root = new TreeNode(8, treeNode5, treeNode8);

console.log(maxAncestorDiff(root));
