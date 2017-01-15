var BinarySearchTree = function(value) {
	var binaryTree = Object.create(bstPrototype);
	binaryTree.value = value;
	binaryTree.left = null;
	binaryTree.right = null;
	return binaryTree;
}

var bstPrototype = {};

bstPrototype.insert = function(val) {
	if ( val < this.value ) {
		if ( this.left === null ) {
			this.left = BinarySearchTree(val);
		} else {
			this.left.insert(val);
		}
	} else if ( val > this.value ) {
		if ( this.right === null ) {
			this.right = BinarySearchTree(val);
		} else {
			this.right.insert(val);
		}
	} else {
		console.log("This BST contains the value");
	}
}

bstPrototype.contains = function(val) {
	if ( val === this.value ) {
		return true;
	}
	if ( val < this.value ) {
		if (!this.left) {
			return false;
		}
		this.left.contains(val); 
	} else if ( val > this.value ) {
		if (!this.right) {
			return false;
		}
		this.right.contains(val);
	}
}

bstPrototype.depthFirstLog = function(callback) {
	callback(this.value);
	if ( this.left ) {
		this.left.depthFirstLog(callback);
	}
	if ( this.right ) {
		this.right.depthFirstLog(callback);
	}
};