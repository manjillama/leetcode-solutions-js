/**
All Nodes Distance K in Binary Tree

Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
Example 2:

Input: root = [1], target = 1, k = 3
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 500].
0 <= Node.val <= 500
All the values Node.val are unique.
target is the value of one of the nodes in the tree.
0 <= k <= 1000
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const dfs = (node, parent) => {
    if (!node) return;
    node.parent = parent;
    dfs(node.left, node);
    dfs(node.right, node);
  };

  dfs(root, null);

  let queue = [target];
  const seen = new Set([target.val]);
  let distance = 0;
  while (queue.length && distance < k) {
    const nextQueue = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      for (const neighbor of [node.left, node.right, node.parent]) {
        if (neighbor && !seen.has(neighbor.val)) {
          nextQueue.push(neighbor);
          seen.add(neighbor.val);
        }
      }
    }
    queue = nextQueue;
    distance++;
  }

  return queue.map((node) => node.val);
};

const treeNode1 = new TreeNode(7);
const treeNode2 = new TreeNode(4);
const treeNode3 = new TreeNode(2, treeNode1, treeNode2);
const treeNode4 = new TreeNode(6);
const treeNode5 = new TreeNode(5, treeNode4, treeNode3);

const treeNode6 = new TreeNode(0);
const treeNode7 = new TreeNode(8);
const treeNode8 = new TreeNode(1, treeNode6, treeNode7);

const root = new TreeNode(3, treeNode5, treeNode8);

console.log(distanceK(root, treeNode5, 2));
