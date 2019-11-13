<div align="center">
  <h1>ClassNames</h1>
</div>

> A simple javascript utility for conditionally joining classNames together

[![NPM version](https://img.shields.io/npm/v/@pansy/classnames.svg?style=flat)](https://npmjs.org/package/@pansy/classnames)
[![NPM downloads](http://img.shields.io/npm/dm/@pansy/classnames.svg?style=flat)](https://npmjs.org/package/@pansy/classnames)

## ✨ 特性

* 🚀 使用TypeScript编写，提供完整的类型定义。

## 📦 安装

```
// npm
npm install @pansy/classnames --save

// yarn
yarn add @pansy/classnames
```

## 🔨 使用

```
import classNames from '@pansy/classnames';

classNames('lotus-button', {
  [`is-active`]: true
})

// >> 'lotus-button is-active'
```
