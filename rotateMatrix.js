var rotateMat = function(mat) {
    var len = mat.length;
    for (var i = 0; i < Math.ceil(len/2); i++) {
        for (var j = i; j < len - 2*i + i - 1; j++) {
            var temp = mat[i][j];
            mat[i][j] = mat[len-1-j][i];
            mat[len-1-j][i] = mat[len-1-i][len-1-j];
            mat[len-1-i][len-1-j] = mat[j][len-1-i];
            mat[j][len-1-i] = temp;
        }
    }
    return mat;
}
​
var genMat = function(n) {
    var rtnMat = [];
    for (var i = 0; i < n; i++) {
        rtnMat.push([]);
        for (var j = 0; j < n; j++) {
            rtnMat[i][j] = i * n + j;
        }
    }
    return rtnMat;
}
​
var someMat = genMat(5);
​
console.log(rotateMat(someMat));
