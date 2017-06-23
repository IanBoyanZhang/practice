class Solution {
public:
    int maxPoints(vector<Point>& points) {
        if (points.size() < 3) { return points.size();}
        int result;

        int pts_size = points.size();
        unordered_map<double, int> slope_count;
        for (auto i = 0; i < pts_size - 1; i+=1) {
            slope_count.clear();
            int point_max = 1;
            for (auto j = 0; j < pts_size; j+=1) {
                double slope = atan2(points[j].y - points[i].y, points[j].x - points[i].x);
                int count = 0;
                if (slope_count.find(slope) != slope_count.end()) {
                    count = 2;
                    slope_count[slope] = 2;
                } else {
                    count == ++slope_count[slope];
                }
                point_max = max(point_max, count);
            }
            result = max(result, point_max);
        }
        return result;
    }
};
