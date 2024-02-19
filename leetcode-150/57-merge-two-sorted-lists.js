/**
Merge Two Sorted Lists

u are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
  let head, prevNode;

  let currList1 = list1,
    currList2 = list2;

  // undefined, 1 -> 3 -> 4, 1 -> 1 -> 2 -> 4

  while (currList1 && currList2) {
    if (currList1.val < currList2.val) {
      if (prevNode) {
        prevNode.next = currList1;
        prevNode = prevNode.next;
      } else {
        prevNode = currList1;
        head = prevNode;
      }
      currList1 = currList1.next;
    } else {
      if (prevNode) {
        prevNode.next = currList2;
        prevNode = prevNode.next;
      } else {
        prevNode = currList2;
        head = prevNode;
      }
      currList2 = currList2.next;
    }
  }

  if (currList1) prevNode ? (prevNode.next = currList1) : (head = currList1);
  if (currList2) prevNode ? (prevNode.next = currList2) : (head = currList2);

  return head ?? null;
};

const node2 = new ListNode(4);
const node1 = new ListNode(2);
const head1 = new ListNode(1);
head1.next = node1;
node1.next = node2;

const node4 = new ListNode(4);
const node3 = new ListNode(3);
const head2 = new ListNode(1);
head2.next = node3;
node3.next = node4;

console.log(mergeTwoLists(undefined, undefined));
