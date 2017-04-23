#include <stdlib.h>
#include <stdio.h>

typedef struct node {
  int data;
  struct node* next;
} node;

node* create(int data, node* next)
{
  node* new_node = (node*)malloc(sizeof(node));
  if (new_node == NULL)
  {
    fprintf(stderr, "Error creating a new node.\n");
    exit(0);
  }
  new_node->data = data;
  new_node->next = next;
  return new_node;
}

node* prepend(node* head, int data)
{
  node* new_node = create(data, head);
  head = new_node;
  return head;
}

node* append(node* head, int data)
{
  node* cursor = head;
  while(cursor->next != NULL)
    cursor = cursor->next;

  node* new_node = create(data, NULL);
  cursor->next =  new_node;

  return head;
}

typedef void (*callback)(node* data);

void traverse(node* head, callback f)
{
  node* cursor = head;
  while(cursor != NULL)
  {
    f(cursor);
    cursor = cursor->next;
  }
}

node* insert_after(node* head, int data, node* prev)
{
  node* cursor = head;
  while(cursor != prev)
  {
    cursor = cursor->next;
  }

  if(cursor!=NULL)
  {
    node* new_node = create(data, cursor->next);
    cursor->next = new_node;
    return head;
  }

  return NULL;
}

node* search(node* head, int data)
{
  node* cursor = head;
  while(cursor!= NULL)
  {
    if(cursor->data == data)
      return cursor;
    cursor = cursor->next;
  }
  return NULL;
}

node* insertion_sort(node* head)
{
  node *x, *y, *e;

  x = head;
  head = NULL;

  while(x != NULL) 
  {
    e = x;
    x = x->next;
    if (head != NULL)
    {
      if (e->data > head->data)
      {
        y = head;
        while((y->next != NULL) && (e->data>y->next->data))
        {
          y = y->next;
        }
        e->next = y->next;
        y->next = e;
      }
      else
      {
        e->next = head;
        head = e;
      }
    }
    else
    {
      e->next = NULL;
      head = e;
    }
  }
  return head;
}

node* reverse(node* head)
{
  node* prev = NULL;
  node* curr = head;
  node* next;
  while(curr != NULL)
  {
    next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
  }
  return head;
}

void delete_whole(node* head)
{
  node *cursor, *tmp;

  if (head!=NULL)
  {
    cursor = head->next;
    head->next = NULL;
    while(cursor!=NULL)
    {
      tmp = cursor->next;
      free(cursor);
      cursor = tmp;
    }
  }
}

int count(node* head)
{
  node* cursor = head;
  int c = 0;
  while(cursor != NULL)
  {
    c++;
    cursor = cursor->next;
  }
  return c;
}

void print_list(node* node)
{
  if (node!= NULL)
    printf("%d\n", node->data);
}


int main() {
  node* head = NULL;

  int arr[10] = {3, 8, 2, 9, 1, 4, 5, 7, 11 ,13};
  for (int i = 0; i < 10; i+=1)
  {
    head = prepend(head, arr[i]);
  }
  callback display = print_list;
  traverse(head, display);
  return 0;
};
