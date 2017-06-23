/**
 * Definition for singly-linked 
  */
#include <iostream>
struct ListNode {
     int val;
     ListNode *next;
     ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
  // Recursive
/*  ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    if (l1 == nullptr)  {return l1;}
    if (l2 == nullptr)  {return l2;}

    if (l1->val> l2->val) { swap(l1, l2); }
    l1->next = mergeTwoLists(l1->next, l2);
    return l1;
  }*/
  // iterative
  ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode head(-1);
    ListNode* p = &head;
    for (; l1!=nullptr || l2!=nullptr; p = p->next) {
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
