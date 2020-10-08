# Progress

Progress 模块用于创建进度条。

## 用法

通过应用类选择器 `fun-progress` 以添加样式。

```html
<progress class="fun-progress" value="" max=""></progress>
```

<progress class="fun-progress" value="30" max="100"></progress>

## 变体

同时使用类选择器 `.fun-progress` 和 `.fun-progress-*` 以应用样式。

| 类名                      | 描述               |
| ------------------------- | ------------------ |
| `.fun-progress-secondary` | 创建次要颜色进度条 |
| `.fun-progress-warning`   | 创建警示颜色进度条 |
| `.fun-progress-success`   | 创建成功颜色进度条 |

```html
<progress
  class="fun-progress fun-progress-secondary"
  value=""
  max=""
></progress>
<progress class="fun-progress fun-progress-warning" value="" max=""></progress>
<progress class="fun-progress fun-progress-success" value="" max=""></progress>
```

<progress class="fun-progress fun-progress-secondary" value="30" max="100"></progress>
<progress class="fun-progress fun-progress-warning" value="30" max="100"></progress>
<progress class="fun-progress fun-progress-success" value="30" max="100"></progress>
