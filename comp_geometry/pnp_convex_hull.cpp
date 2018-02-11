// Solution 1 with generalized Winding number algorithm
// http://geomalgorithms.com/a03-_inclusion.html
// http://www.bijishequ.com/detail/159004?p=57-61
// Solution 2 for convex cases

#include <cmath>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <vector>
#include <stack>

const double eps = 1e-10;
// const 

int dcmp (double x)
{
  if (fabs(x) < eps) return 0;
  return x < 0 ? -1 : 1;
}

int sgn(double x)
{
  if(fabs(x) < eps) return 0;
  return x < 0 ? -1 : 1;
}

struct Point
{
  double x, y;
  Point() {};
  Point(double x, double y): x(x), y(y) {};
  Point operator- (Point B)
  {
    return Point(x - B.x, y - B.y);
  }

  // Inner product
  double operator* (Point B)
  {
    return x * B.x + y * B.y; 
  }

  // Cross product
  double operator^ (Point B)
  {
    return x * B.y - y * B.x;
  }
};

// or determinant is zero
// double ccw(Point p1, Point p2, Point p3)
// {
//   return (p2.x - p1.x)*(p3.y-p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
// }

// bool inSegment(Point P, Point A, Point B)
// {
//   return ccw(P, A, B) == 0;
// }

bool InSegment(Point P, Point A, Point B)
{
  return dcmp((P - A)^(P - B)) == 0 && dcmp((A-P) * (B-P)) <= 0;
}

bool PointInPolygon(Point p,Point*poly,int n)
{
    int wn=0;
    for(int i=0;i<n;++i)
    {
        if(InSegment(p,poly[i],poly[(i+1)%n])) return true;
        int k=dcmp( (poly[(i+1)%n]-poly[i])^ (p-poly[i] ) );
        int d1=dcmp( poly[i].y-p.y );
        int d2=dcmp( poly[(i+1)%n].y-p.y );
        if(k>0 && d1<=0 && d2>0) wn++;
        if(k<0 && d2<=0 && d1>0) wn--;
    }
    if(wn!=0) return true;
    return false;
}

// Convex only
// If vertices are sorted in ccw/cw order
// https://stackoverflow.com/questions/1119627/how-to-test-if-a-point-is-inside-of-a-convex-polygon-in-2d-integer-coordinates
bool PointInPolygonConvex(Point p, std::vector<Point>& vertices) {
  int n_vertices = vertices.size();
  int prev_sgn = 0;

  for (int i = 0; i < n_vertices; i+=1) {
    Point a = vertices[i];
    Point b = vertices[(i+1)/n_vertices];

    Point affine_segment = b - a;
    Point affine_point = p - a;
    int curr_sgn = (b-a)^(p-a);
    if (curr_sgn == 0) return false;
    else if (prev_sgn == 0) prev_sgn = curr_sgn;
    else if (prev_sgn != curr_sgn) return false;
  }
  return true;
}

int main()
{
    // int n;
    // while(scanf("%d",&n)==1 && n)
    // {
    //     Point poly[maxn],p;
    //     for(int i=0;i<n;++i)
    //         scanf("%lf%lf",&poly[i].x,&poly[i].y);
    //     scanf("%lf%lf",&p.x,&p.y);
    //     printf("%c\n",PointInPolygon(p,poly,n)?'T':'F');
    // }
    // return 0;
}