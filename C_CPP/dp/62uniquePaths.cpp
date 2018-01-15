#include <iostream>

int uniquePaths(int m, int n) {
	vector<int> accumulator(n, 1);
	for (int r = 1; r < m; r+=1) {
		for (int c = 1; c < n; c+=1) {
			accumulator[c] += accumulator[c-1];
		}
	}
	return accumulator[n-1];
}

// symmetric structure
// Why it is slower in OJ?

int uniquePaths(int m , int n) {
	// Transpose
	if (m > n) {
		int temp = m; m = n; n = temp;
	}
	vector<int> accumulator(n, 1);

	for (int r = 1; r < m ; r+=1) {
		accumulator[r] *= 2;
		for (int c = r + 1; c < n; c+=1) {
			accumulator[c] += accumulator[c-1];
		}
	}
	return accumulator[n-1];
}

// Analytical solution with O(n) time complexity O(1) space
// Using Pascal triangle
// http://mathworld.wolfram.com/PascalsTriangle.html
int uniquePaths(int m, int n) {
	if (m == 1 || n == 1) { return 1; }

	int M = min(m, n), N = max(m, n);
	int sum = M - 1 + N - 1;
	// Deal with integer overflow
	long int factor = sum, factor2 = 1;
	for (int i = 2; i <= M - 1; i+=1) {
		factor *= sum - i + 1;
		factor2 *= i;
	}
	return factor/factor2;
}

int main() {
	return 0;
}

