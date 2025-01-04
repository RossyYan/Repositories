#include <bits/stdc++.h>
using namespace std;
//ͼ�Ĵ洢�ṹ
#define INF 32767 //�����
#define MAXV 100 //��󶥵����
typedef char InfoType;

// �ڽӾ����ʾ��ͼ
typedef struct {
  int edges[MAXV][MAXV]; // �ڽӾ���
  int n, e;              // �������ͱ���
} MGraph;

// �ߵĽṹ��
typedef struct {
  int u; // ����u
  int v; // ����v
  int w; // ��(u, v)��Ȩֵ
} Edge;

// ��ʼ��ͼ
void InitGraph(MGraph &g) {
  for (int i = 0; i < MAXV; i++) {
    for (int j = 0; j < MAXV; j++) {
      g.edges[i][j] = INF;
    }
  }
}

// Prim�㷨
void Prim(MGraph g, int start) {
  int lowcost[MAXV]; // �洢��U��V-U�ı�����СȨֵ
  int closest[MAXV]; // �洢V-U����U��ӽ��Ķ���
  bool u[MAXV];      // ��Ƕ����Ƿ�����U��

  // ��ʼ��
  for (int i = 0; i < g.n; i++) {
    lowcost[i] = g.edges[start][i];
    closest[i] = start;
    u[i] = false;
  }

  u[start] = true;                // ����ʼ�������U
  for (int i = 1; i < g.n; i++) { // ��Ҫ����n-1������
    int min = INF;
    int k = -1;
    // �ҵ���С�ı�
    for (int j = 0; j < g.n; j++) {
      if (!u[j] && lowcost[j] < min) {
        min = lowcost[j];
        k = j;
      }
    }
    // �����С�������ı�
    cout << "��(" << closest[k] << "," << k << ")ȨΪ:" << min << endl;
    u[k] = true; // ������k����U
                 // ����lowcost��closest
    for (int j = 0; j < g.n; j++) {
      if (!u[j] && g.edges[k][j] < lowcost[j]) {
        lowcost[j] = g.edges[k][j];
        closest[j] = k;
      }
    }
  }
}

int main() {
  MGraph g;
  int n, e;
  cin >> n >> e; // ���붥�����ͱ���
  g.n = n;
  g.e = e;
  InitGraph(g);
  // �����ڽӾ���
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      cin >> g.edges[i][j];
    }
  }
  // ����Prim�㷨
  cout << "Prim�㷨�����:" << endl;
  Prim(g, 0); // �Ӷ���0��ʼ
  return 0;
}