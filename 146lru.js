// Node
var Node = function(key, val) {
  this.next = null;
  this.prev = null;
  this.key = key;
  this.value = val;
}


var doublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

doublyLinkedList.prototype.prepend = function(key, val) {
  var node = new Node(key, val);
  this.prepend_by_node(node);
  return node;
};

doublyLinkedList.prototype.prepend_by_node = function(node) {
  if (!this.size) {
    this.head = node;
    this.tail = node;
  } else {
    // Sequence is important for avoid circular
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    node.prev = null;
  }
  this.size+=1;
};

doublyLinkedList.prototype.remove_by_node = function(node) {
  // head
  if (node.prev) {
    node.prev.next = node.next;
  }
  // tail
  if(node === this.tail) {
    this.remove_tail();
    return;
  }
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size -= 1;
};

// Edge case only one element
doublyLinkedList.prototype.remove_tail = function() {
  if (this.size === 1) {
    this.tail = null;
    this.head = null;
  } else {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  }
  this.size -=1;
};


var LRUCache = function(capacity) {
  this._map = {};
  this._list = new doublyLinkedList();
  this._capacity = capacity;
};

LRUCache.prototype.set = function(key, val) {
  // update
  var node = this._map[key];
  if (node) {
    node.value = val;
    return this.get(key);
  }
  // Sequence is important
  // remove key in map first
  if (this._list.size >= this._capacity) {
    delete this._map[this._list.tail.key];
    this._list.remove_tail();
  }
  this._map[key] = this._list.prepend(key, val);
  return this._map[key];
};

LRUCache.prototype.get = function(key) {
  var node = this._map[key];
  if (!node) { return -1; }
  // if head don't do it
  if (node.prev) {
    this._list.remove_by_node(node);
    this._list.prepend_by_node(node);
  }
  return node.value;
};

// Test case 1
// var lru = new LRUCache(2);
// lru.set(1, 'one');
// lru.set(2, 'two');
// lru.set(3, 'three');
// var ret = lru.get(2);

// var ret = lru.get(1);


// Test case 2
// var lru = new LRUCache(1);
// lru.set(2, 1);
// lru.get(2);

// // 2,[set(2,1),set(3,2),get(3),get(2),set(4,3),get(2),get(3),get(4)]

var lru = new LRUCache(1);
lru.set(2, 1);
lru.set(3, 2);
lru.get(3);
// console.log(lru._list.head);
// console.log(lru);
lru.get(2);
// lru.set(4, 3);
console.log(lru);
// lru.get(2);
lru.get(3);
// lru.get(4);
console.log(lru);
