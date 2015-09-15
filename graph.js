/*
 * Base line solution
 */

var Graph = function(){
  this._nodes = {};
};

Graph.prototype.addNode = function(node){
  if (node) {
    this._nodes[node] = this._nodes[node] || {};
  }
};

Graph.prototype.contains = function(node){
  return !(this._nodes[node] === undefined);
};

Graph.prototype.removeNode = function(node){
  var rtnNode;
  if (this.contains(node)) {
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    rtnNode = this._nodes[node];
    delete this._nodes[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // Not zero or undefined
  return this._nodes[fromNode][toNode] ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = 1;
  this.nodes[toNode][fromNode] = 1;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this._nodes[fromNode][toNode];
  delete this._nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var node in this._nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//-------------------------------------------------------------------------------------------------
//  Alternative Implementation
//
//  Only changed methods are shown below.  The rest remain exactly as shown in the solution above.
//
//  Q: Why is this implementation faster?
//

/*
  -----------
  Graph.prototype.addNode = function(node){
    if (node) {
      this._nodes[node] = this._nodes[node] || { edges: {} };
    }
  };

  Graph.prototype.removeEdge = function(fromNode, toNode){
    delete this._nodes[fromNode].edges[toNode];
    delete this._nodes[toNode].edges[fromNode];
  };
  -----------
*/

/*
  A:  The naive answer is that there are two instructions to the previous implementation's
      four in the original removeEdge solution.  But we need to dig deeper than that.  .indexOf() identifies where in an array a value appears.  We know from our discussions around time complexity that finding a value in an array is an O(n) operation.  Even though we aren't writing any looping structure in our solution to find the value for 'spliceIndex', we should be aware that the array method 'indexOf' must do that iteration for us.

      In Javascript, we have the luxury of using an object to store our edges rather than an array.  Doing so gives us O(1) access to any edge in that list.
*/
