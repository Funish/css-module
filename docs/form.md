# Form

Form 模块使您可以轻松创建漂亮的表单。

## 用法

使用类选择器 `.fu-form` 和 `fu-form-*` 应用样式。为统一视觉上的观感，`button`、`input`、`select`、`textarea` 将共用大部分样式。

| 类名                  | 描述                                                          |
| --------------------- | ------------------------------------------------------------- |
| `.fu-form`            | 将此类添加到 `input`、`select`、`textarea` 等标签上以应用样式 |
| `.fu-form-outlined`   | 添加此类以实现一个轮廓                                        |
| `.fu-form-underlined` | 为表单添加下划线样式                                          |
| `.fu-form-contained`  | 为表单添加块状容器样式                                        |
| `.fu-form-action`     | 为表单添加可激活容器样式                                      |

```html
<input class="fu-form fu-form-outlined" />
<input class="fu-form fu-form-underlined" />
<input class="fu-form fu-form-contained" />
<input class="fu-form fu-form-action" />
```

## 单选框和复选框

仅使用类选择器 `.fu-form` 应用样式。

```html
<input type="radio" name="radio1" class="fu-form" />
<input type="radio" name="radio1" class="fu-form" />
<input type="checkbox" class="fu-form" />
```

## 上传

```html
<div class="fu-form-file">
  <input type="file" id="file" />
  <label class="fu-form" for="file">Select</label>
</div>
```

## 图标

```html
<div class="fu-icon-form">
  <i class="fas fa-user fu-form-icon"></i>
  <input class="fu-form" />
</div>
```

## 反转

通过在父节点和子节点应用类选择器 `.fu-form-reverse` 以使表单模块反转。
