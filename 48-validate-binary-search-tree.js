/**

 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root) {
  function dfs(node, min, max) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    const left = dfs(node.left, min, node.val);
    const right = dfs(node.right, node.val, max);

    return left && right;
  }

  return dfs(root, -Infinity, Infinity);
};

const treeNode1 = new TreeNode(4);

const treeNode2 = new TreeNode(3);
const treeNode3 = new TreeNode(7);
const treeNode4 = new TreeNode(6, treeNode2, treeNode3);

const root = new TreeNode(5, treeNode1, treeNode4);
console.log(isValidBST(root));
