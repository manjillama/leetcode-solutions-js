/**
Longest ZigZag Path in a Binary Tree

You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

 

Example 1:


Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
Example 2:


Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
Example 3:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 5 * 104].
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
var longestZigZag = function (root) {
  let ans = 0;

  const dfs = (node, sum, direction) => {
    if (!node) return;
    ans = Math.max(ans, sum);
    dfs(node.left, direction === "left" ? 1 : sum + 1, "left");
    dfs(node.right, direction === "right" ? 1 : sum + 1, "right");
  };

  dfs(root, 0);

  return ans;
};

const node7 = new TreeNode(1);

const node6 = new TreeNode(1, null, node7);

const node4 = new TreeNode(1, null, node6);
const node5 = new TreeNode(1);

const node2 = new TreeNode(1);
const node3 = new TreeNode(1, node4, node5);

const node1 = new TreeNode(1, node2, node3);

const root = new TreeNode(1, null, node1);

// const node6 = new TreeNode(5);

// const node4 = new TreeNode(4, null, node6);
// const node5 = new TreeNode(1);

// const node3 = new TreeNode(3, node4, node5);

// const node1 = new TreeNode(2, null, node3);
// const node2 = new TreeNode(1);

// const root = new TreeNode(1, node1, node2);

console.log(longestZigZag(root));
