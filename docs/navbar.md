# Navbar

Narbar 模块用于创建顶部导航栏。

## 用法

| 类名                    | 描述               |
| ----------------------- | ------------------ |
| `.fun-navbar-top`       | 创建一个顶部导航栏 |
| `.fun-navbar-bottom`    | 创建一个底部导航栏 |
| `.fun-navbar-container` | 创建一个导航栏容器 |

```html
<div class="fun-navbar-top"></div>
```

<div class="fun-navbar-top fun-position-relative">

</div>

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

<div class="fun-navbar-top fun-position-relative">
  <details class="fun-navbar-dropdown">
    <summary>
      <span class="fun-button fun-icon-button">
        <i class="fas fa-chevron-down"></i>
      </span>
    </summary>
    <div class="fun-menu">
      <a href="#1" class="fun-menu-item">Item1</a>
      <a href="#2" class="fun-menu-item">Item2</a>
      <a href="#3" class="fun-menu-item">Item3</a>
    </div>
  </details>
</div>

## 侧边栏

| 类名                         | 描述                                       |
| ---------------------------- | ------------------------------------------ |
| `.fun-navbar-drawer`         | 创建一个侧边栏                             |
| `.fun-navbar-drawer-reverse` | 添加此类以使创建的侧边栏反转（通常为右侧） |

```html
<details class="fun-navbar-drawer">
  <summary>Toggle</summary>
  <div>...</div>
</details>
```

<details class="fun-navbar-drawer">
  <summary>
  <span class="fun-button fun-button-outlined">Toggle</span>
  </summary>
  <div>...</div>
</details>
