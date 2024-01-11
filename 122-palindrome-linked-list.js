/**
Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const mid = getMiddleNode(head);
  let leftSide = head;
  let rightSide = reverseList(mid.next);

  while (rightSide) {
    if (rightSide.val !== leftSide.val) return false;
    rightSide = rightSide.next;
    leftSide = leftSide.next;
  }

  return true;
};

const getMiddleNode = (head) => {
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

const reverseList = (head) => {
  let currNode = head;
  let prevNode = null;

  while (currNode) {
    const nextNode = currNode.next;

    currNode.next = prevNode;
    prevNode = currNode;

    currNode = nextNode;
  }

  return prevNode;
};

const tail = new ListNode(1);
const list6 = new ListNode(2, tail);
const list5 = new ListNode(3, list6);
const list4 = new ListNode(4, list5);
const list3 = new ListNode(3, list4);
const list2 = new ListNode(2, list3);
const head = new ListNode(1, list2);

console.log(isPalindrome(head));
