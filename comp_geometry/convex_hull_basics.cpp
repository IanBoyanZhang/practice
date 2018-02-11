// Reference
// https://github.com/kartikkukreja/blog-codes/blob/master/src/Graham%20Scan%20Convex%20Hull.cpp
#include <cmath>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <vector>
#include <stack>

using namespace std;
const double eps = 1e-6;
const double PI = acos(-1.0);

struct Point
{
  double x, y;

  // comparision
  bool operator < (Point b)
  {
    if (y != b.y)
    {
      return y < b.y;
    }
    return x < b.x;
  }
};

// Point having the least y coordinate, used for sorting other points
// according to polar angle about this point
Point pivot;

int sgn(double x)
{
  if (fabs(x) <= eps) return 0;
  return x > 0 ? 1 : -1;
}

// All 2D cases
double operator*(Point a, Point b)
{
  return a.x * b.x + a.y * b.y;
}

double operator^(Point a, Point b)
{
  return a.x * b.y - a.y * b.x;
}

Point operator-(Point a, Point b)
{
  Point c;
  c.x = a.x - b.x;
  c.y = a.y - b.y;
  return c;
}

double dist(Point a, Point b)
{
  return sqrt((a - b) * (a - b));
}

Point s[1010];

bool cmp(Point a, Point b)
{
    double tmp = (a-s[0])^(b-s[0]);
    if(sgn(tmp)>0||(sgn(tmp) == 0 && dist(a,s[0]) < dist(b,s[0]))) return 1;
    return 0;
}

vector<Point> pts;

// Counter clock wise
// Determinant
double ccw(Point p1, Point p2, Point p3)
{
  return (p2.x - p1.x)*(p3.y-p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
}

// Returns square of Euclidean distance between two points
int sqrDist(Point a, Point b)
{
  int dx = a.x - b.x, dy = a.y - b.y;
  return dx * dx + dy * dy;
}

// Used for sorting points according to polar order order w.r.t the pivot
bool POLAR_ORDER(Point a, Point b)
{
  int order = ccw(pivot, a, b);
  if (order == 0)
  {
    return sqrDist(pivot, a) < sqrDist(pivot, b);
  }
  return order < 0;
}

stack<Point> grahamScan(Point *points, int N)
{
  stack<Point> hull;

  if (N < 3) return hull;

  // find the point having the least y coordinate (pivot),
  // ties are broken in favor of lower x coordinate

  int leastY = 0;
  for (int i = 1; i < N; i+=1)
  {
    if (points[i] < points[leastY])
      leastY = i;
  }

  // swap the pivot with first point
  // find min
  Point temp = points[0];
  points[0] = points[leastY];
  points[leastY] = temp;

  // sort the remaining point according to polar order about the pivot
  pivot = points[0];

  sort(points + 1, points + N, POLAR_ORDER);

  hull.push(points[0]);
  hull.push(points[1]);
  hull.push(points[2]);

  for (int i = 3; i < N; i+=1)
  {
    Point top = hull.top();
    hull.pop();
    // less than zero counter clock wise turn
    while(ccw(hull.top(), top, points[i]) >= 0) {
      top = hull.top();
      hull.pop();
    }
    hull.push(top);
    hull.push(points[i]);
  }
}

// double get_polar_angle(Point p1, Point p2)
// {
//   return (p2.y - p1.y)/(p2.x - p1.x);
// }

// // All points
// // pts already sorted by y
// void sort_by_polar_angle(vector<Point>& pts, Point start_point)
// {

//   vector<double> angles;
//   for(int i = 0; i < pts.size(); i+=1) {
//     angles.push_back(get_polar_angle(start_point, pts[i]));
//   }
//   sort(angles.begin(), angles.end());
// }

// void sort_by_y(vector<Point>& pts)
// {
//   sort(pts.begin(), pts.end(), 
//   // lambda expression
//   [](Point p1, Point p2) {
//     return abs(p1.y) < abs(p2.y);
//   });
// }

void graham() 
{
  // sort by polar angle with points
}

// Graham's method: 
int main() {
  Point points[] = {{0, 0}, {1, 1}, {2, 2}, {3, -1}};
  int N = sizeof(points)/sizeof(points[0]);

  stack<Point> hull = grahamScan(points, N);
  while (!hull.empty())   {
    Point p = hull.top();
    hull.pop();

    printf("(%d, %d)\n", p.x, p.y);
  }

  return 0;
}