# Box

Box 模块用于创建盒子。

## 用法

| 类名              | 描述                           |
| ----------------- | ------------------------------ |
| `.fu-box`         | 创建一个盒子容器               |
| `.fu-box-header`  | 创建盒子容器的页头，通常为标题 |
| `.fu-box-content` | 创建盒子容器的内容，通常为文本 |
| `.fu-box-footer`  | 创建盒子容器的页脚，通常为按钮 |

```html
<div class="fu-box">
  <div class="fu-box-header"></div>
  <div class="fu-box-content"></div>
  <div class="fu-box-footer"></div>
</div>
```

## 动作

通过应用类选择器 `.fu-box-action` 为盒子容器添加可交互式动作。

```html
<div class="fu-box fu-box-action"></div>
```
