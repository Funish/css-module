# Button

Button 模块是 Form 模块的延伸，具有更丰富的按钮样式。

## 用法

使用类选择器 `.fun-button` 以应用样式。

| 类名                | 描述               |
| ------------------- | ------------------ |
| `.fun-button`       | 创建一个按钮       |
| `.fun-button-dense` | 创建一个较小的按钮 |
| `.fun-button-loose` | 创建一个较大的按钮 |

```html
<button class="fun-button">Button</button>
<button class="fun-button fun-button-dense">Button</button>
<button class="fun-button fun-button-loose">Button</button>
```

## 变体

同时使用类选择器 `.fun-button` 和 `.fun-button-*` 以应用样式。

| 类名                    | 描述                         |
| ----------------------- | ---------------------------- |
| `.fun-button-outlined`  | 添加此类以实现一个轮廓       |
| `.fun-button-contained` | 添加此类以应用一个容器类按钮 |
| `.fun-button-raised`    | 添加此类以应用一个容器类按钮 |

```html
<button class="fun-button fun-button-outlined">Outlined</button>
<button class="fun-button fun-button-contained">Contained</button>
<button class="fun-button fun-button-raised">Raised</button>
```

## 图标

通过应用类选择器 `.fun-button-icon` 配合 `fontawesome` 为按钮添加图标。

```html
<button class="fun-button fun-button-outlined">
  <i class="fas fa-user fun-button-icon"></i>
  <div>Button</div>
</button>
```

通过应用类选择器 `.fun-icon-button` 创建图标按钮。

```html
<button class="fun-button fun-icon-button">
  <i class="fas fa-user"></i></button
>>
```

## 反转

通过在父节点和子节点应用类选择器 `.fun-button-reverse` 以使按钮模块反转。
