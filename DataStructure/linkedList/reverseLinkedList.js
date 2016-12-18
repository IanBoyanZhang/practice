var index = require('./linkedList');
var LinkedList = index.LinkedList;
var Node = index.Node;

// now reverse
// Naive
LinkedList.prototype.reverse = function() {
  var seq = [];
  var curr = this.head;
  while (curr) {
    seq.push(curr);
    curr = curr.next;
  }
  // rebuild;
  this.head = curr = seq.pop();
  while (seq.length) {
    curr.next = seq.pop();
    curr = curr.next;
  }
  this.end = curr;
  // Important clean up
  this.end.next = null;
};

// build the linkedList;
var ll = new LinkedList();
ll.append(new Node(7));
ll.append(new Node(8));
// ll.append(new Node(2));
// ll.append(new Node(3));
ll.append(new Node(5));

ll._peek();
ll.reverse();
ll._peek();

// Below two methods don't seem working

// slightly improved
/*LinkedList.prototype.reverse = function() {
  if (!this.head || !this.head.next) { return this.head; }
  
  var curr = this.head;
  var previous = null;

  while(curr) {
    var save = curr.next;
    curr.next = previous;
    previous = curr;
    curr = save;
  }
  return previous;
};*/

/*LinkedList.prototype.reverse = function(node, previous) {
  if (node.next !== null) {
    this.reverse(node.next, node);
  }
  node.next = previous;
};*/


var ll = new LinkedList();
ll.append(new Node(7));
ll.append(new Node(8));
// ll.append(new Node(2));
// ll.append(new Node(3));
ll.append(new Node(5));

ll._peek();
ll.reverse(ll.head, null);
ll._peek();


