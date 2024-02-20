/**
Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var isSymmetric = function (root) {
  const leftTree = root.left;
  const invertedRightTree = root.right;

  if (!leftTree && !invertedRightTree) return true;

  const invertTree = (node) => {
    if (!node) return node;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return node;
  };

  invertTree(invertedRightTree);

  const dfs = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    return dfs(p.left, q.left) && dfs(p.right, q.right);
  };

  return dfs(leftTree, invertedRightTree);
};

const node1 = new TreeNode(3);
const node2 = new TreeNode(4);

const node3 = new TreeNode(2, node1, node2);

const node4 = new TreeNode(4);
const node5 = new TreeNode(3);

const node6 = new TreeNode(2, node4, node5);

const head = new TreeNode(1);

console.log(isSymmetric(head));
