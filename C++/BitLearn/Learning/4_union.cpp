#include <iostream>
#include <queue>
#include <string>

#define Maxsize 100

using namespace std;

typedef char ElemType;

typedef struct node {
  ElemType data;
  struct node *lchild;
  struct node *rchild;
} BTNode;

void CreateBTree(BTNode *&b, char *str) {
  BTNode *St[Maxsize], *p;
  int top = -1, k, j = 0;
  char ch;
  b = NULL;
  ch = str[j];
  while (ch != '\0') {
    switch (ch) {
    case '(':
      top++;
      St[top] = p;
      k = 1;
      break;
    case ')':
      top--;
      break;
    case ',':
      k = 2;
      break;
    default:
      p = new BTNode;
      p->data = ch;
      p->lchild = p->rchild = NULL;
      if (b == NULL)
        b = p;
      else {
        switch (k) {
        case 1:
          St[top]->lchild = p;
          break;
        case 2:
          St[top]->rchild = p;
          break;
        }
      }
    }
    j++;
    ch = str[j];
  }
}

void DestroyBtree(BTNode *&b) {
  if (b != NULL) {
    DestroyBtree(b->lchild);
    DestroyBtree(b->rchild);
    delete b;
  }
}

BTNode *FindNode(BTNode *b, ElemType x) {
  BTNode *p;
  if (b == NULL)
    return NULL;
  else if (b->data == x)
    return b;
  else {
    p = FindNode(b->lchild, x);
    if (p != NULL)
      return p;
    else
      return FindNode(b->rchild, x);
  }
}

BTNode *LchildNode(BTNode *p) { return p ? p->lchild : NULL; }

BTNode *RchildNode(BTNode *p) { return p ? p->rchild : NULL; }

int BTHeight(BTNode *b) {
  if (b == NULL)
    return 0;
  int lchildh = BTHeight(b->lchild);
  int rchildh = BTHeight(b->rchild);
  return (lchildh > rchildh) ? (lchildh + 1) : (rchildh + 1);
}

int CountNodes(BTNode *b) {
  if (b == NULL)
    return 0;
  return 1 + CountNodes(b->lchild) + CountNodes(b->rchild);
}

int CountLeafNodes(BTNode *b) {
  if (b == NULL)
    return 0;
  if (b->lchild == NULL && b->rchild == NULL)
    return 1;
  return CountLeafNodes(b->lchild) + CountLeafNodes(b->rchild);
}

int FindLevel(BTNode *b, ElemType x, int level) {
  if (b == NULL)
    return 0;
  if (b->data == x)
    return level;
  int leftLevel = FindLevel(b->lchild, x, level + 1);
  if (leftLevel)
    return leftLevel;
  return FindLevel(b->rchild, x, level + 1);
}

int TreeWidth(BTNode *root) {
  if (!root)
    return 0;

  int maxWidth = 0;
  queue<BTNode *> q;
  q.push(root);

  while (!q.empty()) {
    int count = q.size();
    maxWidth = max(maxWidth, count);

    for (int i = 0; i < count; i++) {
      BTNode *node = q.front();
      q.pop();
      if (node->lchild)
        q.push(node->lchild);
      if (node->rchild)
        q.push(node->rchild);
    }
  }
  return maxWidth;
}

void DispBTree(BTNode *b) {
  if (b != NULL) {
    cout << b->data;
    if (b->lchild != NULL || b->rchild != NULL) {
      cout << "(";
      DispBTree(b->lchild);
      if (b->rchild != NULL)
        cout << ",";
      DispBTree(b->rchild);
      cout << ")";
    }
  }
}

int main() {
  BTNode *b;
  char str[Maxsize];
  char c;

  cin.getline(str, Maxsize);
  cin >> c;

  CreateBTree(b, str);
