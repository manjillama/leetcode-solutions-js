/**
Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefin ed ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let list = dummyNode;

  while (list.next && list.next.next) {
    if (list.next.val === list.next.next.val) {
      while (
        list.next &&
        list.next.next &&
        list.next.val === list.next.next.val
      ) {
        list.next = list.next.next;
      }

      list.next = list.next.next;
    } else list = list.next;
  }
  return dummyNode.next;
};
