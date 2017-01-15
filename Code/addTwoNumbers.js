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

var addTwoNumbers = function(l1, l2) {
  if (!curr1 && !curr2) return [0];
  var curr1 = l1, curr2 = l2;
  var digit1 = curr1.val, digit2 = curr2.val, carry = 0;

  // Construct a listNode to store values
  var rtnList, currNode, prntNode, addRes = 0;
  while(curr1 || curr2 || carry) {

    digit1 = curr1 ? curr1.val : 0;
    digit1 = curr2 ? curr2.val : 0;
    carry = (addRes = digit1 + digit2 + carry) >= 10 ? 1 : 0;
    addRes -= addRes >= 10 ? 10 : 0;

  // Construct the first node
    rtnList = rtnList || ListNode(addRes);
    currNode = currNode || rtnList;
    prntNode && (prntNode.next = ListNode(addRes));
    prntNode = currNode;

    curr1 && (curr1 = curr1.next);
    curr2 && (curr2 = curr2.next);
  }
  return rtnList;
};


