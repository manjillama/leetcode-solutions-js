/**
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let length = 0;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    length = length + 2;
  }

  return slow;
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
const list2 = new ListNode(2);
const list3 = new ListNode(3);
const list4 = new ListNode(4);
const list5 = new ListNode(5);
const tail = new ListNode(6);

head.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = list5;
list5.next = tail;

console.log(middleNode(head));
