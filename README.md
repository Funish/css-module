# Funish CSS

[![npm version](https://badge.fury.io/js/%40funish%2Fcss.svg)](https://badge.fury.io/js/%40funish%2Fcss)
![NPM](https://img.shields.io/npm/l/@funish/css)
[![](https://data.jsdelivr.com/v1/package/npm/@funish/css/badge)](https://www.jsdelivr.com/package/npm/@funish/css)

### A concise front-end CSS framework.

Funish CSS is [Thus.Fun](https://thus.fun) As part of the `Funish` project developed by the team, one of the development components of the web front-end interface was developed to `CSS` exists in a simple form, designed to implement `Funish` in a way that utilizes pure `CSS` code.  Front-end design concepts.

## Components

### Layouts

* [Flex](/docs/flex)
* [Grid](/docs/grid)
* [Position](/docs/position)
* [Visibility](/docs/visibility)

### Box model

* [Margin](/docs/margin)
* [Padding](/docs/padding)
* [Width](/docs/width)
* [Height](/docs/height)

### Text

* [Text](/docs/text)
* [Markdown](/docs/markdown)

### Controls

* [Box](/docs/box)
* [Button](/docs/button)
* [Dropdown](/docs/dropdown)
* [Form](/docs/form)
* [Menu](/docs/menu)
* [Navbar](/docs/navbar)
* [Utility](/docs/utility)

## Usage

### CDN

Recommended for faster global response times from the Jsdelivr CDN.

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

You can import the `@funish/css` style files from the `node_modules` directory.

```scss
@import "@funish/src/funish.scss";
```

## Build

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

For a detailed description of how it works, see [nuxt.js docs](https://nuxtjs.org) and [node-sass](https://github.com/sass/node-sass).

## Reference

* [Material Components for the web](https://github.com/material-components/material-components-web) - under the MIT license
* [UIKit](https://github.com/uikit/uikit) - under the MIT license
* [Primer CSS](https://github.com/primer/css) - under the MIT license

## License

[MIT](LICENSE) &copy; [Funish.net](https://funish.net/)