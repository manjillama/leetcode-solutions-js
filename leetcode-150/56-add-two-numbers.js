/**
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1Arr = [];
  const l2Arr = [];

  while (l1) {
    l1Arr.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    l2Arr.push(l2.val);
    l2 = l2.next;
  }

  console.log(l1Arr);
  console.log(l2Arr);

  let l1Str = "";
  let l2Str = "";

  for (let i = l1Arr.length - 1; i >= 0; i--) {
    l1Str += l1Arr[i];
  }

  for (let i = l2Arr.length - 1; i >= 0; i--) {
    l2Str += l2Arr[i];
  }

  const sum = String(Number(l1Str) + Number(l2Str));

  let head = new ListNode(+sum[sum.length - 1]);

  let prevNode = head;

  for (let i = sum.length - 2; i >= 0; i--) {
    const node = new ListNode(+sum[i]);
    prevNode.next = node;
    prevNode = node;
  }

  return head;
};

const node2 = new ListNode(3);
const node1 = new ListNode(4);
const head1 = new ListNode(2);
head1.next = node1;
node1.next = node2;

const node4 = new ListNode(4);
const node3 = new ListNode(6);
const head2 = new ListNode(5);
head2.next = node3;
node3.next = node4;

console.log(addTwoNumbers(head1, head2));
