# Funish CSS

[![npm version](https://badge.fury.io/js/%40funish%2Fcss.svg)](https://badge.fury.io/js/%40funish%2Fcss)
![NPM](https://img.shields.io/npm/l/@funish/css)
[![](https://data.jsdelivr.com/v1/package/npm/@funish/css/badge)](https://www.jsdelivr.com/package/npm/@funish/css)

### 一个简洁的前端CSS框架。

Funish CSS 是 [Thus.Fun](https://thus.fun) 团队开发的 `Funish` 项目的一部分，作为 Web 前端界面的开发构件之一，以 `CSS` 这样简单的形式存在，旨在利用纯 `CSS` 代码的方式实现 `Funish` 前端的设计理念。

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@funish/css@latest/dist/funish.css" />
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

## 参考

* [Material Components for the web](https://github.com/material-components/material-components-web) - under the MIT license
* [UIKit](https://github.com/uikit/uikit) - under the MIT license
* [Primer CSS](https://github.com/primer/css) - under the MIT license

## 许可

[MIT](LICENSE) &copy; [Funish.net](https://funish.net/)