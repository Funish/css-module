# Card

Card 模块用于创建盒子。

## 用法

| 类名                | 描述                           |
| ------------------- | ------------------------------ |
| `.fun-card`         | 创建一个盒子容器               |
| `.fun-card-media`   | 创建盒子容器的媒体，通常为图像 |
| `.fun-card-header`  | 创建盒子容器的页头，通常为标题 |
| `.fun-card-content` | 创建盒子容器的内容，通常为文本 |
| `.fun-card-footer`  | 创建盒子容器的页脚，通常为按钮 |

```html
<div class="fun-card">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>

  <div class="fun-card-content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>
```

<div class="fun-card fun-width-1-2@s">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>
  <div class="fun-card-content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

## 媒体

通过应用类选择器 `.fun-card-media` 创建盒子容器的媒体。

```html
<div class="fun-card">
  <div
    class="fun-card-media fun-card-media--16-9"
    style='background-image: url("https://images.unsplash.com/photo-1520529890308-f503006340b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");'
  ></div>
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>
  <div class="fun-card-content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>
```

<div class="fun-card fun-width-1-2@s">
  <div
    class="fun-card-media fun-card-media--16-9"
    style='background-image: url("https://images.unsplash.com/photo-1520529890308-f503006340b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");'
  ></div>
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>
  <div class="fun-card-content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

## 页脚

通过应用类选择器 `.fun-card-footer` 创建盒子容器的页脚。

```html
<div class="fun-card">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>

  <div class="fun-card-content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="fun-card-footer">
    <div class="fun-card-footer-buttons">
      <button class="fun-button">Read</button>
      <button class="fun-button">Bookmark</button>
    </div>
    <div class="fun-card-footer-icons">
      <button class="fun-button fun-icon-button">
        <i class="far fa-heart"></i>
      </button>
      <button class="fun-button fun-icon-button">
        <i class="far fa-bookmark"></i>
      </button>
    </div>
  </div>
</div>
```

<div class="fun-card fun-width-1-2@s">
  <div class="fun-card-header">
    <div class="fun-text-title">Card</div>
    <div class="fun-text-subtitle">Subtitle</div>
  </div>

  <div class="fun-card-content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="fun-card-footer">
    <div class="fun-card-footer-buttons">
      <button class="fun-button">Read</button>
      <button class="fun-button">Bookmark</button>
    </div>
    <div class="fun-card-footer-icons">
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
<div class="fun-card">
  <div class="fun-card-action">
    <div class="fun-card-media"></div>
    <div class="fun-card-header"></div>
    <div class="fun-card-content"></div>
  </div>
  <div class="fun-card-footer"></div>
</div>
```

<div class="fun-card fun-width-1-2@s">
  <div class="fun-card-action">
    <div
      class="fun-card-media fun-card-media--16-9"
      style='background-image: url("https://images.unsplash.com/photo-1520529890308-f503006340b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");'
    ></div>
    <div class="fun-card-header">
      <div class="fun-text-title">Card</div>
      <div class="fun-text-subtitle">Subtitle</div>
    </div>
    <div class="fun-card-content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>

  <div class="fun-card-footer">
    <div class="fun-card-footer-buttons">
      <button class="fun-button">Read</button>
      <button class="fun-button">Bookmark</button>
    </div>
    <div class="fun-card-footer-icons">
      <button class="fun-button fun-icon-button">
        <i class="far fa-heart"></i>
      </button>
      <button class="fun-button fun-icon-button">
        <i class="far fa-bookmark"></i>
      </button>
    </div>
  </div>
</div>
