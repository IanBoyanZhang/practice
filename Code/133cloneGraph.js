function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = {};      // Array of UndirectedGraphNode
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 *
 */

var cloneGraph = function(graph) {
  if (!graph) return null;
  // DFS
  var hash = {};
  var dfs = function(node) {
    var label = node.label;
    var newNode = new UndirectedGraphNode(label);
    hash[label] = newNode;
    var len = node.neighbors.length;
    for (var i = 0; i < len; i+=1) {
      var item = node.neighbors[i];
      if (hash[item.label] !== undefined) {
        newNode.neighbors.push(hash[item.label]);
      } else {
        newNode.neighbors.push(dfs(item));
      }
    }
    return newNode;
  };

  return dfs(graph);
};
