// leaf is boolean
var bTree = function(t, leaf, value, n) {
  // var newTree = {};
  this.value = value;
  this.keys = [];		// Will be an array with size 2*t - 1	
  this.t = t;
  this.children = []; 	// size 2*t
  this.n = n; 			// current number of keys, initialize counter as zero?
  this.leaf = leaf;  	// Boolean to check if it's leaf or not
}


var bTreeNode = function(t, leaf, value, n) {
  
} 

// There are n keys and n + 1 children, traverse through n keys and first n children
bTree.prototype.traverse = function(cb) {
  cb(this.value);
  for (var i = 0; i < n; i++) {
  	// If this is not leaf, then before printing key[i]
  	// traverse the subtree rooted with child C[i]
  	var child = this.children[i];
	if (child.leaf === false) {
	  child.traverse(cb);
	}
  }

  // Print the subtree rooted with last child
  if (child.leaf === false) {
	children[i].traverse(cb);	
  }
};

// Function to search key k in subtree rooted with this node
bTree.prototype.contains = function(value) {
  var i = 0;

  // Find the first key greater than or equal to k
  while ( i < this.n && value > this.keys[i]) {
  	// b tree vs whatever tree with different
  	i++;
  }

  // If the found key is equal to k, return this node
  if (this.keys[i] === value) {
  	return this; 				// return the node
  }

  if (this.leaf	=== true) {
  	return null;
  }

  return this.children[i].contains(value);
};

// bTree.prototype.insert = function() {
//   var child = bTree(t, false);
//   this.child
// // }
bTree.prototype.insert = function(value) {
	// body...
	// var child = bTree(this.t, true, value);
	if (this.root)

};

bTree(t, true, value, 1); 			// Add bTree root

