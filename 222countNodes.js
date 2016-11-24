/**
 * @param {TreeNode} root
 * @return {number}
 *
 */
// Visual reference
// http://stackoverflow.com/questions/12359660/difference-between-complete-binary-tree-strict-binary-tree-full-binary-tre
// Dumb solution
var countNodes = function(root) {
  var queue = [];
  var counter = 0;
  while(root) {
    counter += 1;
    root.left && queue.push(root.left);
    root.right && queue.push(root.right);
    root = queue.shift();
  }
  return counter;
};

// As far left as possible
// Bisectional search in an continouse 1, 0 array
var findFallingEdge = function(arr) {
  var r = arr.length - 1;
  var l = 0;
  var c = r;
  while(l < r - 1) {
    arr[c] ? l = c : r = c;
    c = (l + r)/2 >> 0;
  }
  return c;
};
// Such as
 var a = [1, 1, 1, 1, 1, 1, 1, 1];
 var a = [1, 1, 1, 1, 0, 0, 0, 0];
 var r = findFallingEdge(a);
// Last positive number index 3
 console.log(r);

// Using above helper function
var findTreeLevel = function(root) {
  // find max level
  var dfs = function(node, cnt) {
    if (!node) return cnt;
    cnt += 1;
    return dfs(node.left, cnt);
  };

  return dfs(root, 0);
};

var findTreeLevel = function(root) {
  var cnt = 0;
  while(root) {
    cnt += 1;
    root = root.left;
  }
  return cnt;
};

// First iteration
var countNodes = function(root) {
    var node = root;
    if (!node) return 0;
    var h = 0;
    while(node) {
      h += 1;
      node = node.left;
    }

    if (h === 2) {
      if (node.right) {
        return 3
      }
      return 2;
    }

    // reverse dec to bin
    var dec2bin = function(dec, len) {
        var str = '';
        while(len) {
            str += dec % 2;
            dec = dec >> 1;
            len -= 1;
        }
        return str;
    }
    // helper function
    var hasNode = function(node, idx, l) {
      var dir = dec2bin(idx, l);
      for (var i = 0; i < l; i+=1) {
          node = Number(dir[l-i-1])? node.right:node.left;
      }
      return !!node;
    };
    // last level node range
    var r = 2**(h - 1) - 1;
    var l = 0;
    var c = r;
    while(l < r - 1) {
      node = node;
      hasNode(node, c, h-1) ? l = c : r = c;
      c = (l + r)/2 >> 0;
    }
    console.log(c)
    // Use math to convert
    return 2**(h-1) - 1 + c + 1;
};

// Optimized solution from Han zichi
var countNodes = function() {
  var findDepth = function(node) {
    var num = 0;
    while(node) {
      num+=1;
      node = node.left;
    }
    return num;
  };

  var ans = 0;
  var l, r;
  while(root) {
    l = findDepth(node.left);
    r = findDepth(node.right);

    if (l === r) {
      ans += 1 << l;
      node = node.right;
    } else {
      ans += 1 << r;
      node = node.left;
    }
  }
  return ans;
};
