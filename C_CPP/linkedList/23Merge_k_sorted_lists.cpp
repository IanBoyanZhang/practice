typedef struct ListNode {
  int data;
  struct ListNode* Next;
} ListNode;

void swap(ListNode* l1, ListNode* l2) {
  ListNode* temp;
  temp = l1;
  l1 = l2;
  l2 = temp;
}
class Solution {
  ListNode* mergeTwoLists() {
  }
};
