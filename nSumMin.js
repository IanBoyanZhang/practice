// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    // Minimize A[p] + A[q] while q - p > 1

    // Hash sorted the sequence BST (nlog)
    // To achieve O(n) worst case time complexity, we can't sort it
    var i = j = 0;
    var len = A.length;

    // Create two maps, find min value till current index
    // from both left and right
    var left = {};
    left[0] = 0;
    var leftmin = A[0];
    var right = {};
    right[len-1] = len-1;
    var rightmin = A[len-1];
    for (i = 1; i < len; i+=1) {
        if (A[i] < leftmin) {
            left[i] = i
            leftmin = A[i];
        } else {
            left[i] = left[i-1];
        }
    }

    // TODO: combine two sweeps together
    for (j = len-2; j > 0; j-=1){
        if (A[j] < rightmin) {
            right[j] = j;
            rightmin = A[j];
        } else {
            right[j] = right[j+1];
        }
    }

    console.log("left", left);
    console.log("right", right);

    var k = 1;
    var t_sum = 0;
    var t_sum_min = A[left[0]] + A[right[len-1]];
    for (; k < len; k+=1) {
        t_sum = A[left[k]] + A[right[k]];
        if (t_sum < t_sum_min && left[k] < right[k] - 1) {
            console.log(t_sum)
            console.log("k", k);
            console.log("-->", left[k])
            console.log("-->", right[k]);
            t_sum_min = t_sum;
        }
    }
    return t_sum_min;
}

var A = [5, 2, 4, 6, 3, 7];
var res = solution(A);
console.log(res);
