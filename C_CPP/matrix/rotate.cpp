#include <vector>

void rotate(vector < vector< int > >& matrix) {
	int N = matrix.size();

	for (int x = 0; x < N/2; x+=1) {
		for (int y = x; y < N - x - 1; y+=1) {
				int temp = matrix[x][y];	
				matrix[x][y] = matrix[N-y-1][x];
				matrix[N-y-1][x] = matrix[N-x-1][N-y-1];
				matrix[N-x-1][N-y-1] = matrix[y][N-x-1];
				matrix[y][N-x-1] = temp;
		}
	}
}

int main() {
	
}
