/**
Deepest Leaves Sum

Given the root of a binary tree, return the sum of values of its deepest leaves.
 

Example 1:


Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100
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
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  let currLevel = [root];
  let ans = 0;
  while (currLevel.length) {
    const nextLevel = [];
    let sum = 0;
    currLevel.forEach((node) => {
      sum += node.val;
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    });
    currLevel = nextLevel;
    ans = sum;
  }

  return ans;
};

const treeNode1 = new TreeNode(7);
const treeNode2 = new TreeNode(4, treeNode1);
const treeNode3 = new TreeNode(5);
const treeNode4 = new TreeNode(2, treeNode2, treeNode3);

const treeNode5 = new TreeNode(8);
const treeNode6 = new TreeNode(6, undefined, treeNode5);
const treeNode7 = new TreeNode(3, undefined, treeNode6);

const root = new TreeNode(1, treeNode4, treeNode7);

console.log(deepestLeavesSum(root));
