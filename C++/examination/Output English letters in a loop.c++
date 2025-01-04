#include <bits/stdc++.h>
using namespace std;
//图的存储结构
#define INF 32767 //定义∞
#define MAXV 100 //最大顶点个数
typedef char InfoType;

// 邻接矩阵表示的图
typedef struct {
  int edges[MAXV][MAXV]; // 邻接矩阵
  int n, e;              // 顶点数和边数
} MGraph;

// 边的结构体
typedef struct {
  int u; // 顶点u
  int v; // 顶点v
  int w; // 边(u, v)的权值
} Edge;

// 初始化图
void InitGraph(MGraph &g) {
  for (int i = 0; i < MAXV; i++) {
    for (int j = 0; j < MAXV; j++) {
      g.edges[i][j] = INF;
    }
  }
}

// Prim算法
void Prim(MGraph g, int start) {
  int lowcost[MAXV]; // 存储从U到V-U的边中最小权值
  int closest[MAXV]; // 存储V-U中与U最接近的顶点
  bool u[MAXV];      // 标记顶点是否已在U中

  // 初始化
  for (int i = 0; i < g.n; i++) {
    lowcost[i] = g.edges[start][i];
    closest[i] = start;
    u[i] = false;
  }

  u[start] = true;                // 将起始顶点加入U
  for (int i = 1; i < g.n; i++) { // 需要加入n-1个顶点
    int min = INF;
    int k = -1;
    // 找到最小的边
    for (int j = 0; j < g.n; j++) {
      if (!u[j] && lowcost[j] < min) {
        min = lowcost[j];
        k = j;
      }
    }
    // 输出最小生成树的边
    cout << "边(" << closest[k] << "," << k << ")权为:" << min << endl;
    u[k] = true; // 将顶点k加入U
                 // 更新lowcost和closest
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
  cin >> n >> e; // 输入顶点数和边数
  g.n = n;
  g.e = e;
  InitGraph(g);
  // 输入邻接矩阵
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      cin >> g.edges[i][j];
    }
  }
  // 调用Prim算法
  cout << "Prim算法求解结果:" << endl;
  Prim(g, 0); // 从顶点0开始
  return 0;
}