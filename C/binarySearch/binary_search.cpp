#include <time.h>
#include <iostream>
#include <algorithm>
#include <vector>

using std::cout;
using std::vector;
using std::sort;
using std::binary_search;
using std::endl;

#define DEBUG

// For std sort and std binary search
bool comparator(int i, int j) { return (i<j); };

vector<int> generate_random_vector(int size, int from, int to) {
  srand(time(NULL));
  vector<int> rand_nums;
  /* generate_random number between from and to */
  for (int i = 0; i < size; i+=1) {
    rand_nums.push_back(rand() % to + from);
  }
  return rand_nums;
};

void print_out_vector(vector<int> vector) {
  for (std::vector<int>::iterator it=vector.begin(); it!=vector.end(); it+=1) {
    cout << ' ' << *it;
  }
  cout << endl;
};

bool search_num_in_vector(vector<int> vector, int target_value) {
  return std::binary_search(vector.begin(), vector.end(), target_value, comparator);
};

bool my_search_num_in_vector(vector<int> vector , int target_value) {
  int middle, left = 0, right = vector.size() - 1;
  while(left <= right) {
    middle = (left + right)/2;
    if (vector[middle] == target_value) {
      return true;
    } else if (vector[middle] > target_value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
};

int main() {
//  int size = 1024 * 1024, from = 1, to = 10;
#ifdef DEBUG
  int size = 10, from = 1, to = 10;
#else
  int size = 1024 * 1024, from = 1, to = 10;
#endif
  vector<int> rand_nums = generate_random_vector(size, from, to);
  sort(rand_nums.begin(), rand_nums.end(), comparator);

#ifdef DEBUG
  print_out_vector(rand_nums);
#endif

  cout << "Using std library -> " << endl;
  if(search_num_in_vector(rand_nums, 2)) {
    cout << "Found!\n";
  } else {
    cout << "Not found\n";
  }

  cout << "Using my own implementation -> " << endl;
  if(my_search_num_in_vector(rand_nums, 2)) {
    cout << "Found!\n";
  } else {
    cout << "Not found\n";
  }

  return 0;
};
