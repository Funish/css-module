# Visibility

Visibility 模块用于响应设备宽度以调整元素可见性。

## 用法

| 类名            | 描述                                       |
|-----------------|--------------------------------------------|
| `.fu-hidden`    | 在文档流中删除元素，可用 `hidden` 属性代替 |
| `.fu-invisible` | 隐藏元素而不更改页面的布局                 |
| `.fu-visible`   | 元素正常显示                               |

```html
<!-- Attribute -->
<div hidden></div>

<!-- Classes -->
<div class="fu-hidden">
  <!-- 不可见 -->
</div>

<div class="fu-invisible">
  <div class="fu-visible">
    <!-- 可见 -->
  </div>
</div>
```

## 响应式可见性

### 可见

| 类名            | 描述                      |
|-----------------|---------------------------|
| `.fu-hidden@s`  | 影响设备宽度大于 `640px`  |
| `.fu-hidden@m`  | 影响设备宽度大于 `960px`  |
| `.fu-hidden@l`  | 影响设备宽度大于 `1200px` |
| `.fu-hidden@xl` | 影响设备宽度大于 `1600px` |

### 不可见

| 类名             | 描述                      |
|------------------|---------------------------|
| `.fu-visible@s`  | 影响设备宽度大于 `640px`  |
| `.fu-visible@m`  | 影响设备宽度大于 `960px`  |
| `.fu-visible@l`  | 影响设备宽度大于 `1200px` |
| `.fu-visible@xl` | 影响设备宽度大于 `1600px` |

## 触摸

| 类名                 | 描述               |
|----------------------|--------------------|
| `.fu-hidden-touch`   | 在触摸设备上隐藏   |
| `.fu-hidden-notouch` | 在非触摸设备上隐藏 |