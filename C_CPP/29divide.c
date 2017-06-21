#include <stdio.h>
#include <stdlib.h>
#include <limits.h> // INT_MIN

int divide(int dividend, int divisor) {
//  printf("%d", !5);
  if (!divisor || (dividend == INT_MIN)) {
    return INT_MAX;
  }
  int sign = ((dividend < 0) ^ (divisor < 0)) ? 0 : 1;
//  long long dvd = lab
  long long dvd = labs(dividend);
  long long dvs = labs(divisor);
  int res = 0;
  while(dvd >= dvs) {
    long long temp = dvs, mul = 1;
    while (dvd >= (temp << 1)) {
      temp <<= 1;
      mul <<= 1;
    }
    dvd -= temp;
    res += mul;
  }
  return sign > 0 ? res : -res;
}

int main() {
//  int res = divide(-35, 5);
  int res = divide(-35, 0);
  printf("%d", res);
}
