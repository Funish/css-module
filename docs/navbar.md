# Navbar

Narbar 模块用于创建顶部导航栏。

## 用法

| 类名                | 描述                   |
| ------------------- | ---------------------- |
| `.fu-navbar-top`    | 创建一个顶部导航栏     |
| `.fu-navbar-bottom` | 创建一个底部导航栏     |
| `.fu-navbar-item`   | 创建一个导航栏的子项目 |

```html
<div class="fu-navbar-top">
  <div class="fu-navbar-item"></div>
</div>
```

## 下拉栏

| 类名                  | 描述           |
| --------------------- | -------------- |
| `.fu-navbar-dropdown` | 创建一个下拉栏 |

```html
<div class="fu-navbar-top">
  <details class="fu-navbar-dropdown">
    <summary>Toggle</summary>
    <div>...</div>
  </details>
</div>
```

## 侧边栏

| 类名                        | 描述                                       |
| --------------------------- | ------------------------------------------ |
| `.fu-navbar-drawer`         | 创建一个侧边栏                             |
| `.fu-navbar-drawer-reverse` | 添加此类以使创建的侧边栏反转（通常为右侧） |

```html
<div class="fu-navbar-top">
  <details class="fu-navbar-drawer">
    <summary>Toggle</summary>
    <div>...</div>
  </details>
</div>
```
