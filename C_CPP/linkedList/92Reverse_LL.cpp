#include <iostream>
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
  public:
    ListNode* reverseBetween(ListNode* head, int m, int n) {
      ListNode dummy(-1);
      dummy.next = head;
      ListNode* prev = &dummy;
      // Traverse to m - 2
      for (size_t i = 0; i < m - 1; i+=1) {
        prev = prev->next;
      }

      ListNode* const head2 = prev;
      // Progress to m - 1;
      prev = prev->next;
      ListNode* cur = prev->next;

      // Reverse m to n using three pointers
      for (size_t i = m; i < n; i+=1) {
        prev->next = cur->next;
        cur->next = head2->next;
        // insert from head
        head2->next = cur;
        cur = prev->next;
      }
      return dummy.next;
    }
};
