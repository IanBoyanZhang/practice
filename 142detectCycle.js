var ListNode = require('./include/LinkNode').ListNode;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Given a linked list, return the nodes where the cycle begins, if there is no cycle, return null
// Do not modify the linked list
// Solve it without using extra space?
// https://qiuyuntao.github.io/leetcode/solution/142.html
var detectCycle = function(head) {
  var slow = head;
  var fast = head;
  var metOnce = false;
  while(fast && fast.next) {
    slow = slow.next;
    fast = metOnce ? fast.next : fast.next.next;
    if (slow === fast) {
      if (!metOnce) {
        slow = head;
        metOnce = true;
        if (slow === fast) {
          return slow;
        }
        continue;
      }
      return slow;
    }
  }
  return null;
};

