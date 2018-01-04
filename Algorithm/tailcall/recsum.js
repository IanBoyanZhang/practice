// What is tail recursion
// https://stackoverflow.com/questions/33923/what-is-tail-recursion

// Normal recursion
function recsum(x) {
	if (x === 1) {
		return x;
	} else {
		return x + recsum(x-1);
	}
}

// Rewrite in tail call
function tailrecsum(x, running_total=0) {
	if (x === 0) {
		return running_total;
	} else {
		return tailrecsum(x-1, running_total + x);
	}
}
