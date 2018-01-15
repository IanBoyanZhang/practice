#include <iostream>

// With confusing one liner
int uniquePathsWithObstacles(vector<vector<int> >& obstacleGrid) {
  int R = obstacleGrid.size();
  int C = obstacleGrid[0].size();
  vector<int> accumulator(C, 0);
  if (!obstacleGrid[0][0]) { accumulator[0] = 1; }
  for (int r = 0; r < R; r+=1) {
    for (int c = 0; c < C; c+=1) {
    	accumulator[c] =  obstacleGrid[r][c] ? 0 : (c - 1) >= 0 ? accumulator[c] + accumulator[c - 1] : accumulator[c];
   	}
  }
  return accumulator[C - 1];
}

int main() {
	return 0;
}
