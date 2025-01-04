#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int size;
  int length;
  long long *element;
} LIST;

void Create(LIST *lst) {
  lst->size = 10;
  lst->length = 0;
  lst->element = (long long *)malloc(lst->size * sizeof(long long));
}

void Input(LIST *lst, int n) {
  if (n > lst->size) {
    printf("输入的元素个数超过链表大小，请重新输入。\n");
    return;
  }

  for (int i = 0; i < n; i++) {
    scanf("%lld", &lst->element[i]);
  }
}

void Output(LIST *lst, int m) {
  for (int i = 0; i < lst->length; i++) {
    printf("%lld ", lst->element[i]);
  }
  printf("\n");
}
void bubble_sort(LIST *dst, int n);
void Add(LIST *src1, LIST *src2, LIST *dst) {
  for (int i = 0; i < src1->length; i++) {
    dst->element[i] = src1->element[i];
  }
  // 再将src2中的元素复制到dst中
  for (int i = 0; i < src2->length; i++) {
    dst->element[src1->length + i] = src2->element[i];
  }
  // 更新目标顺序表的长度，为两个源顺序表长度之和
  dst->length = src1->length + src2->length;
  // 调用冒泡排序函数对合并后的目标顺序表进行排序（题目中有冒泡排序函数定义）
  bubble_sort(dst, dst->length);
}
void bubble_sort(LIST *dst, int n) { //冒泡排序
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
      if (dst->element[j] > dst->element[j + 1]) { //交换位置
        int temp = dst->element[j];
        dst->element[j] = dst->element[j + 1];
        dst->element[j + 1] = temp;
      }
    }
  }
}

void Destroy(LIST *lst) { free(lst->element); }

void Input(LIST *lst); // 修改函数定义

void Input(LIST *lst); // 修改函数定义

int main() {
  LIST a, b, c;
  Create(&a);
  Create(&b);
  Create(&c);
  Input(&a); // 只传递一个参数
  Input(&b); // 只传递一个参数
  Add(&a, &b, &c);
  Output(&c);
  putchar('\n');
  Destroy(&c);
  Destroy(&b);
  Destroy(&a);
  return 0;
}
