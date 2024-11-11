class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        // max-heap using a priority queue to store pairs of distance and point index 
        priority_queue<pair<int, int>> maxHeap;

        // iterate over each point
        for (int i = 0; i < points.size(); i++) {
            int dists = points[i][0] * points[i][0] + points[i][1] * points[i][1];

            maxHeap.push({dists, i});

            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        // Extract the k closest points from the max-heap
        vector<vector<int>> result;
        // result.reserve(k);
        while (!maxHeap.empty()) {
            result.push_back(points[maxHeap.top().second]);
            maxHeap.pop();
        }

        return result;
    }
};
