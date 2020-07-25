# 基础

## 主题

通过应用类选择器 `.fu-theme-light` `.fu-theme-dark` 创建浅色或深色主题，默认情况下主题颜色会跟随系统颜色调整。

## 自定义属性

通过自定义属性可以调整界面主题。

| 类名                         | 描述                               |
| ---------------------------- | ---------------------------------- |
| `--fu-theme-on-surface`      | 文本颜色（白色或者黑色）           |
| `--fu-theme-background`      | 背景颜色                           |
| `--fu-theme-surface`         | 面板颜色（用于控件）               |
| `--fu-theme-surface-variant` | 聚焦颜色（通常为褪色后的面板颜色） |
| `--fu-theme-disabled`        | 禁用时使用的颜色                   |
| `--fu-theme-middle`          | 中间色（用于浅色和深色切换）       |
| `--fu-theme-default`         | 默认色的主要颜色                   |
| `--fu-theme-default-variant` | 默认色的次要颜色                   |
| `--fu-theme-warning`         | 危险色的主要颜色                   |
| `--fu-theme-warning-variant` | 危险色的次要颜色                   |
| `--fu-theme-success`         | 成功色的主要颜色                   |
| `--fu-theme-success-variant` | 成功色的次要颜色                   |

```html
<style>
  :root {
    --fu-theme-surface: #fff;
    /* ... */
  }
</style>
```
