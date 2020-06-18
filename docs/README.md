# Funish CSS

![npm version](https://img.shields.io/npm/v/@funish/css)
![npm license](https://img.shields.io/npm/l/@funish/css)
![npm downloads](https://img.shields.io/npm/dm/@funish/css)
[![](https://data.jsdelivr.com/v1/package/npm/@funish/css/badge)](https://www.jsdelivr.com/package/npm/@funish/css)

### 一个简洁的前端CSS框架。

## 模块

### 布局

* [Flex](/docs/flex)
* [Grid](/docs/grid)
* [Position](/docs/position)
* [Visibility](/docs/visibility)

### 盒模型

* [Margin](/docs/margin)
* [Padding](/docs/padding)
* [Width](/docs/width)
* [Height](/docs/height)

### 文本

* [Text](/docs/text)
* [Markdown](/docs/markdown)

### 控件

* [Box](/docs/box)
* [Button](/docs/button)
* [Dropdown](/docs/dropdown)
* [Form](/docs/form)
* [Menu](/docs/menu)
* [Navbar](/docs/navbar)
* [Utility](/docs/utility)

## 用法

### CDN

建议从 Jsdelivr CDN 处获得更快的全球响应速度。

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@funish/css@latest/dist/funish.min.css" />
```

### NPM / Yarn

```bash
# npm
$ npm install @funish/css

# Or yarn
$ yarn add @funish/css
```

你可以从 `node_modules` 目录导入 `@funish/css` 的样式文件。

```scss
@import "@funish/src/funish.scss";
```

## 构建

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static website
$ yarn generate

# output final file
$ yarn output
```

有关工作原理的详细说明，请查看[Nuxt.js docs](https://nuxtjs.org)和[node-sass](https://github.com/sass/node-sass)。