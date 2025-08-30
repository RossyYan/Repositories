<template>
  <!-- 添加唯一根容器 -->
  <div class="process-analyzer-container">
    <div class="process-analyzer">
      <h2>生产设备规划工具</h2>
      <div class="options-section">
        <div class="option-group">
          <label>罐子大小:</label>
          <input type="radio" id="large" value="大" v-model="canSize" />
          <label for="large">大</label>
          <input type="radio" id="small" value="小" v-model="canSize" />
          <label for="small">小</label>
        </div>
        <div class="option-group">
          <label>罐子形状:</label>
          <input type="radio" id="round" value="圆" v-model="canShape" />
          <label for="round">圆</label>
          <input type="radio" id="square" value="方" v-model="canShape" />
          <label for="square">方</label>
        </div>

        <!-- 封口类型选项，仅大/圆时显示 -->
        <div class="option-group" v-if="canSize === '大' && canShape === '圆'">
          <label>封口类型:</label>
          <input
            type="radio"
            id="flowerBasket"
            value="花篮桶"
            v-model="sealingType"
          />
          <label for="flowerBasket">花篮桶</label>
          <input
            type="radio"
            id="closedBucket"
            value="闭合桶"
            v-model="sealingType"
          />
          <label for="closedBucket">闭合桶</label>
        </div>

        <div class="option-group">
          <label>工艺类型:</label>
          <input
            type="radio"
            id="automatic"
            value="自动"
            v-model="processType"
          />
          <label for="automatic">自动</label>
          <input
            type="radio"
            id="semiautomatic"
            value="半自动"
            v-model="processType"
          />
          <label for="semiautomatic">半自动</label>
        </div>
        <button @click="generateEquipment" class="generate-btn">
          生成设备列表
        </button>
      </div>
    </div>

    <!-- 生成设备按钮 -->
    <div class="generate-btn-container">
      <div class="add-equipment-form">
        <h3>添加新设备</h3>
        <div class="form-row">
          <input
            type="text"
            v-model="newEquipment.name"
            @input="handleEquipmentSearch"
            @focus="handleEquipmentSearch"
            @blur="delayedHideSuggestions"
            placeholder="设备名称"
            class="form-input"
          />
          <div
            class="equipment-suggestions"
            v-if="showSuggestions && filteredEquipments.length"
          >
            <div
              v-for="equip in filteredEquipments"
              :key="equip.name"
              @click="selectEquipment(equip)"
              class="suggestion-item"
            >
              {{ equip.name }}
            </div>
          </div>
          <input
            type="number"
            v-model="newEquipment.quantity"
            min="1"
            placeholder="数量"
            class="form-input"
          />
          <input
            type="number"
            v-model="newEquipment.price"
            min="0"
            step="0.01"
            placeholder="单价（万元）"
            class="form-input"
          />
          <input
            type="text"
            v-model="newEquipment.specs"
            placeholder="技术参数"
            class="form-input"
          />
          <input
            type="text"
            v-model="newEquipment.imageUrl"
            placeholder="图片文件名(如: 新设备.jpg)"
            class="form-input"
          />
          <div class="form-group-button">
            <button @click="addEquipment" class="add-btn">添加</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 设备列表显示区域 -->
    <div v-if="showEquipmentList" class="equipment-list-container">
      <h3>所需设备列表</h3>
      <div class="table-responsive">
        <table class="equipment-table">
          <thead>
            <tr>
              <th>移动</th>
              <th>设备图片</th>
              <th>设备名称</th>
              <th>数量（台、套）</th>
              <th>单价（万元）</th>
              <th>总价（万元）</th>
              <th>技术参数</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(equipment, index) in equipmentList" :key="index">
              <td
                class="drag-handle"
                draggable="true"
                @dragstart="onDragStart($event, index)"
                @dragover="onDragOver($event)"
                @drop="onDrop($event, index)"
              >
                <span class="drag-icon">☰</span>
              </td>
              <td>
                <img
                  :src="equipment.imageUrl"
                  class="equipment-img"
                  v-if="equipment.imageUrl"
                />
              </td>
              <td>{{ equipment.name }}</td>
              <td>
                <input
                  type="number"
                  v-model="equipment.quantity"
                  min="0"
                  class="quantity-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  v-model="equipment.price"
                  min="0"
                  step="0.01"
                  class="price-input"
                />
              </td>
              <td>{{ (equipment.quantity * equipment.price).toFixed(2) }}</td>
              <td class="specs-column">{{ equipment.specs }}</td>
              <td>
                <button @click="deleteEquipment(index)" class="delete-btn">
                  删除
                </button>
              </td>
            </tr>
            <tr class="total-row">
              <td colspan="4"><strong>总计</strong></td>
              <td>
                <strong>{{
                  equipmentList
                    .reduce((sum, item) => sum + item.quantity * item.price, 0)
                    .toFixed(2)
                }}</strong>
              </td>

              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="form-group-button">
          <button @click="exportToWord" class="export-btn">
            导出为Word文档
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Document,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ImageRun,
  Packer,
} from "docx";
import { saveAs } from "file-saver";

import { ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import equipmentData from "../equipmentData";

// 初始化ECharts渲染器
use([CanvasRenderer]);

export default {
  data() {
    return {
      newEquipment: {
        name: "",
        quantity: 1,
        price: 0,
        specs: "",
      },
      allEquipment: [],
      filteredEquipments: [],
      showSuggestions: false,
    };
  },
  created() {
    // 预加载所有图片资源

    // 初始化设备数据
    const equipmentSet = new Set();
    equipmentData.forEach((equipment) => {
      if (!equipmentSet.has(equipment.name)) {
        equipmentSet.add(equipment.name);
        this.allEquipment.push({
          name: equipment.name,
          price: equipment.price,
          specs: equipment.specs,
          imageUrl: equipment.imageUrl,
        });
      }
    });
    console.log("Loaded equipment count:", this.allEquipment.length);
  },
  methods: {
    
    getImageBase64(url) {
      return new Promise((resolve, reject) => {
        console.log("Attempting to load image from URL:", url);
        if (!url) {
          console.error("Invalid image URL: empty");
          reject(new Error("Invalid image URL"));
          return;
        }

        // 处理不同类型的URL
        let imageUrl;
        if (typeof url === "string") {
          // 字符串路径
          imageUrl = url;
        } else if (url.default) {
          // 通过require引入的模块
          imageUrl = url.default;
        } else {
          imageUrl = String(url);
        }

        // 检查是否为base64格式
        if (imageUrl.startsWith("data:image/")) {
          console.log("Image is already in base64 format");
          resolve(imageUrl);
          return;
        }

        // 处理相对路径
        if (imageUrl.startsWith("@/")) {
          // 替换@为src目录
          imageUrl = imageUrl.replace("@/", "/src/");
        } else if (imageUrl.startsWith("./")) {
          // 相对路径转换
          imageUrl = imageUrl.replace("./", "/");
        }

        const img = new Image();
        img.crossOrigin = "anonymous"; // 处理跨域问题
        img.onload = function () {
          console.log(
            "Image loaded successfully. Width:",
            img.width,
            "Height:",
            img.height
          );
          // 检查图片尺寸
          if (img.width === 0 || img.height === 0) {
            console.error("Image has invalid dimensions (0 width or height)");
            reject(new Error("Image has invalid dimensions"));
            return;
          }
          try {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              console.error("Canvas context not available");
              reject(new Error("Canvas context not available"));
              return;
            }
            ctx.drawImage(img, 0, 0);
            try {
              const dataURL = canvas.toDataURL("image/png");
              console.log(
                "Image converted to data URL, length:",
                dataURL.length
              );
              resolve(dataURL);
            } catch (e) {
              console.error("Canvas to data URL error:", e);
              reject(e);
            }
          } catch (e) {
            console.error("Canvas creation or drawing failed:", e);
            reject(e);
          }
        };
        img.onerror = function (error) {
          console.error("Image load error:", error);
          console.error("Failed to load image from URL:", url);
          reject(new Error(`Failed to load image from URL: ${url}`));
        };

        // 解析为绝对URL
        try {
          const absoluteUrl = new URL(url, window.location.href).href;
          console.log("Resolved absolute image URL:", absoluteUrl);
          img.src = absoluteUrl;
        } catch (e) {
          console.error("URL parsing error:", e);
          // 尝试直接使用相对路径
          console.log("Trying to use relative path directly:", url);
          img.src = url;
        }
      });
    },

    async exportToWord() {
      console.log("Starting export to Word process...");
      // 处理图片转base64
      const processedEquipment = await Promise.all(
        this.equipmentList.map(async (equip, index) => {
          console.log(
            `Processing equipment ${index + 1}/${this.equipmentList.length}:`,
            equip.name
          );
          let imageData = null;
          try {
            if (equip.imageUrl) {
              console.log("Image URL exists for:", equip.name);
              // 处理不同格式的图片URL
              let imageUrl;
              if (typeof equip.imageUrl === "string") {
                // 如果是字符串路径
                imageUrl = equip.imageUrl;
                console.log("String image URL:", imageUrl);
              } else if (equip.imageUrl && typeof equip.imageUrl === "object") {
                // 处理通过require引入的模块或其他对象格式
                imageUrl = equip.imageUrl.default || String(equip.imageUrl);
                console.log("Processed object image URL:", imageUrl);
              } else {
                imageUrl = String(equip.imageUrl);
                console.log("Converted image URL:", imageUrl);
              }

              // 处理@符号开头的路径
              if (imageUrl.startsWith("@/")) {
                imageUrl = imageUrl.replace("@/", "/src/");
                console.log("Resolved @ path:", imageUrl);
              }
              console.log(
                "Processing image for:",
                equip.name,
                "URL:",
                imageUrl
              );
              imageData = await this.getImageBase64(imageUrl);
              console.log(
                "Image processed for:",
                equip.name,
                "Data length:",
                imageData?.length
              );
              // 验证base64格式
              if (!imageData || !imageData.startsWith("data:image/")) {
                console.error(
                  "Invalid image data format - not a base64 data URL"
                );
                imageData = null;
              } else {
                console.log(
                  "Valid base64 image data obtained for:",
                  equip.name
                );
              }
            } else {
              console.error("No image URL for:", equip.name);
              imageData = null;
            }
          } catch (error) {
            console.error(`Error loading image for ${equip.name}:`, error);
            console.error("Image URL causing error:", equip.imageUrl);
            imageData = null;
          }
          return { ...equip, imageData };
        })
      );

      console.log(
        "Image processing complete. Processed equipment count:",
        processedEquipment.length
      );
      const equipmentWithImages = processedEquipment.filter(
        (equip) => equip.imageData
      );
      console.log("Equipment with valid images:", equipmentWithImages.length);
      const equipmentWithoutImages = processedEquipment.filter(
        (equip) => !equip.imageData
      );
      console.log("Equipment without images:", equipmentWithoutImages.length);
      if (equipmentWithoutImages.length > 0) {
        console.log(
          "Equipment without images list:",
          equipmentWithoutImages.map((equip) => equip.name)
        );
      }

      console.log("Creating Word document...");
      console.log(
        "Adding table to document with",
        processedEquipment.length,
        "rows"
      );
      const doc = new Document({
        creator: "Equipment System",
        title: "设备清单",
        description: "Generated equipment list",
        sections: [
          {
            properties: {
              pageSize: { width: 11906, height: 16838 },
              pageMargins: {
                top: 1440,
                right: 1440,
                bottom: 1440,
                left: 1440,
                header: 720,
                footer: 720,
                gutter: 0,
              },
            },
            children: [
              new Paragraph({ text: '设备清单', heading: 'Heading1' }),
              new Table({
                width: { size: 9500, type: WidthType.DXA },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        width: { size: 13.33, type: WidthType.PERCENTAGE },
                        verticalAlign: 'center',
                        children: [new Paragraph({ text: '设备名称', alignment: 'center' })],
                      }),
                      new TableCell({
                        width: { size: 13.33, type: WidthType.PERCENTAGE },
                        verticalAlign: 'center',
                        children: [new Paragraph({ text: '图片', alignment: 'center' })],
                      }),
                      new TableCell({
                        width: { size: 33.33, type: WidthType.PERCENTAGE },
                        verticalAlign: 'center',
                        children: [new Paragraph({ text: '技术参数', alignment: 'center' })],
                      }),
                      new TableCell({
                        width: { size: 13.33, type: WidthType.PERCENTAGE },
                        verticalAlign: 'center',
                        children: [new Paragraph({ text: '数量（台）', alignment: 'center' })],
                      }),
                      new TableCell({
                        width: { size: 13.33, type: WidthType.PERCENTAGE },
                        verticalAlign: 'center',
                        children: [new Paragraph({ text: '单价（万元）', alignment: 'center' })],
                      }),
                      new TableCell({
                        width: { size: 13.33, type: WidthType.PERCENTAGE },
                        verticalAlign: 'center',
                        children: [new Paragraph({ text: '总价（万元）', alignment: 'center' })],
                      }),
                    ],
                  }),
                  ...processedEquipment.map(
                    (equip) =>
                      new TableRow({
                        children: [
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph({ text: equip.name, alignment: 'center' })],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [
                              (() => {
                                if (equip.imageData && equip.imageData.startsWith('data:image/')) {
                                  // 去掉base64前缀
                                  const base64Data = equip.imageData.split(',')[1];
                                  
                                  // 直接使用已导入的ImageRun组件，并设置图片填充单元格
                                  return new Paragraph({
                                    alignment: 'center',
                                    children: [
                                      new ImageRun({
                                        data: base64Data,
                                        transformation: {
                                          width: 100,
                                          height: 100,
                                          scaling: 100,
                                        },
                                      }),
                                    ],
                                  });
                                } else {
                                  return new Paragraph({ text: 'No image available', alignment: 'center' });
                                }
                              })(),
                            ],
                          }),
                          new TableCell({
                            width: { size: 33.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph({ text: equip.specs || '', alignment: 'center' })],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph({ text: equip.quantity.toString(), alignment: 'center' })],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph({ text: equip.price.toFixed(2), alignment: 'center' })],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [
                              new Paragraph({
                                text: (equip.quantity * equip.price).toFixed(2),
                                alignment: 'center'
                              }),
                            ],
                          }),
                        ],
                      })
                  ),
                  // 添加总计行
                  new TableRow({
                        children: [
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph({ text: '总价', alignment: 'center' })],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph('')],
                          }),
                          new TableCell({
                            width: { size: 33.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph('')],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph('')],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [new Paragraph('')],
                          }),
                          new TableCell({
                            width: { size: 13.33, type: WidthType.PERCENTAGE },
                            verticalAlign: 'center',
                            children: [
                              new Paragraph({
                                text: processedEquipment
                                  .reduce((sum, equip) => {
                                    return sum + equip.quantity * equip.price;
                                  }, 0)
                                  .toFixed(2),
                                alignment: 'center'
                              }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
            ],
          },
        ],
      });

      // 使用Packer.toBlob方法打包文档
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, '设备清单.docx');
      });
    },

    handleEquipmentSearch(e) {
      const keyword = e.target.value.trim().toLowerCase();
      if (keyword) {
        this.filteredEquipments = this.allEquipment.filter((equip) =>
          equip.name.toLowerCase().includes(keyword)
        );
        this.showSuggestions = this.filteredEquipments.length > 0;
      } else {
        this.showSuggestions = false;
      }
    },
    delayedHideSuggestions() {
      console.log("delayedHideSuggestions called");
      window.setTimeout(() => {
        this.showSuggestions = false;
      }, 200);
    },
    selectEquipment(equip) {
      this.newEquipment.name = equip.name;
      this.newEquipment.price = equip.price;
      this.newEquipment.specs = equip.specs || "";
      this.newEquipment.quantity = 1;
      this.newEquipment.imageUrl = equip.imageUrl;
      this.showSuggestions = false;
    },
    addEquipment() {
      if (!this.newEquipment.name) return alert("请输入设备名称");
      if (!this.newEquipment.imageUrl) return alert("请输入图片文件名");
      if (!/\.(jpg|jpeg|png)$/i.test(this.newEquipment.imageUrl))
        return alert("请输入有效的图片文件名(支持.jpg,.jpeg,.png)");
      this.equipmentList.push({
        ...this.newEquipment,
        imageUrl: this.newEquipment.imageUrl,
      });
      // 重置表单
      this.newEquipment = {
        name: "",
        quantity: 1,
        price: 0,
        specs: "",
        imageUrl: "",
      };
    },
    deleteEquipment(index) {
      this.equipmentList.splice(index, 1);
    },
  },

  name: "ProcessAnalyzer",
  components: {},
  setup() {
    // 响应式状态定义
    const processText = ref("");
    const canSize = ref("大"); // 默认大
    const canShape = ref("圆"); // 默认圆
    const processType = ref("自动"); // 默认自动
    const sealingType = ref("花篮桶"); // 默认花篮桶
    const equipmentList = ref([]);
    const showEquipmentList = ref(false);
    const processSteps = ref([]);
    const matchedEquipment = ref([]);
    const showChart = ref(false);
    const totalPrice = ref(0);
    const draggedIndex = ref(-1);

    // 拖放相关函数
    const onDragStart = (event, index) => {
      draggedIndex.value = index;
      event.dataTransfer.effectAllowed = "move";
    };

    const onDragOver = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    };

    const onDrop = (event, targetIndex) => {
      event.preventDefault();
      if (draggedIndex.value !== -1 && draggedIndex.value !== targetIndex) {
        // 复制数组
        const newList = [...equipmentList.value];
        // 移除被拖动的元素
        const [movedItem] = newList.splice(draggedIndex.value, 1);
        // 插入到目标位置
        newList.splice(targetIndex, 0, movedItem);
        // 更新数组
        equipmentList.value = newList;
        // 重置拖动索引
        draggedIndex.value = -1;
      }
    };

    // ECharts图表配置
    const chartOptions = ref({
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: { data: ["单价(万元)", "总价(万元)"] },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: { type: "category", data: [] },
      yAxis: { type: "value" },
      series: [
        { name: "单价(万元)", type: "bar", data: [] },
        { name: "总价(万元)", type: "bar", data: [] },
      ],
    });

    // 创建设备名称到设备数据的映射，方便快速查找
    const equipmentByName = new Map();
    equipmentData.forEach((equip) => {
      equipmentByName.set(equip.name, equip);
    });

    // 设备映射关系 - 核心业务逻辑
    const equipmentMapping = {
      "小-方-自动": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("自动上料剪板机"), quantity: 1 },
        { ...equipmentByName.get("自动焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("小方成型组合机"), quantity: 1 },
        { ...equipmentByName.get("小方自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("测漏机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "小-方-半自动": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("圆刀剪板机"), quantity: 1 },
        { ...equipmentByName.get("自动成圆机"), quantity: 1 },
        { ...equipmentByName.get("后进料焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("小方半自动成方机"), quantity: 1 },
        { ...equipmentByName.get("小方半自动翻边机"), quantity: 2 },
        { ...equipmentByName.get("小方半自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "大-方-自动": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("自动上料剪板机"), quantity: 1 },
        { ...equipmentByName.get("自动焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("立罐成方压筋翻边组合机"), quantity: 1 },
        { ...equipmentByName.get("测漏机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "大-方-半自动": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("圆刀剪板机"), quantity: 1 },
        { ...equipmentByName.get("自动成圆机"), quantity: 1 },
        { ...equipmentByName.get("后进料焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("大方半自动成方压筋一体机"), quantity: 1 },
        { ...equipmentByName.get("大方半自动翻边机"), quantity: 1 },
        { ...equipmentByName.get("大方半自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "小-圆-半自动": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("小圆自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("自动成圆机"), quantity: 1 },
        { ...equipmentByName.get("后进料焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("小圆半自动翻边机"), quantity: 1 },
        { ...equipmentByName.get("小圆半自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "小-圆-自动": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("纵横剪"), quantity: 1 },
        { ...equipmentByName.get("自动焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("小圆自动翻边封罐组合机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "大-圆-半自动-花篮桶": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("小圆自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("后进料焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("大圆半自动胀锥机"), quantity: 1 },
        { ...equipmentByName.get("大圆半自动胀筋卷口机"), quantity: 1 },
        { ...equipmentByName.get("大圆半自动翻边机"), quantity: 1 },
        { ...equipmentByName.get("大圆半自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "大-圆-自动-花篮桶": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("圆刀剪板机"), quantity: 1 },
        { ...equipmentByName.get("自动焊机"), quantity: 1 },
        { ...equipmentByName.get("胶水补涂"), quantity: 1 },
        { ...equipmentByName.get("花篮桶组合机"), quantity: 1 },
        { ...equipmentByName.get("大圆自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("自动提梁焊耳机"), quantity: 1 },
      ],
      "大-圆-半自动-闭合桶": [
        // 引用equipmentData中的设备数据
        { ...equipmentByName.get("圆刀剪板机"), quantity: 1 },
        { ...equipmentByName.get("后进料焊机"), quantity: 1 },
        { ...equipmentByName.get("水冷机"), quantity: 1 },
        { ...equipmentByName.get("压筋卷口机"), quantity: 1 },
        { ...equipmentByName.get("大圆半自动翻边机"), quantity: 1 },
        { ...equipmentByName.get("大圆半自动封罐机"), quantity: 1 },
        { ...equipmentByName.get("打包机"), quantity: 1 },
      ],
      "大-圆-自动-闭合桶": [
        {
          name: "圆刀剪板机",
          quantity: 1,
          price: 0.85,
          specs: "适用材料厚度: 0.8-2mm, 材质: 高速钢",
          imageUrl: require("@/assets/image/圆刀剪板机.jpg"),
        },
        {
          name: "自动焊机",
          quantity: 1,
          price: 0.85,
          specs: "适用材料厚度: 0.8-2mm, 材质: 高速钢",
          imageUrl: require("@/assets/image/自动焊机.jpg"),
        },
        {
          name: "胶水补涂",
          quantity: 1,
          price: 9.8,
          specs: "注胶精度: ±0.02g, 速度: 15个/min",
          imageUrl: require("@/assets/image/胶水补涂.jpg"),
        },
        {
          name: "花篮桶组合机",
          quantity: 1,
          price: 2.5,
          specs: "适用罐型: 15L, 材质: 合金工具钢",
          imageUrl: require("@/assets/image/花篮桶组合机.jpg"),
        },
        {
          name: "大圆自动封罐机",
          quantity: 1,
          price: 12.5,
          specs: "冲压力: 63吨, 行程: 100mm",
          imageUrl: require("@/assets/image/大圆自动封罐机.jpg"),
        },
      ],
    };

    // 生成设备列表方法
    const generateEquipment = () => {
      // 构建参数组合键
      let key = `${canSize.value}-${canShape.value}-${processType.value}`;
      // 大圆形罐子需要追加封口类型
      if (canSize.value === "大" && canShape.value === "圆") {
        key += `-${sealingType.value}`;
      }
      // 匹配设备列表
      equipmentList.value = equipmentMapping[key] || [];
      showEquipmentList.value = equipmentList.value.length > 0;
    };

    // 工艺步骤分析方法
    const analyzeProcess = () => {
      // 解析工艺步骤文本
      processSteps.value = processText.value
        .split("→")
        .map((step) => step.trim())
        .filter((step) => step);

      // 匹配设备并初始化数量和总价
      matchedEquipment.value = equipmentData
        .filter((equip) => {
          return processSteps.value.some((step) => {
            const stepKeywords = step.toLowerCase().replace(/\s+/g, "");
            return equip.processKeywords.some((keyword) =>
              stepKeywords.includes(keyword.toLowerCase())
            );
          });
        })
        .map((equip) => ({
          ...equip,
          quantity: 1,
          totalPrice: equip.unitPrice * 1,
        }));

      // 计算总价
      calculateTotalPrice();

      // 更新图表数据
      if (matchedEquipment.value.length > 0) {
        showChart.value = true;
        const equipNames = matchedEquipment.value.map((equip) => equip.name);
        const unitPrices = matchedEquipment.value.map(
          (equip) => equip.unitPrice
        );
        const totalPrices = matchedEquipment.value.map(
          (equip) => equip.totalPrice
        );

        chartOptions.value.xAxis.data = equipNames;
        chartOptions.value.series[0].data = unitPrices;
        chartOptions.value.series[1].data = totalPrices;
      }
    };

    // 数量增减方法
    const increaseQuantity = (index) => {
      const equipment = matchedEquipment.value[index];
      equipment.quantity++;
      equipment.totalPrice = equipment.quantity * equipment.unitPrice;
      calculateTotalPrice();
    };

    const decreaseQuantity = (index) => {
      const equipment = matchedEquipment.value[index];
      if (equipment.quantity > 1) {
        equipment.quantity--;
        equipment.totalPrice = equipment.quantity * equipment.unitPrice;
        calculateTotalPrice();
      }
    };

    // 计算总价
    const calculateTotalPrice = () => {
      totalPrice.value = matchedEquipment.value.reduce(
        (sum, equip) => sum + equip.totalPrice,
        0
      );
    };

    // 暴露给模板的变量和方法
    return {
      canSize,
      canShape,
      processType,
      sealingType,
      equipmentList,
      showEquipmentList,
      generateEquipment,
      processText,
      processSteps,
      matchedEquipment,
      showChart,
      chartOptions,
      analyzeProcess,
      increaseQuantity,
      decreaseQuantity,
      calculateTotalPrice,
      totalPrice,
      draggedIndex,
      onDragStart,
      onDragOver,
      onDrop,
    };
  },
};
</script>

<style scoped>
.process-analyzer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  scroll-behavior: smooth;
}

.equipment-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

/* 拖动样式 */
.dragging {
  opacity: 0.5;
  background-color: #f0f0f0;
}

.drag-handle {
  width: 40px;
  text-align: center;
  background-color: #f5f5f5;
  cursor: move;
  user-select: none;
}

.drag-icon {
  display: inline-block;
  font-size: 18px;
  color: #666;
  opacity: 0.6;
  width: 100%;
  text-align: center;
}

.drag-handle:hover .drag-icon {
  opacity: 1;
  color: #3498db;
}

.process-analyzer h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 24px;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
}

.options-section {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 35px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.add-equipment-form {
  margin-bottom: 35px;
}

@media (max-width: 768px) {
  .process-analyzer-container {
    padding: 15px;
  }

  .option-group {
    display: block;
    margin-bottom: 15px;
  }

  .form-group {
    min-width: 100%;
  }

  .equipment-table th,
  .equipment-table td {
    padding: 12px 10px;
    font-size: 13px;
  }

  .generate-btn,
  .add-btn {
    width: 100%;
  }
}

.option-group {
  display: flex;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 15px;
}

.option-group label {
  margin-right: 15px;
  font-weight: 500;
  color: #2c3e50;
}

.option-group {
  display: inline-flex;
  margin-right: 25px;
}

.option-group input[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.option-group input[type="radio"] + label {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
}

.option-group input[type="radio"] + label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ddd;
  transition: all 0.3s;
}

.option-group input[type="radio"]:checked + label::before {
  border-color: #3498db;
  background-color: #3498db;
}

.option-group input[type="radio"]:checked + label::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
}

.generate-btn-container {
  margin-bottom: 30px;
}

.generate-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
  margin-bottom: 20px;
  transform: translateY(0);
}

.generate-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.2);
}

.generate-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
}

.generate-btn:hover {
  background-color: #2980b9;
}

.add-equipment-form {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.07);
}

.add-equipment-form h3 {
  margin-top: 0;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 18px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
  min-width: 200px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2c3e50;
  font-size: 14px;
  transition: color 0.3s;
}

.form-group label:hover {
  color: #3498db;
}

.form-input {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex: 1;
  font-size: 14px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group-button {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.form-input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  outline: none;
}

.form-input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
}

.add-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.add-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  white-space: nowrap;
  transform: translateY(0);
  width: 100%;
  box-sizing: border-box;
}

.add-btn:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(46, 204, 113, 0.2);
}

.add-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(46, 204, 113, 0.2);
}

.equipment-list-container {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.07);
}

.equipment-list-container h3 {
  margin-top: 0;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 18px;
}

.equipment-table {
  width: 100%;
  border-collapse: collapse;
}

.equipment-table th,
.equipment-table td {
  padding: 14px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.equipment-table th {
  background-color: #2c3e50;
  color: white;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 16px 15px;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.equipment-table tbody tr {
  transition: background-color 0.3s;
}

.equipment-table tbody tr:hover {
  background-color: #f1f9f7;
}

.equipment-table tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

.quantity-input {
  width: 60px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.quantity-input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  outline: none;
}

.price-input {
  width: 80px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.price-input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  outline: none;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  transform: translateY(0);
}

.delete-btn:hover {
  background-color: #c0392b;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(231, 76, 60, 0.2);
}

.delete-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(231, 76, 60, 0.2);
}

.total-row {
  background-color: #e8f4fd;
  font-weight: bold;
}

.total-row td {
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 2px solid #3498db;
}

.equipment-suggestions {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 42px;
  z-index: 100;
  width: 250px;
  max-height: 200px;
  overflow-y: auto;
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.suggestion-item {
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.suggestion-item:hover {
  background-color: #f1f9f7;
  color: #3498db;
}

.export-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  white-space: nowrap;
  transform: translateY(0);
  width: 100%;
  box-sizing: border-box;
  margin-top: 15px;
}

.export-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.2);
}

.export-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
}
</style>

<style scoped>
/* 根容器样式 */
.process-analyzer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.options-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.option-group {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 15px;
  border-radius: 8px;
  background-color: #f8f9fa;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.option-group:hover {
  background-color: #f0f2f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.option-group label:first-child {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  min-width: 80px;
}

.option-group label:not(:first-child) {
  font-size: 14px;
  color: #444;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.option-group label:not(:first-child):hover {
  color: #1890ff;
  background-color: rgba(24, 144, 255, 0.08);
}

.option-group input[type="radio"]:checked + label:not(:first-child) {
  color: #1890ff;
  background-color: rgba(24, 144, 255, 0.12);
  font-weight: 500;
  border: 1px solid #e6f7ff;
}

.option-group input[type="radio"] {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  accent-color: #1890ff;
  cursor: pointer;
}

.generate-btn-container {
  margin: 20px 0;
  text-align: center;
}

.generate-btn {
  padding: 10px 20px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.generate-btn:hover {
  background-color: #096dd9;
}

.equipment-list-container {
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.equipment-list-container h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.table-responsive {
  overflow-x: auto;
  margin-top: 15px;
}

.equipment-table th,
.equipment-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e8e8e8;
}

.equipment-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}

.equipment-table tbody tr:hover {
  background-color: #f5f5f5;
}

.equipment-table .specs-column {
  max-width: 300px;
  word-wrap: break-word;
}

.total-row {
  background-color: #fafafa;
}

.total-row td {
  padding-top: 15px;
  padding-bottom: 15px;
}

.input-section {
  margin-bottom: 30px;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.quantity-btn {
  width: 25px;
  height: 25px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #359469;
}

.results-section {
  margin-top: 20px;
}

.process-flow {
  margin-bottom: 30px;
}

.flow-chart {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.flow-step {
  padding: 8px 12px;
  background-color: #e0f2f1;
  border-radius: 4px;
  font-size: 14px;
}

.arrow {
  align-self: center;
  color: #666;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.chart-container {
  width: 100%;
  height: 400px;
  margin-top: 10px;
}
</style>