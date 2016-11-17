function ListNode(val) {
  this.val = val;
  this.next = null;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// My first attempt flat the linked list into an array
// O(2n) space
// Top-down approach
var sortedListToBST = function(head) {
  var arr =(function(head) {
    var arr = [];
    var node = head;
    while(node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }(head));

  // same apprach as 108
  var dfs = function(nums, start ,end) {
    if (start > end) {return null;}
    var mid = Math.floor(start + (end-start)/2);
    var node = new TreeNode(nums[mid]);
    node.left = dfs(nums, start, mid - 1);
    node.right = dfs(nums, mid + 1, end);
    return node;
  };
  return dfs(arr, 0, arr.length-1);
};

// However a better solution is using bottom-up approach
// TODO: Figure out bottom up
var sortedListToBST = function(head) {
  // Get length
  var n = (function(head) {
    var n = 0;
    var node = head;
    while(node !== null) {
      n += 1;
      node = node.next;
    }
    return n;
  }(head));

  var dfs = function(head, start, end) {
    if (start > end) return null;
    var mid = Math.floor(start + (end - start)/2);
    var parent = new TreeNode(head.val);
    parent.left = dfs(head, start, mid - 1);
    if (head.next) head = head.next;
    parent.right = dfs(head, mid + 1, end);
    return parent;
  };
  return dfs(head, 0, n);
};

var head = new ListNode(5);
head.next = new ListNode(6);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(8);
var rtn = sortedListToBST(new ListNode(5));
console.log(rtn);
