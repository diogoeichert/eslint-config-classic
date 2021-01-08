[![code style](https://img.shields.io/badge/code_style-classic-blue.svg)](http://diogoeichert.github.io/eslint-config-classic)
[![downloads](https://img.shields.io/npm/dt/eslint-config-classic.svg)](https://www.npmjs.com/package/eslint-config-classic)
[![license](https://img.shields.io/github/license/diogoeichert/eslint-config-classic.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/eslint-config-classic.svg)](https://www.npmjs.com/package/eslint-config-classic)

# eslint-config-classic
[ESlint](https://eslint.org) rules for classic-style JavaScript.

## Install
```
npm install --save-dev eslint eslint-config-classic
```

## Usage
Add a `.eslintrc.js` file to your project with these lines:
```
module.exports = {
	"extends": "classic"
};
```

### Optional
Enhance the test script in `package.json` to precede it with `eslint`. Adding the `--fix` parameter will automatically fix files:
```
"scripts": {
	"test": "eslint --fix . && node ./test.js"
},
```
