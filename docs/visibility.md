# Visibility

Visibility 模块用于响应设备宽度以调整元素可见性。

## 用法

| 类名             | 描述                                       |
| ---------------- | ------------------------------------------ |
| `.fun-hidden`    | 在文档流中删除元素，可用 `hidden` 属性代替 |
| `.fun-invisible` | 隐藏元素而不更改页面的布局                 |
| `.fun-visible`   | 元素正常显示                               |

```html
<!-- Attribute -->
<div hidden></div>

<!-- Classes -->
<div class="fun-hidden">
  <!-- 不可见 -->
</div>

<div class="fun-invisible">
  <div class="fun-visible">
    <!-- 可见 -->
  </div>
</div>
```

## 响应式可见性

### 可见

| 类名             | 描述                      |
| ---------------- | ------------------------- |
| `.fun-hidden@s`  | 影响设备宽度大于 `640px`  |
| `.fun-hidden@m`  | 影响设备宽度大于 `960px`  |
| `.fun-hidden@l`  | 影响设备宽度大于 `1200px` |
| `.fun-hidden@xl` | 影响设备宽度大于 `1600px` |

### 不可见

| 类名              | 描述                      |
| ----------------- | ------------------------- |
| `.fun-visible@s`  | 影响设备宽度大于 `640px`  |
| `.fun-visible@m`  | 影响设备宽度大于 `960px`  |
| `.fun-visible@l`  | 影响设备宽度大于 `1200px` |
| `.fun-visible@xl` | 影响设备宽度大于 `1600px` |

## 触摸

| 类名                  | 描述               |
| --------------------- | ------------------ |
| `.fun-hidden-touch`   | 在触摸设备上隐藏   |
| `.fun-hidden-notouch` | 在非触摸设备上隐藏 |
