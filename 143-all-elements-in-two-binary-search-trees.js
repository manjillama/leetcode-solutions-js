/**
All Elements in Two Binary Search Trees

Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

 

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

The number of nodes in each tree is in the range [0, 5000].
-105 <= Node.val <= 105
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const ans = [];

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    ans.push(node.val);
    dfs(node.right);
  };

  dfs(root1);
  dfs(root2);

  ans.sort((a, b) => a - b);
  return ans;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(4);

const root1 = new TreeNode(2, node1, node2);

const node3 = new TreeNode(0);
const node4 = new TreeNode(3);

const root2 = new TreeNode(1, node3, node4);

console.log(getAllElements(root1, root2));
