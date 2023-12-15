/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
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

const tail = new ListNode(3);
const list4 = new ListNode(2, tail);
const list3 = new ListNode(1, list4);
const list2 = new ListNode(1, list3);
const head = new ListNode(1, list2);

// const tail = new ListNode(5);
// const list6 = new ListNode(4, tail);
// const list5 = new ListNode(4, list6);
// const list4 = new ListNode(3, list5);
// const list3 = new ListNode(3, list4);
// const list2 = new ListNode(2, list3);
// const head = new ListNode(1, list2);

console.log(deleteDuplicates(head));
