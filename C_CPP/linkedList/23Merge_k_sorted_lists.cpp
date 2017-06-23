// Def singly-linked list
#include <iostream>
#include <vector>

// http://bangbingsyb.blogspot.com/2014/11/leetcode-merge-k-sorted-lists.html

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
/*    ListNode* mergeKLists(vector<ListNode*>& lists) {
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
    }*/

    // Now update to a binary solution
    ListNode *mergeKLists(vector<ListNode *> &lists) {
      if(lists.empty()) return NULL;
      int end = lists.size() - 1;
      while (end > 0) {
        int begin = 0;
        while (begin < end) {
          lists[begin] = mergeTwoLists(lists[begin], lists[end]);
          begin += 1;
          end -= 1;
        }
      }
      return lists[0];
    }
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
      ListNode *head = new ListNode(0);
      ListNode *tail = head;

      while(l1 && l2) {
        if (l1->val <= l2->val) {
          tail->next = l1;
          l1->next = l1;
        } else {
          tail->next = l2;
          l2->next = l2;
        }
        tail = tail->next;
      }
      tail->next = l1 ? l1 : l2;
      return head->next;
    }
};
