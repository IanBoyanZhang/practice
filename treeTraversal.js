// Inorder

// All about trees
var Tree = function(val) {
  this.val = val;
  this.left = this.right = null;
};

// Construct tree from pre-order sequence

/**
 * Construct a tree from array
 * @param {nums[]} arr inputArr
 */
var constructor = function(arr) {
  if (!arr.length) return new Tree();
  this.arrayList = arr;
  this.root = new Tree(this.arrayList[0]);
  this.iter = 0;
  this.deserialize(this.root, 1);
};

constructor.prototype.insert = function() {
  
};

constructor.prototype.deserialize = function(node, lr) {
  this.iter+=1;
  if (this.arrayList[this.iter] === -1 || this.arrayList[this.iter] === undefined) {
    return;
  }
  
  var currNode;
  if (lr) { 
    node.left = new Tree(this.arrayList[this.iter]); 
    currNode = node.left;
  } else {
    node.right = new Tree(this.arrayList[this.iter]);
    currNode = node.right;
  }
  this.deserialize(currNode, this.iter, 1);
  this.deserialize(currNode, this.iter, 0);
};

constructor.prototype.serialize = function(root) {
};

constructor.prototype.peek = function() {
//  console.log(this.root);
  console.log(this.root.left.left);
};

// Test -->
// var treeNodeList = [20, 8, 10, 5, -1, -1, -1, -1, -1];
var treeNodeList = [20, 8, 10, 5, 6, -1, -1, -1, -1, -1];
var tree = new constructor(treeNodeList);
tree.peek();
