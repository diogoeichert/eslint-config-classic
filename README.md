[![code style](https://img.shields.io/badge/code_style-classic-blue.svg)](http://diogoeichert.github.io/eslint-config-classic)
[![downloads](https://img.shields.io/npm/dt/eslint-config-classic.svg)](https://www.npmjs.com/package/eslint-config-classic)
[![license](https://img.shields.io/github/license/diogoeichert/eslint-config-classic.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/eslint-config-classic.svg)](https://www.npmjs.com/package/eslint-config-classic)

![classic](./classic.jpg)

# Classic (eslint-config-classic)
Classic-style [ESlint](https://eslint.org) rules, for writing code meant to be *read*.

## Run
```shell
npx eslint-config-classic
```

## Install
```shell
npm install --save-dev eslint-config-classic
```

## Usage
### Standalone
Add a `lint` script in `package.json`:
```json
"scripts": {
	"lint": "eslint-config-classic"
}
```
### Existing Configuration
Extend `classic` from your existing `.eslintrc.js` file:
```js
module.exports = {
	"extends": "classic"
};
```
