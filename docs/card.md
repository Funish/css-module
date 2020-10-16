# Card

Card 模块用于创建盒子。

## 用法

| 类名                | 描述                           |
| ------------------- | ------------------------------ |
| `.fun-card`         | 创建一个盒子容器               |
| `.fun-card-header`  | 创建盒子容器的页头，通常为标题 |
| `.fun-card-content` | 创建盒子容器的内容，通常为文本 |
| `.fun-card-footer`  | 创建盒子容器的页脚，通常为按钮 |

```html
<div class="fun-card">
  <div class="fun-card-header"></div>
  <div class="fun-card-content"></div>
  <div class="fun-card-footer"></div>
</div>
```

<div class="fun-grid fun-child-width-1-1 fun-grid-row-small fun-grid-column-small fun-grid-template-column-small">
<div class="fun-card">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>
  <div class="fun-card-content">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

<div class="fun-card">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>
  <div class="fun-card-content">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
  <div class="fun-card-footer fun-flex fun-main-end">
  <button class="fun-button fun-icon-button">
    <i class="far fa-heart"></i>
  </button>
  <button class="fun-button fun-icon-button">
    <i class="far fa-bookmark"></i>
  </button>
  </div>
</div>
</div>

## 动作

通过应用类选择器 `.fun-card-action` 为盒子容器添加可交互式动作。

```html
<div class="fun-card fun-card-action"></div>
```

<div class="fun-grid fun-child-width-1-1 fun-grid-row-small fun-grid-column-small fun-grid-template-column-small">
<div class="fun-card fun-card-action">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>
  <div class="fun-card-content">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

<div class="fun-card">
  <div class="fun-card-action">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
  <div class="fun-text-subtitle">Subtitle</div>
  </div>
  <div class="fun-card-content">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
  </div>
  <div class="fun-card-footer fun-flex fun-main-end">
  <button class="fun-button fun-icon-button">
    <i class="far fa-heart"></i>
  </button>
  <button class="fun-button fun-icon-button">
    <i class="far fa-bookmark"></i>
  </button>
  </div>
</div>
</div>
