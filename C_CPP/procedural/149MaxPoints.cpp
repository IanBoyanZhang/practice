/**
 * Definition for a point.
 * struct Point {
 *     int x;
 *     int y;
 *     Point() : x(0), y(0) {}
 *     Point(int a, int b) : x(a), y(b) {}
 * };
 */
class Solution {
    // Issue of using double as key. Accuracy issue.
    // https://discuss.leetcode.com/topic/12877/20-line-c-o-n-2-hashing-solution/17
    // TODO add a new hasher to retain, delta_x and delta_y
    // So that it can compare the two values.
public:
    int maxPoints(vector<Point>& points) {
        size_t pts_size = points.size();
        if (pts_size < 3) { return pts_size;}
        int result = 0;
        unordered_map<long double, int> slope_count;
        for (auto i = 0; i < pts_size - 1; i+=1) {
            slope_count.clear();
            int samePointNum = 0;
            int point_max = 1;
            for (auto j = i+1; j < pts_size; j+=1) {
                double slope;
                if (points[i].x == points[j].x) {
                    slope = std::numeric_limits<double>::infinity();
                    if (points[i].y == points[j].y) {
                        ++ samePointNum;
                        continue;
                    }
                } else {
                    if (points[i].y == points[j].y) {
                        // 0.0 and -0.0 is the same
                        slope = 0.0;
                    } else {
                        slope = 1.0 * (points[i].y - points[j].y) /
                                (points[i].x - points[j].x);
                    }
                }
                int count = 0;
                if (slope_count.find(slope) != slope_count.end()) {
                    count = ++slope_count[slope];
                } else {
                    count = 2;
                    slope_count[slope] = 2;
                }
                point_max = max(point_max, count);
            }
            result = max(result, point_max + samePointNum);
        }
        return result;
    }
};
