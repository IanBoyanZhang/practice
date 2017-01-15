/*function TreeNode(val) {
  this.val = val;
  this.left = this.right = {
    1:1,
    2:2
  };
}

var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
console.log(root);


var func = function(arg) {
};

func([1, 2, 3, 4]);
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
    }
    console.log(count);
*/

(function(n) {
// number of students
  var prod = 1;
  for (var i = 0; i < n; i+=1) {
    prod *= (365 - i)/365;
  }
  console.log(prod);
})(30);
