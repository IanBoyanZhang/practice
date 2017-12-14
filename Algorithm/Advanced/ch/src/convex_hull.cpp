#include <iostream>
#include <liblas/liblas.hpp>
#include "2d.hpp"
using namespace std;

struct Point {
    float x, y;
};

// To find orientation of ordered triplet (p, q, r)
// The function returns following values
// 0 --> p, q and r are colinear
// 1 --> Clockwise
// 2 --> Counterclockwise
int orientation(Point p, Point q, Point r) {
    float val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (val == 0) { return 0; }  // colinear
    return val > 0 ? 1 : 2; // clock or counterclock wise
}

vector<Point> convexHull(Point points[], int n) {
    // There must be at least 3 points
    if (n < 3) { return; }

    // Initialize result
    vector<Point> hull;

    // Find the leftmost point
    int l = 0;
    for (int i = 0; i < n; i+=1) {
        if (points[i].x < points[l].x) {
            l = i;
        }
    }

    // Start from leftmost point, keep moving counterclockwise
    // until reach the start point again. This loop runs O(h) times where
    // h is number of points in result or output
    int p = l, q;
    do {
        // Add current point to result
        hull.push_back(points[p]);

        // Search for a point 'q' such that orientation (p, x, q) is counter clockwise for 
        // all points 'x'. The idea is to keep track of last visited most counterclock
        // wise point in q. If any point 'i' is more counter clock-wise than q, then update
        // q. If any point 'i' is more counterclockwise than q, then update q.
        q = (p + l) % n;
        for (int i = 0; i < n; i+=1) {
            if (orientation(points[p], points[i], points[q]) == 2) {
                q = i;
            }
        }
        // Now q is the most counterclockwise with respect to p 
        // Set p as q for next iteration, so that q is added to result 'hull'
        p = q;
    } while(p != 1); // While we don't come to first point

    // Print result
    return hull;
}

int main() {
    PointGenerator pointGenerator;
    cout << "Hello World" << endl;
    cout << "Monte Carlo: " << pointGenerator.normalRandom() << endl;
    return 0;
}
