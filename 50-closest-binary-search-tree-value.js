/**
Closest Binary Search Tree Value

Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.


Example 1:


Input: root = [4,2,5,1,3], target = 3.714286
Output: 4
Example 2:

Input: root = [1], target = 4.428571
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 109
-109 <= target <= 109
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let ans = root.val;
  function traverse(node) {
    if (!node) return;

    const currentDifference = Math.abs(node.val - target);
    if (
      currentDifference < Math.abs(ans - target) ||
      (currentDifference === Math.abs(ans - target) && ans > node.val)
    )
      ans = node.val;

    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return ans;
};

const treeNode1 = new TreeNode(1);
const treeNode2 = new TreeNode(3);
const treeNode3 = new TreeNode(2, treeNode1, treeNode2);

const treeNode4 = new TreeNode(5);

const root = new TreeNode(4, treeNode3, treeNode4);

console.log(closestValue(root, 3.5));
