# Bootstrap Web Components

[![CircleCI](https://circleci.com/gh/morbidick/bootstrap-webcomponents.svg?style=shield)](https://circleci.com/gh/morbidick/bootstrap-webcomponents)
[![npm version](https://img.shields.io/npm/v/@morbidick/bootstrap.svg)](https://www.npmjs.com/package/@morbidick/bootstrap)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@morbidick/bootstrap.svg)](https://bundlephobia.com/result?p=@morbidick/bootstrap)

> ## 🛠 Status: In Development
> Components get implemented as needed. PRs welcome!

Rewrite of bootstrap components as web components. See [the demo](demo/index.html) for all implemented features.

## Motivation

This isn't just a webcomponents wrapper around the bootstrap css, this aims to be a clean and simple rewrite easily understandable to everyone new to the webcomponents standards.

* No build chain / preprocessors
* allow easy theming via css custom properties
* provide a clear api to end users in the form of attributes
* Use web standards over big libraries where possible (even if that means loosing compatibility eg. dialog element)
* Provide support to projects to include polyfills and buildsteps for the above points

## Install

```bash
npm install @morbidick/bootstrap
```

## Usage

Import into your module script:

```javascript
import { BsButton, BsBadge } from "@morbidick/bootstrap/elements.js"
```

Alternatively, load a bundled version from CDN:

```html
<script src="https://unpkg.com/@morbidick/bootstrap@latest/dist/elements.bundled.min.js"></script>
```

Use it in your web page:

```html
<bs-button href="#link">Click Me</bs-button>
<bs-badge class="warning">warning</bs-badge>
```

## Development

View the [contributing notes](CONTRIBUTING.md) for instructions and further resources.
