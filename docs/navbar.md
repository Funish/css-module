# Navbar

Narbar 模块用于创建顶部导航栏。

## 用法

| 类名                 | 描述               |
| -------------------- | ------------------ |
| `.fun-navbar-top`    | 创建一个顶部导航栏 |
| `.fun-navbar-bottom` | 创建一个底部导航栏 |

```html
<div class="fun-navbar-top"></div>
```

## 下拉栏

| 类名                   | 描述           |
| ---------------------- | -------------- |
| `.fun-navbar-dropdown` | 创建一个下拉栏 |

```html
<div class="fun-navbar-top">
  <details class="fun-navbar-dropdown">
    <summary>Toggle</summary>
    <div>...</div>
  </details>
</div>
```

## 侧边栏

| 类名                         | 描述                                       |
| ---------------------------- | ------------------------------------------ |
| `.fun-navbar-drawer`         | 创建一个侧边栏                             |
| `.fun-navbar-drawer-reverse` | 添加此类以使创建的侧边栏反转（通常为右侧） |

```html
<div class="fun-navbar-top">
  <details class="fun-navbar-drawer">
    <summary>Toggle</summary>
    <div>...</div>
  </details>
</div>
```
