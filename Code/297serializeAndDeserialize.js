var TreeNode = require('./include/TreeNode').TreeNode;
// left - right
// Preorder

//  http://fisherlei.blogspot.com/2013/03/interview-serialize-and-de-serialize.html
//  http://www.geeksforgeeks.org/serialize-deserialize-binary-tree/
//  http://www.cnblogs.com/grandyang/p/4913869.html

// Depth first
/**
 * @param Encodes a tree to a single string
 * @return {string}
 */
// Using queue
/*var serialize = function(root) {
  var res = [];
  var q = [];
  if (root) { q.push(root); }
  while(q.length) {
    var top = q.shift();
    res.push(top);
    if (top) {
      q.push(top.left);
      q.push(top.right);
    }
  }
  return res;
};*/
var serialize = function(root) {
  var res = [];
  var serializer = function(node) {
    if (!node) return res.push(null);
    res.push(node.val);
    serializer(node.left);
    serializer(node.right);
  };
  serializer(root);
  return res;
};
/**
 * Decodes your encoded data to tree
 * @param {string} data
 * @return {TreeNode}
 *
 */
//var deserialize = function(data) {
var deserialize = function(data) {
  var idx = 0;
  var deserializer = function(q) {
    if (idx >= q.length || q[idx] === null) {
      return null;
    }
    var node = new TreeNode(q[idx]);
    idx += 1;
    node.left = deserializer(q);
    idx += 1;
    node.right = deserializer(q);
    return node;
  };
  return deserializer(data, 0);
};

// var d = [1, 2, 3, null, null, 4, 5];
var d = [1, 2, 3];
var d = [];
//var rtn = deserialize(serialize(d));
// var rtn = serialize(deserialize(d));
var rtn = serialize(deserialize(d));
// var rtn = deserialize(d);
// var rtn = deserialize(serialize(d));
var rtn = serialize(d);
console.log(rtn);
