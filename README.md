<div align="center">
  <h1>ClassNames</h1>
</div>

> A simple javascript utility for conditionally joining classNames together

[![NPM version](https://img.shields.io/npm/v/@lotus-ui/classnames.svg?style=flat)](https://npmjs.org/package/@lotus-ui/classnames)
[![NPM downloads](http://img.shields.io/npm/dm/@lotus-ui/classnames.svg?style=flat)](https://npmjs.org/package/@lotus-ui/classnames)

## ✨ 特性

* 🚀 使用TypeScript编写，提供完整的类型定义。

## 📦 安装

```
// npm
npm install @lotus-ui/classnames --save

// yarn
yarn add @lotus-ui/classnames
```

## 🔨 使用

```
import classNames from '@lotus-ui/classnames';

classNames('lotus-button', {
  [`is-active`]: true
})

// >> 'lotus-button is-active'
```
