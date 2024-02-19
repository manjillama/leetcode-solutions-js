/*
Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseBetween = function (head, left, right) {
  let curr = head;
  let leftNode, preLeftNode;
  let counter = 1;
  let reverseList = null;

  if (right === 1) return head;

  while (curr) {
    if (counter === left) {
      leftNode = curr;
      break;
    }

    preLeftNode = curr;
    curr = curr.next;
    counter++;
  }

  console.log("Left", leftNode);

  while (counter <= right) {
    const next = curr.next;
    curr.next = reverseList;
    reverseList = curr;
    curr = next;
    counter++;
  }

  if (preLeftNode) preLeftNode.next = reverseList;
  else head = reverseList;

  leftNode.next = curr;

  return head;
};

const head = new ListNode(1);
const list2 = new ListNode(2);
// const list3 = new ListNode(3);
// const list4 = new ListNode(4);
// const list5 = new ListNode(5);
// const tail = new ListNode(6);

head.next = list2;
// list2.next = list3;
// list3.next = list4;
// list4.next = tail;
// list5.next = tail;

console.log(reverseBetween(head, 1, 2));
