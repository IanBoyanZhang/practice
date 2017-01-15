/**
 ** @param {string} str
 ** @returns {string}
 **/

/*var reverseWords = function(str) {
  var w1 = "";
  var w2 = "";

  var rtn = [];
  for(var i = 0, len = str.length, j = len-1; i <= j;) {
    // control two indicator separately
    if (str[i] === " ") {
      
    }
    w1 += "";
    // TODO: end condition to find clear the word
    i+=1;
    j-=1;
  }

};*/

var reverseWords = function(str) {
  var rtn = [];
  var w = "";
  for (var i = 0, len = str.length; i < len; i+=1) {
    if (str[i] !== " ") {
      w+=1;
    }

    if (str[i] === " ") {
      w = "";
    
    if (w === "") {
  
    }
  }
};


// js method
/*var reverseWords = function(str) {
  return str.split(" ").reverse();
};*/
