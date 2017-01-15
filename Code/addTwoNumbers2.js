/**
 * Definition for singly-linked list
 * function ListNode(val) {
 *      this.val = val;
 *      this.next = null;
 * }
 *
 */

/**
 * @param {listNode} l1
 * @param {listNode} l2
 * @return {listNode}
 */

// Simplified logic
var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) return new ListNode(0);
  var sum = 0;
  var nodeList = ListNode(0), currNode = ListNode;
  while(l1 || l2 || sum) {
    if (l1) { sum += l1.val; l1 = l1.next; }
    if (l2) { sum += l2.val; l2 = l2.next; }
    
    currNode.next = new ListNode(sum%10);
    currNode = currNode.next;

    sum = sum >= 10 ? 1 : 0;
  }
  
  // if (sum) currNode.next = new ListNode(sum);       // currNode.next = Listnode(1);
  return nodeList.next;
};


