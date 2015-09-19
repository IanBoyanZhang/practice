var Tree = function(value) {
	var newTree = {};
	newTree.value = value;
	newTree.children = [];

	return newTree;
}

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var treeMethods = {};

treeMethods.addChild = function(val) {
	var child = Tree(val);
	this.children.push(child);
}

treeMethods.contains = function(val) {
	var wasFound = false;
	if ( val = this.value ) {	
		return true;
	} 

	for ( var i = 0, len = this.children; i < len; i++ ) {
		wasFound = wasFound || this.children[i].contains(val);
	}

	return wasFround;
}

treeMethods.traverse = function(callback) {
	callback(this.value);

	if (!this.children.length) { return; }
	for ( var i = 0, len = this.children; i < len; i++ ) {
		this.children[i].traverse(callback);
	}	
}