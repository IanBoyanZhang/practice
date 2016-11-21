var TreeNode = require('./include/TreeNode').TreeNode;

/**
 * @param {number} n
 * @return {TreeNode[]}
 *
 */

// Back tracking?
var generateTrees = function(n) {
  if (!n) return null;

  var genBST = function(min, max) {
    var ret = [];
    if (min > max) {
      ret.push(null);
      return ret;
    }

    var leftSubTree;
    var rightSubTree;
    for (var i = min; i <= max; i+=1) {
      leftSubTree = genBST(min, i-1);
      rightSubTree = genBST(i+1, max);
      for (var j = 0; j < leftSubTree.length; j+=1) {
        for (var k = 0; k < rightSubTree.length; k+=1) {
          var root = new TreeNode(i);
          root.left = leftSubTree[j];
          root.right = rightSubTree[k];
          ret.push(root);
        }
      }
    }
    return ret;
  };

  return genBST(1, n);
};

var rtn = generateTrees(3);
console.log(rtn);



