/**
 * @param {string} s
 * @return {string[]}
 *
 */

var restoreIpAddresses = function(s) {
  var result = [];
  var LEN = s.length;
  var dfs = function(container, end, start) {
    if (end > LEN) return;
    if (container.length >= 4) { return; }
    var temp = s.substring(start, end);
    // Remove groups like '010'
    if ((~~temp) > 255 || (temp.length !== ('' + ~~temp).length)) return;
    container.push(temp);
    if (end === LEN && container.length === 4) {
      result.push(container.join('.'));
    }
    dfs(container, end + 1, end);
    dfs(container, end + 2, end);
    dfs(container, end + 3, end);
    container.pop(temp);
  };
  dfs([], 1, 0);
  dfs([], 2, 0);
  dfs([], 3, 0);
  return result;
};

