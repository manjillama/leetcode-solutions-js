/**
Maximum Level Sum of a Binary Tree

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105
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
var maxLevelSum = function (root) {
  let maxSum = -Infinity;
  let ans;
  let queue = [root];
  let currLevel = 0;

  while (queue[0]) {
    currLevel++;
    const nextQueue = [];
    let currLevelSum = 0;
    for (const node of queue) {
      currLevelSum += node.val;
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
    if (currLevelSum > maxSum) {
      maxSum = currLevelSum;
      ans = currLevel;
    }
  }

  return ans;
};

const node3 = new TreeNode(7);
const node4 = new TreeNode(-8);

const node1 = new TreeNode(7, node3, node4);
const node2 = new TreeNode(0);

const root = new TreeNode(1, node1, node2);

console.log(maxLevelSum(root));
