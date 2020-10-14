# Grid

Grid 模块用于创建一个 CSS 网格布局。

网格是一种二维的布局模型，通过一组相交的水平线和垂直线定义了网格的列和行。

## 用法

使用类选择器 `.fun-grid` 或 `.fun-grid-inline` 应用网格布局。

| 类名               | 描述                     |
| ------------------ | ------------------------ |
| `.fun-grid`        | 创建一个 Grid 容器       |
| `.fun-grid-inline` | 创建一个内联的 Grid 容器 |

## 行间距

通过应用类选择器 `.fun-grid-row-*` 来为 Grid 容器设置行间距

| 类名                   | 描述                             |
| ---------------------- | -------------------------------- |
| `.fun-grid-row-xsmall` | 为 Grid 容器设置一个超小的行间距 |
| `.fun-grid-row-small`  | 为 Grid 容器设置一个较小的行间距 |
| `.fun-grid-row-medium` | 为 Grid 容器设置一个中等的行间距 |
| `.fun-grid-row-large`  | 为 Grid 容器设置一个较大的行间距 |
| `.fun-grid-row-xlarge` | 为 Grid 容器设置一个超大的行间距 |
| `.fun-grid-row-remove` | 为 Grid 容器移除行间距           |

## 列间距

通过应用类选择器 `.fun-grid-column-*` 来为 Grid 容器设置列间距

| 类名                      | 描述                             |
| ------------------------- | -------------------------------- |
| `.fun-grid-column-xsmall` | 为 Grid 容器设置一个超小的列间距 |
| `.fun-grid-column-small`  | 为 Grid 容器设置一个较小的列间距 |
| `.fun-grid-column-medium` | 为 Grid 容器设置一个中等的列间距 |
| `.fun-grid-column-large`  | 为 Grid 容器设置一个较大的列间距 |
| `.fun-grid-column-xlarge` | 为 Grid 容器设置一个超大的列间距 |
| `.fun-grid-column-remove` | 为 Grid 容器移除列间距           |

## 网格模板

通过应用类选择器 `.fun-grid-row-*` 或者 `.fun-grid-column-*` 创建等高或者等宽的网格模板。将 `*` 替换为`2`到`6`的任意数字即可得到对应行数或者列数的网格模板。

| 类名                            | 描述                       |
| ------------------------------- | -------------------------- |
| `.fun-grid-template-row-xsmall` | 为 Grid 网格设置超小的高度 |
| `.fun-grid-template-row-small`  | 为 Grid 网格设置较小的高度 |
| `.fun-grid-template-row-medium` | 为 Grid 网格设置中等的高度 |
| `.fun-grid-template-row-large`  | 为 Grid 网格设置较小的高度 |
| `.fun-grid-template-row-xlarge` | 为 Grid 网格设置超大的高度 |
