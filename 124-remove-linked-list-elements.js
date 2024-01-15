/**
Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(0, head);
  let curr = dummy;

  while (curr.next !== null) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return dummy.next;
};

const tail = new ListNode(6);
const list6 = new ListNode(5, tail);
const list5 = new ListNode(4, list6);
const list4 = new ListNode(3, list5);
const list3 = new ListNode(6, list4);
const list2 = new ListNode(2, list3);
const head = new ListNode(1, list2);

// const tail = new ListNode(7);
// const list3 = new ListNode(7, tail);
// const list2 = new ListNode(7, list3);
// const head = new ListNode(7, list2);

// const tail = new ListNode(1);
// const list3 = new ListNode(2, tail);
// const list2 = new ListNode(2, list3);
// const head = new ListNode(1, list2);

console.log(removeElements(head, 6));
