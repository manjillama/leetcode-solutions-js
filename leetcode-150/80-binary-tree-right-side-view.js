/**
Binary Tree Right Side View
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
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
var rightSideView = function (root) {
  const ans = [];
  if (!root) return ans;

  let queue = [root];

  while (queue.length > 0) {
    const nextQueue = [];
    ans.push(queue.at(-1).val);

    queue.forEach((node) => {
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    });

    queue = nextQueue;
  }

  return ans;
};

const treeNode1 = new TreeNode(5);
const treeNode2 = new TreeNode(2, null, treeNode1);

const treeNode3 = new TreeNode(4);
const treeNode4 = new TreeNode(3, null, treeNode3);

const root = new TreeNode(1, treeNode2, treeNode4);

console.log(rightSideView(root));
