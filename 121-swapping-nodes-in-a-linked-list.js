/**
Swapping Nodes in a Linked List

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let slow = head;
  let fast = head;

  for (i = 1; i < k; i++) {
    fast = fast.next;
  }

  let left = fast;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  const temp = slow.val;
  slow.val = left.val;
  left.val = temp;

  return head;
};

const tail = new ListNode(5);
const list4 = new ListNode(4, tail);
const list3 = new ListNode(3, list4);
const list2 = new ListNode(2, list3);
const head = new ListNode(1, list2);

// const tail = new ListNode(5);
// const list9 = new ListNode(9, tail);
// const list8 = new ListNode(0, list9);
// const list7 = new ListNode(3, list8);
// const list6 = new ListNode(8, list7);
// const list5 = new ListNode(7, list6);
// const list4 = new ListNode(6, list5);
// const list3 = new ListNode(6, list4);
// const list2 = new ListNode(9, list3);
// const head = new ListNode(7, list2);

console.log(swapNodes(head, 2));
