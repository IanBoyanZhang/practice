// https://ask.julyedu.com/question/197
// http://www.jiuzhang.com/solutions/median-of-two-sorted-arrays/
class Solution {
  public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
      int sum = nums1.size() + nums2.size();
      double ret;

      if (sum & 1) {
        ret = findKth(nums1, nums2, 0, 0, sum / 2 + 1);
      } else {
        ret = ((findKth(nums1, nums2, 0, 0, sum / 2)) + 
                findKth(nums1, nums2, 0, 0, sum / 2 + 1)) / 2.0;
      }
      return ret;
    }

    double findKth(vector<int>& A, vector<int>& B, int A_st, int B_st, int k) {
      if (A_st >= A.size()) {
        return B[B_st + k - 1];
      }

      if (B_st >= B.size()) {
        return A[A_st + k - 1];
      }

      if (k == 1) return min(A[A_st], B[B_st]);
      int A_key = A_st + k / 2 - 1 >= A.size() ? INT_MAX : A[A_st + k / 2 - 1];
      int B_key = A_st + k / 2 - 1 >= A.size() ? INT_MAX : B[B_st + k / 2 - 1];
      if (A_key < B_key) {
        return findKth(A, B, A_st + k / 2, B_st, k - k / 2);
      } else {
        return findKth(A, B, A-st, B_st + k / 2, k - k / 2);
      }
    }
};
