var TreeNode = require('./include/TreeNode').TreeNode;

/**
 * @constructor
 * @param {TreeNode} root - root of the binary searhc tree
 * This is a non recursive inorder iterator
 */
// isLargest
// O(n) memory
var BSTIterator = function(root) {
  this._currIdx = 0;

  // flat the tree
  this._arr = [];
  var walk = function(node) {
    if (!node) return null;
    walk(node.left);
    this._arr.push(node.val);
    walk(node.right);
  }.bind(this);
  walk(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 *
 */
BSTIterator.prototype.hasNext = function() {
  if (this._arr[this._currIdx]!== undefined) return true;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 *
 */
BSTIterator.prototype.next = function() {
  return this._arr[this._currIdx++];
};

/**
 * Your BSTIterator will be called like this;
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// O(h) where h is height of the tree
// http://www.cnblogs.com/boring09/p/4251790.html
var BSTIterator = function(root) {
  this._stack = [];
  this._pushLeft(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 *
 */
BSTIterator.prototype.hasNext = function() {
  return !!this._stack.length;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 *
 */
BSTIterator.prototype.next = function() {
  if (!this.hasNext()) return -1;

  var top = this._stack.pop();
  if (top.right) this._pushLeft(top.right);

  return top.val;
};

BSTIterator.prototype._pushLeft = function(node) {
  while(node) {
    this._stack.push(node);
    node = node.left;
  }
};
