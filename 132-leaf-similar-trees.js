/**
Leaf-Similar Trees

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Example 1:


Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:


Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
 

Constraints:

The number of nodes in each tree will be in the range [1, 200].
Both of the given trees will have values in the range [0, 200].
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const dfs = (root, leaves) => {
    if (!root) return leaves;

    if (!root.left && !root.right) leaves.push(root.val);

    dfs(root.left, leaves);
    dfs(root.right, leaves);

    return leaves;
  };

  return dfs(root1, []).toString() === dfs(root2, []).toString();
};

const node1 = new TreeNode(6);

const node2 = new TreeNode(7);
const node3 = new TreeNode(4);

const node4 = new TreeNode(2, node2, node3);

const node5 = new TreeNode(5, node1, node4);

const node6 = new TreeNode(9);

const node7 = new TreeNode(8);

const node8 = new TreeNode(1, node6, node7);

const root = new TreeNode(3, node5, node8);

console.log(leafSimilar(root, root));
