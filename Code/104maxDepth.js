var maxDepth = function(root) {
  var maxDepth = 0;
  var dfs = function(node, cnt) {
    if (!node) return;
    cnt += 1;
    if (cnt > maxDepth) maxDepth = cnt;
    dfs(node.left, cnt);
    dfs(node.right, cnt);
  };
  dfs(root, 0);
  return maxDepth;
};

