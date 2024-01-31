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
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const invertedDfs = (node) => {
    if (!node) return node;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    invertedDfs(node.left);
    invertedDfs(node.right);

    return node;
  };

  const leftTree = invertedDfs(root.left);
  const rigthTree = root.right;

  const matchTree = (root1, root2) => {
    if (root1 == null && root2 == null) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;

    const left = matchTree(root1.left, root2.left);
    const right = matchTree(root1.right, root2.right);

    return left && right;
  };

  return matchTree(leftTree, rigthTree);
};

const node1 = new TreeNode(3);
const node2 = new TreeNode(4);

const node3 = new TreeNode(2, node1, node2);

const node4 = new TreeNode(4);
const node5 = new TreeNode(3);

const node6 = new TreeNode(2, node4, node5);

const root = new TreeNode(1, node3, node6);

console.log(isSymmetric(root, root));
