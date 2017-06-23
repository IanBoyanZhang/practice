// Def singly-linked list
#include <iostream>
#include <vector>

using namespace std;
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

// Slow solution
// exp time complexity?
class Solution {
  public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
      size_t list_sz = lists.size();
      if (!list_sz) { return nullptr; }
      ListNode *p = lists[0];
      for (size_t i = 1; i < list_sz; i+=1) {
        p = mergeTwoLists(p, lists[i]);
      }
      return p;
    }

    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
      ListNode head(-1);
      ListNode* p = &head;
      for (; l1 != nullptr || l2 != nullptr; p = p->next) {
        int val1 = l1 == nullptr ? INT_MAX : l1->val;
        int val2 = l2 == nullptr ? INT_MAX : l2->val;

        if (val1 < val2) {
          p->next = l1;
          l1 = l1->next;
        } else {
          p->next = l2;
          l2 = l2->next;
        }
      }
      return head.next;
    }
};
