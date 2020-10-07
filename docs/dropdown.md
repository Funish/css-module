# Dropdown

Dropdown 模块用于创建下拉菜单。

## 用法

| 类名                 | 描述                             |
| -------------------- | -------------------------------- |
| `.fun-dropdown`      | 创建一个下拉菜单容器             |
| `.fun-dropdown-menu` | 创建一个下拉菜单（位于底部左侧） |

```html
<details class="fun-dropdown">
  <summary>Dropdown</summary>
  <div class="fun-dropdown-menu fun-dropdown-menu-bottom">
    <li class="fun-menu-item">Item1</li>
    <li class="fun-menu-item">Item2</li>
    <li class="fun-menu-item">Item3</li>
  </div>
</details>
```

## 下拉菜单位置

| 类名                             | 描述                       |
| -------------------------------- | -------------------------- |
| `fun-dropdown-menu-left`         | 创建位于左侧的下拉菜单     |
| `fun-dropdown-menu-right`        | 创建位于右侧的下拉菜单     |
| `fun-dropdown-menu-top`          | 创建位于顶部的下拉菜单     |
| `fun-dropdown-menu-bottom`       | 创建位于底部的下拉菜单     |
| `fun-dropdown-menu-bottom-left`  | 创建位于底部左侧的下拉菜单 |
| `fun-dropdown-menu-bottom-right` | 创建位于底部右侧的下拉菜单 |

```html
<div class="fun-dropdown">
  <summary></summary>
  <div class="fun-dropdown-menu fun-dropdown-menu-bottom"></div>
</div>
```
