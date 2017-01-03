/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// TLE
// O(s * plogp)
var findAnagrams = function(s, p) {
  function help(str) {
    return str.split('').sort().join('');
    // return str.split('').sort().toString();
  }
  var s_p = help(p);
  var l_p = p.length, l_s = s.length;
  var arr = [];
  for (var i = 0; i < l_s - l_p + 1; i += 1) {
    if (s_p === help(s.substr(i, l_p))) {
      arr.push(i);
    }
  }
  return arr;
};

// Now uses hash

var findAnagram = function(s, p) {
  function isAnagram(s, t) {
    for (var i = 0; i < 26; i += 1) {
      if (~~s[i] !== ~~t[i]) {
        return false;
      }
    }
    return true;
  }

  var hash = {};
  var len = p.length;
  var s_l = s.length;
  var index = 0;
  // build hash
  for (var i = 0; i < len; i += 1) {
    index = p.charCodeAt(i) - 97;
    hash[index] = ~~hash[index] + 1;
  }
  var ans = [];
  var res = [];
  for (i = 0; i < s_l; i += 1) {
    index = s.charCodeAt(i) - 97;
    ans[index] = ~~ans[index] + 1;

    if (i >= len) {
      index = s.charCodeAt(i - len) - 97;
      ans[index] = ans[index] - 1;
    }

    if (i + 1 >= len) {
      isAnagram(hash, ans) && res.push(i - len + 1);
    }
  }
  return res;
};
