/** 
Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

 

Example 1:


Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
Example 2:

Input: root = [1,2,3]
Output: [1,3]
 

Constraints:

The number of nodes in the tree will be in the range [0, 104].
-231 <= Node.val <= 231 - 1
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];

  let currentLevel = [root];
  const ans = [];
  while (currentLevel.length) {
    const nextLevel = [];
    let currMax = -Infinity;
    currentLevel.forEach((node) => {
      currMax = Math.max(currMax, node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    });
    currentLevel = nextLevel;
    ans.push(currMax);
  }
  return ans;
};

const treeNode1 = new TreeNode(5);
const treeNode2 = new TreeNode(3);
const treeNode3 = new TreeNode(3, treeNode1, treeNode2);

const treeNode4 = new TreeNode(9);
const treeNode5 = new TreeNode(2, undefined, treeNode4);

const root = new TreeNode(1, treeNode3, treeNode5);

console.log(largestValues(root));
