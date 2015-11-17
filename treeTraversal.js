// Inorder

// All about trees
var Tree = function(val) {
  this.val = val;
  this.left = this.right = null;
};

var treeNodes = [];

// Construct tree from pre-order sequence

/**
 * Construct a tree from array
 * @param {nums[]} arr inputArr
 */
var constructor = function(arr) {
  if (!arr.length) return new Tree();

  recurse(0, root);
};

constructor.prototype.insert = function() {
  
};
