/**
Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var levelOrder = function (root) {
  const ans = [];
  let queue = [root];

  while (queue[0]) {
    let nextQueue = [];
    let currVals = [];
    for (const node of queue) {
      currVals.push(node.val);
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
    ans.push(currVals);
  }

  return ans;
};

const node3 = new TreeNode(15);
const node4 = new TreeNode(7);

const node1 = new TreeNode(9);
const node2 = new TreeNode(20, node3, node4);

const root = new TreeNode(3, node1, node2);

console.log(levelOrder(root));
