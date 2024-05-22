class Solution {
public:
    int target;
    string num;
    vector<string> res;
    void dfs(int pos, long last, long sum, string path)
    {
        if (pos == num.size())
        {
            if (sum == target)
            {
                res.push_back(path);
            }

            return;
        }

        long operand = 0;
        string cur = "";
        for (auto i = pos; i < num.size(); ++i)
        {
            operand = operand * 10 + num[i] - '0';
            cur += num[i];

            if (pos == 0)
            {
                dfs(i + 1, operand, operand, path + cur);
            }
            else
            {
                dfs(i + 1,  operand, sum + operand, path + "+" + cur);
                dfs(i + 1, -operand, sum - operand, path + "-" + cur);
                dfs(i + 1, operand * last, sum - last + operand * last, path + "*" + cur);
            }

            // Pruning the solutions with staring 0s after operators
            if (num[pos] == '0') {
                break;
            }
        }
    }

public:
    vector<string> addOperators(string num, int target) {
       if (num.size() == 0)
       {
         return vector<string>(); 
       } 

       this->target = target;
       this->num = num;

       dfs(0, 0, 0, "");
       return res;
    }
};
