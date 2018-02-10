// Point intersection template
// From KuangBin
#include <map>
#include <set>
#include <list>
#include <cmath>
#include <queue>
#include <stack>
#include <vector>
#include <cstdio>
#include <string>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

typedef long long ll;

#define prN printf("\n");
#define SI(N) scanf("%d", &(N))
#define SII(N, M) scanf("%d%d", &(N), &(M))
#define SIII(N, M, K) scanf("%d%d", &(N), &(M), &(K))
#define cle(a, val) memset(a, (val), sizeof(a))
#define rep(i, b) for(int i=0; i < (b); i+=1)
#define Rep(i, a, b) for(int i=(a); i<=(b); i+=1)
#define reRep(i, a, b) for(int i=(a); i>=(b); i-=1)

// Use machine epsilon
const double eps = 1e-8;

// sign
int sgn(double x)
{
  if(fabs(x) < eps) return 0;
  return x < 0 ? -1 : 1;
}

// Overload operator
struct Point
{
  double x, y;
  Point() {}
  Point(double _x, double _y)
  {
    x = _x; y = _y;
  }

  // Operator overload
  // TODO: learn c++ operator overload
  Point operator -(const Point &b)const
  {
    return Point(x - b.x, y - b.y);
  }

  // cross product
  double operator ^(const Point &b)const
  {
    return x*b.y - y*b.x;
  }

  // dot product
  double operator *(const Point &b)const
  {
    return x*b.x + y*b.y;
  }
};

struct Line
{
  Point s, e;
  Line() {}
  Line(Point _s, Point _e) 
  {
    s = _s; e = _e;
  }
};

bool inter(Line l1, Line l2)
{
  return 

    // box overlapping
    max(l1.s.x, l1.e.x) >= min(l2.s.x, l2.e.x) &&
    max(l2.s.x, l2.e.x) >= min(l1.s.x, l1.e.x) &&
    max(l1.s.y, l1.e.y) >= min(l2.s.y, l2.e.y) &&
    max(l2.s.y, l2.e.y) >= min(l1.s.y, l1.e.y) &&

    // TODO: Visualize geometrically
    sgn((l2.s-l1.s)^(l1.e-l1.s))*sgn((l2.e-l1.s)^(l1.e-l1.s)) <= 0 &&
    sgn((l1.s-l2.s)^(l2.e-l2.s))*sgn((l1.e-l2.s)^(l2.e-l2.s)) <= 0;
}

double dist(Point a, Point b)
{
  return sqrt((b-a)*(b-a));
}

int main()
{
  return 0;
}