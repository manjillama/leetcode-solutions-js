// 1 -> 2 -> 3 -> 4 -> 5

// nextNode: 2 -> 3 -> 4 -> 5
// 1 -> null
// prev = 1 -> null
// curr = 2 -> 3 -> 4 -> 5

// nextNode: 3 -> 4 -> 5
// 2 -> 1 -> null
// prev = 2 -> 1 -> null
// curr = 3 -> 4 -> 5

let reverseList = (head) => {};

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
const tail = new ListNode(5);

head.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = tail;

console.log(reverseList(head));
