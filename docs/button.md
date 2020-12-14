# Button

Button 模块是 Form 模块的延伸，具有更丰富的按钮样式。

## 用法

通过应用类选择器 `.fun-button` 以添加样式。

| 类名          | 描述         |
| ------------- | ------------ |
| `.fun-button` | 创建一个按钮 |

```html
<button class="fun-button">Button</button>
<button class="fun-button fun-button-dense">Button</button>
<button class="fun-button fun-button-loose">Button</button>
```

<button class="fun-button fun-button-raised">Normal</button>
<button class="fun-button fun-button-raised fun-button-dense">Dense</button>
<button class="fun-button fun-button-raised fun-button-loose">Loose</button>

## 变体

同时应用类选择器 `.fun-button` 和 `.fun-button-*` 以添加样式。

| 类名                    | 描述                         |
| ----------------------- | ---------------------------- |
| `.fun-button-outlined`  | 添加此类以实现一个轮廓       |
| `.fun-button-contained` | 添加此类以应用一个容器类按钮 |
| `.fun-button-raised`    | 添加此类以应用一个容器类按钮 |

```html
<button class="fun-button">Button</button>
<button class="fun-button fun-button-outlined">Outlined</button>
<button class="fun-button fun-button-contained">Contained</button>
<button class="fun-button fun-button-raised">Raised</button>
```

<button class="fun-button">Button</button>
<button class="fun-button fun-button-outlined">Outlined</button>
<button class="fun-button fun-button-contained">Contained</button>
<button class="fun-button fun-button-raised">Raised</button>

## 按钮上的图标

通过应用类选择器 `.fun-button-icon` 配合 `fontawesome` 为按钮添加图标。

```html
<button class="fun-button">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">Button</div>
</button>
```

<button class="fun-button">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">Button</div>
</button>
<button class="fun-button fun-button-outlined">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">outlined</div>
</button>
<button class="fun-button fun-button-contained">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">contained</div>
</button>
<button class="fun-button fun-button-raised">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">raised</div>
</button>

## 图标按钮

通过应用类选择器 `.fun-icon-button` 以创建图标按钮。

```html
<button class="fun-button fun-icon-button">
  <i class="fas fa-user"></i>
</button>
```

<button class="fun-button fun-icon-button">
  <i class="fas fa-user"></i>
</button>
<button class="fun-button fun-button-outlined fun-icon-button">
  <i class="fas fa-user"></i>
</button>
<button class="fun-button fun-button-contained fun-icon-button">
  <i class="fas fa-user"></i>
</button>
<button class="fun-button fun-button-raised fun-icon-button">
  <i class="fas fa-user"></i>
</button>

## 反转

通过在父节点和子节点应用属性 `dir="rtl"` 以使按钮模块反转。

<div dir="rtl">
<button class="fun-button">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">Button</div>
</button>
<button class="fun-button fun-button-outlined">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">outlined</div>
</button>
<button class="fun-button fun-button-contained">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">contained</div>
</button>
<button class="fun-button fun-button-raised">
  <i class="fas fa-user fun-button-icon"></i>
  <div class="fun-button-label">raised</div>
</button>
</div>

## 按钮组

通过应用类选择器 `.fun-button-group` 以创建按钮组。

```html
<div class="fun-button-group">
  <button class="fun-button fun-button-contained fun-icon-button">
    <i class="fas fa-user"></i>
  </button>
  <button class="fun-button fun-button-contained fun-icon-button">
    <i class="fas fa-user"></i>
  </button>
  <button class="fun-button fun-button-contained fun-icon-button">
    <i class="fas fa-user"></i>
  </button>
</div>
```

<div class="fun-button-group">
  <button class="fun-button fun-button-contained fun-icon-button">
    <i class="fas fa-user"></i>
  </button>
  <button class="fun-button fun-button-contained fun-icon-button">
    <i class="fas fa-user"></i>
  </button>
  <button class="fun-button fun-button-contained fun-icon-button">
    <i class="fas fa-user"></i>
  </button>
</div>
