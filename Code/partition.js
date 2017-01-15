/**
 * Definition for singly-linked list
 * function ListNode(val) {
 *      this.val = val;
 *      this.next = null;
 * }
 *
 */

/**
 * @param {listNode} head
 * @param {number} x
 * @return {listNode}
 */
var partition = function(head, x) {
  'use strict';
  if (!head) return [];
  var le = [], ge = [];
  // traverse the linked list
  var currNode = head;
  while(currNode) {
    currNode.val < x ? le.push(currNode.val) : ge.push(currNode.val);
    currNode = currNode.next;
  }

  // Rebuild the linkedList using queue
  var nodeList = new ListNode(0); currNode = nodeList;
  while(le.length) {
    currNode.next = new ListNode(le.shift());
    currNode = currNode.next;
  }

  while(ge.length) {
    currNode.next = new ListNode(ge.shift());
    currNode = currNode.next;
  }
  return nodeList.next;
};

