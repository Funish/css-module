# Form

Form 模块使您可以轻松创建漂亮的表单。

## 用法

使用类选择器 `.fun-form` 和 `fun-form-*` 应用样式。为统一视觉上的观感，`button`、`input`、`select`、`textarea` 将共用大部分样式。

| 类名                  | 描述                                                          |
| --------------------- | ------------------------------------------------------------- |
| `.fun-form`           | 将此类添加到 `input`、`select`、`textarea` 等标签上以应用样式 |
| `.fun-form-outlined`  | 添加此类以实现一个轮廓                                        |
| `.fun-form-contained` | 为表单添加块状容器样式                                        |
| `.fun-form-action`    | 为表单添加可激活容器样式                                      |

```html
<input class="fun-form fun-form-outlined" />
<input class="fun-form fun-form-contained" />
<input class="fun-form fun-form-action" />
```

<div class="fun-margin-bottom-small">
<input class="fun-form fun-form-outlined" placeholder="Placeholder" />
</div>
<div class="fun-margin-bottom-small">
<input class="fun-form fun-form-contained" placeholder="Placeholder" />
</div>
<div>
<input class="fun-form fun-form-action" placeholder="Placeholder" />
</div>

## 单选框和复选框

```html
<input type="radio" name="radio1" class="fun-radio" />
<input type="radio" name="radio1" class="fun-radio" />
<input type="checkbox" class="fun-checkbox" />
```

<input type="radio" name="radio1" class="fun-radio" />
<input type="radio" name="radio1" class="fun-radio" />
<input type="checkbox" class="fun-checkbox" />

## 开关

通过使用类选择器 `fun-switch` 应用样式

```html
<input type="checkbox" class="fun-switch" />
```

<input type="checkbox" class="fun-switch" />

## 开关

通过使用类选择器 `fun-range` 应用样式

```html
<input type="range" class="fun-range" />
```

<input type="range" class="fun-range" />

## 上传

```html
<div class="fun-form-file">
  <input type="file" id="file" />
  <label class="fun-form" for="file">Select</label>
</div>
```

## 图标

```html
<div class="fun-icon-form">
  <i class="fas fa-user fun-form-icon"></i>
  <input class="fun-form fun-form-outlined" placeholder="Placeholder" />
</div>
```

<div class="fun-icon-form">
  <i class="fas fa-user fun-form-icon"></i>
  <input class="fun-form fun-form-outlined" placeholder="Placeholder" />
</div>

## 反转

通过在父节点和子节点应用类选择器 `.fun-form-reverse` 以使表单模块反转。
