/**
Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};

const tail = new ListNode(5);
const list4 = new ListNode(4, tail);
const list3 = new ListNode(3, list4);
const list2 = new ListNode(2, list3);
const head = new ListNode(1, list2);

// const tail = new ListNode(2);
// const head = new ListNode(1, tail);
console.log(removeNthFromEnd(head, 2));
