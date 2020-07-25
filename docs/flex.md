# Flex

Flex 模块用于创建一个 CSS 弹性盒子布局。

弹性盒子是一种一维的布局模型，由一条主轴和另一条垂直于它的交叉轴进行定位，为 flex 容器内部的子元素提供空间分布和对齐能力，但一次只能处理一个维度上的元素布局（行或者列）。

## 用法

通过应用类选择器 `.fu-flex` 或 `.fu-flex-inline` 创建弹性盒子布局。

| 类名              | 描述                     |
| ----------------- | ------------------------ |
| `.fu-flex`        | 创建一个 flex 容器       |
| `.fu-flex-inline` | 创建一个内联的 flex 容器 |

```html
<div class="fu-flex">
  <div></div>
  ...
  <div></div>
</div>
```

## 主轴

主轴由 `flex-direction` 属性定义，可以通过类选择器 `.fu-flex-row-*` 或 `.fu-flex-column-*` 应用。

| 类名                      | 描述                             |
| ------------------------- | -------------------------------- |
| `.fu-flex-row`            | 按默认方向水平延伸主轴           |
| `.fu-flex-row-reverse`    | 按默认方向的相反方向水平延伸主轴 |
| `.fu-flex-column`         | 从上至下垂直延伸主轴             |
| `.fu-flex-column-reverse` | 从下至上垂直延伸主轴             |

```html
<div class="fu-flex fu-flex-row"></div>
```

## 拆分行或列

通过应用类选择器 `.fu-flex-wrap` 来改变 `flex-wrap` 属性拆分行或列，新建的行或列应当被视作一个新的 flex 容器。

| 类名                    | 描述                                       |
| ----------------------- | ------------------------------------------ |
| `.fu-flex-nowrap`       | 默认值，不拆分并使内部子元素缩小以适应容器 |
| `.fu-flex-wrap`         | 当子元素太大不适应 flex 容器时拆分行或列   |
| `.fu-flex-wrap-reverse` | 使 flex 容器以相反顺序拆分行或列           |

```html
<div class="fu-flex fu-flex-wrap"></div>
```

## 对齐主轴

通过类选择器 `.fu-main-*` 改变 `justify-content` 属性的值来使元素在主轴方向上对齐。

| 类名               | 描述                                       |
| ------------------ | ------------------------------------------ |
| `.fu-main-start`   | 使元素从 flex 容器主轴的起始线开始排列     |
| `.fu-main-end`     | 使元素从 flex 容器主轴的终止线开始排列     |
| `.fu-main-center`  | 使元素从 flex 容器主轴的中心线开始排列     |
| `.fu-main-between` | 使 flex 容器中的各元素间空间相等           |
| `.fu-main-around`  | 使 flex 容器中的各元素两侧均匀分布相等空间 |

```html
<div class="fu-flex fu-main-center">
  <div></div>
  ...
  <div></div>
</div>
```

## 对齐交叉轴

通过类选择器 `.fu-cross-*` 改变 `align-items` 属性的值来使元素在主轴方向上对齐。

| 类名                | 描述                                         |
| ------------------- | -------------------------------------------- |
| `.fu-cross-stretch` | 默认值，元素被拉伸到最高元素的高度以适应容器 |
| `.fu-cross-start`   | 使元素按 flex 容器交叉轴的顶部对齐           |
| `.fu-cross-end`     | 使元素按 flex 容器交叉轴的底部对齐           |
| `.fu-cross-center`  | 使元素沿 flex 容器的交叉轴居中对齐           |

```html
<div class="fu-flex fu-cross-center">
  <div></div>
  ...
  <div></div>
</div>
```

## 分配子元素空间

通过调整 `flex` 属性来为 flex 容器内的子元素分配空间，可以通过类选择器 `.fu-flex-auto`、`.fu-flex-none`和 `.fu-flex-1` 来应用。

| 类名            | 描述                                     |
| --------------- | ---------------------------------------- |
| `.fu-flex-auto` | 按 flex 容器内子元素的内容等比例分配空间 |
| `.fu-flex-none` | 按 flex 容器内子元素的内容分配同等空间   |
| `.fu-flex-1`    | 均匀分配 flex 容器内子元素的空间         |
