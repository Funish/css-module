# 基础

## 主题

通过应用类选择器 `.fu-theme-dark` 创建深色主题。

## 自定义属性

通过自定义属性可以调整界面主题。

| 类名                              | 描述                               |
|-----------------------------------|------------------------------------|
| `--theme-background-color`        | 背景颜色                           |
| `--theme-surface-color`           | 面板颜色（用于控件）               |
| `--theme-on-surface-color`        | 文本颜色（白色或者黑色）           |
| `--theme-variant-color`           | 聚焦颜色（通常为褪色后的面板颜色） |
| `--theme-middle-color`            | 中间色（用于浅色和深色切换）       |
| `--theme-default-color-primary`   | 默认色的主要颜色                   |
| `--theme-default-color-secondary` | 默认色的次要颜色                   |
| `--theme-danger-color-primary`    | 危险色的主要颜色                   |
| `--theme-danger-color-secondary`  | 危险色的次要颜色                   |
| `--theme-success-color-primary`   | 成功色的主要颜色                   |
| `--theme-success-color-secondar`  | 成功色的次要颜色                   |
| `--theme-disabled-color`          | 禁用时使用的颜色                   |

```html
<style>
  :root{
    --theme-surface-color: #fff;
    /* ... */
  }
</style>
```