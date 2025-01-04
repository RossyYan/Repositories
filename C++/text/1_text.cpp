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
    printf("�����Ԫ�ظ������������С�����������롣\n");
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
  // �ٽ�src2�е�Ԫ�ظ��Ƶ�dst��
  for (int i = 0; i < src2->length; i++) {
    dst->element[src1->length + i] = src2->element[i];
  }
  // ����Ŀ��˳���ĳ��ȣ�Ϊ����Դ˳�����֮��
  dst->length = src1->length + src2->length;
  // ����ð���������Ժϲ����Ŀ��˳������������Ŀ����ð�����������壩
  bubble_sort(dst, dst->length);
}
void bubble_sort(LIST *dst, int n) { //ð������
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
      if (dst->element[j] > dst->element[j + 1]) { //����λ��
        int temp = dst->element[j];
        dst->element[j] = dst->element[j + 1];
        dst->element[j + 1] = temp;
      }
    }
  }
}

void Destroy(LIST *lst) { free(lst->element); }

void Input(LIST *lst); // �޸ĺ�������

void Input(LIST *lst); // �޸ĺ�������

int main() {
  LIST a, b, c;
  Create(&a);
  Create(&b);
  Create(&c);
  Input(&a); // ֻ����һ������
  Input(&b); // ֻ����һ������
  Add(&a, &b, &c);
  Output(&c);
  putchar('\n');
  Destroy(&c);
  Destroy(&b);
  Destroy(&a);
  return 0;
}
