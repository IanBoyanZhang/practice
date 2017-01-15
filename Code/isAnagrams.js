var isAnagrams = function(str1, str2) {
  var _str1 = str1.split("").sort().join("");
  var _str2 = str2.split("").sort().join("");

  return _str1 === _str2 ? true : false;
};
