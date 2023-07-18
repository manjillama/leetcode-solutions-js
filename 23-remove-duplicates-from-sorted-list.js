/**
Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let currNode = head;

  while (currNode && currNode.next) {
    if (currNode.val === currNode.next.val) currNode.next = currNode.next.next;
    else currNode = currNode.next;
  }
  return head;
};

class ListNode {
  val;
  next;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
const list2 = new ListNode(1);
const list3 = new ListNode(2);
const list4 = new ListNode(3);
const tail = new ListNode(3);

head.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = tail;

console.log(deleteDuplicates(head));
