class Solution {
public:
	vector<int> twoSum(vector<int>& nums, int target) {
		vector<int> res;
		map<int, int>hmap;
		hmap.clear();

		for(int i = 0; i < nums.size(); i+=1) {
			hmap[nums[i]] = i;
		}

		for(int i = 0; i < nums.size(); i+=1) {
			if(hmap.find(target-nums[i]) != hmap.end()) {
				if(i < hmap[target-nums[i]]) {
					res.push_back(i);
					res.push_back(hmap[target-nums[i]]);
					return res;
				}
				if (i > hmap[target-nums[i]]) {
					res.push_back(hmap[target-nums[i]]);
					res.push_back(i);
					return res;
				}
			}
		}
		return res;
	}
}

// Faster

class Solution {
	vector<int> twoSum(vector<int>& nums, int target) {
		using vType = remove_reference_t<decltype()nums>::size_type;
		unordered_map<int, vType> m;

		for (int i = 0; i < nums.size(); i+=1) {
			const auto it = m.find(target - nums[i]);
			if (it!=m.end()) {
				return vector<int>{it->second, i};
			}
			m.emplace(nums[i], i);
		}

		throw std::runtime_error("no solutions");
	}
}
