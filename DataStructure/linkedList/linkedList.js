// Singlely list
var Node = function(value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.end = this.head;
  this.size = 0;
  // Will be used for iterator
  this.curr = null;
};

LinkedList.prototype.append = function(node) {
  if (!this.head) {
    this.head = node;
    this.size += 1;
    this.end = node;
    return 0;
  }
  this.end.next = node;
  this.end = null;
  this.end = node;
  this.size += 1;
  return 0;
};

LinkedList.prototype.getSize = function() {
  return this.size;
};

LinkedList.prototype.getHead = function() {
  return this.head;
};

LinkedList.prototype.getTail = function() {
  return this.end;
};

// iterator
LinkedList.prototype.next = function() {
  // Yield
  if (this.curr === this.end) { this.curr = this.head; }
  else if (!this.curr) { this.curr = this.head; }
  else { this.curr = this.curr.next; }
  return this.curr.value;
};

// Debug
LinkedList.prototype._peek = function() {
  console.log(this.head);
  return 0;
};

var test = function() {
  var ll = new LinkedList();
  ll.append(new Node(1));
  ll.append(new Node(5));
  ll.append(new Node(6));
  console.log(ll.next());
  console.log(ll.next());
  console.log(ll.next());
  ll._peek();
  console.log(ll.next());
  console.log(ll.getSize());
};
// Test linkedList

module.exports = {
  LinkedList: LinkedList,
  Node: Node,
  test: test
};
