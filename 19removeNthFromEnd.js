function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Given linked list 1->2->3->4->5, and n = 2
 * from the end
 * After removing the second node from the end, the linked list becomes 1->2->3->5
 * @param [ListNode] head
 * @param {number} n
 * @return {ListNode}
 */
// Two passes
// Attempt1: O(n) space O(n) time
var removeNthFromEnd = function(head, n) {
  var node = head;
  var cnt = 0;
  while(node) {
    node = node.next;
    cnt += 1;
  }
  var len = cnt;
  cnt = 1;
  node = head;
  // First node
  if (cnt === len - n + 1) {
    return head.next;
  }

  while(node.next) {
    if (cnt + 1 === len - n + 1) {
      node.next = node.next.next;
      return head;
    }
    cnt += 1;
    node = node.next;
  }
  // Last node
  if (cnt + 1 === len - n + 1) {
    node.next = null;
    return head;
  }
  return [];
};

var removeNthFromEnd = function(head, n) {
  var arr = [];

  while (head) {
    // arr.push(new ListNode(head.val));
    arr.push(head);
    head = head.next;
  }
  var len = arr.length;
  var idx= len - n + 1 - 1;
  if (idx === 0) { 
    return arr[idx].next; 
  }
  arr[idx - 1].next = arr[idx + 1] ? arr[idx + 1] : null;
  return arr.length === 0 ? null : arr[0];
};

var head = new ListNode(1);
head.next = new ListNode(2);
console.log(head);
var rtn = removeNthFromEnd(head, 1);
console.log(rtn);

var head = new ListNode(1);
head.next = new ListNode(2);
console.log(head);
var rtn = removeNthFromEnd(head, 2);
console.log(rtn);
