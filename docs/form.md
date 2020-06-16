# Form

Form 模块使您可以轻松创建漂亮的表单。

## 用法

使用类选择器 `.fu-form` 应用样式。为统一视觉上的观感，`button`、`input`、`select`、`textarea` 将共用大部分样式。

| 类名       | 描述                                                        |
|------------|-------------------------------------------------------------|
| `.fu-form` | 将此类添加到 `input`、`select`、`textarea` 标签上以应用样式 |

```html
<input class="fu-form" />
```

## 变体

可使用类选择器 `.fu-form-underlined` 来应用下划线样式。

```html
<input class="fu-form fu-form-underlined" />
```

## 上传

```html
<div class="fu-form-file">
  <input type="file" id="file"/>
  <label class="fu-form" for="file">Select</label>
</div>
```

## 图标

```html
<div class="fu-icon-form">
  <i class="fas fa-user fu-form-icon"></i>
  <input class="fu-form">
</div>
```