typedef struct ListNode {
  double val;
  struct ListNode* next;
} ListNode;

void swap(ListNode* l1, ListNode* l2) {
  ListNode* temp;
  temp = l1;
  l1 = l2;
  l2 = temp;
}
class Solution {
  ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    if (l1 == nullptr)  {return l1;}
    if (l2 == nullptr)  {return l2;}

    if (l1->val> l2->val) { swap(l1, l2); }
    l1->next = mergeTwoLists(l1->next, l2);
    return l1;
  }
};
