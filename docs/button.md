# Button

Button 模块是 Form 模块的延伸，具有更丰富的按钮样式。

## 用法

使用类选择器 `.fu-button` 以应用样式。

| 类名               | 描述               |
| ------------------ | ------------------ |
| `.fu-button`       | 创建一个按钮       |
| `.fu-button-dense` | 创建一个较小的按钮 |
| `.fu-button-loose` | 创建一个较大的按钮 |

```html
<button class="fu-button">Button</button>
<button class="fu-button fu-button-dense">Button</button>
<button class="fu-button fu-button-loose">Button</button>
```

## 变体

同时使用类选择器 `.fu-button` 和 `.fu-button-*` 以应用样式。

| 类名                   | 描述                         |
| ---------------------- | ---------------------------- |
| `.fu-button-outlined`  | 添加此类以实现一个轮廓       |
| `.fu-button-contained` | 添加此类以应用一个容器类按钮 |
| `.fu-button-raised`    | 添加此类以应用一个容器类按钮 |

```html
<button class="fu-button fu-button-outlined">Outlined</button>
<button class="fu-button fu-button-contained">Contained</button>
<button class="fu-button fu-button-raised">Raised</button>
```

## 图标

通过应用类选择器 `.fu-button-icon` 配合 `fontawesome` 为按钮添加图标。

```html
<button class="fu-button fu-button-outlined">
  <i class="fas fa-user fu-button-icon"></i>
  <div>Button</div>
</button>
```

通过应用类选择器 `.fu-icon-button` 创建图标按钮。

```html
<button class="fu-button fu-icon-button">
  <i class="fas fa-user"></i></button
>>
```

## 反转

通过在父节点和子节点应用类选择器 `.fu-button-reverse` 以使按钮模块反转。
