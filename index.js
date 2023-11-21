"use strict";

/**
 * Statements that can become multi-line blocks of code.
 * Source: https://eslint.org/docs/latest/rules/padding-line-between-statements
 */
const MULTILINE_STATEMENT_TYPES = [
	"block-like",
	"multiline-const",
	"multiline-expression",
	"multiline-let",
	"multiline-var",
];

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
		node: true,
	},
	extends: ["eslint:recommended"],
	overrides: [
		{
			files: ["*.cjs", "*.js", "*.mjs"],
		},
	],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
	},
	rules: {
		"brace-style": ["error", "1tbs"],
		curly: 2,
		indent: ["error", "tab"],
		"keyword-spacing": 2,
		"linebreak-style": ["error", "unix"],
		"no-else-return": ["error"],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 1,
			},
		],
		"no-multi-spaces": "error",
		"no-trailing-spaces": "error",
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: "*",
				next: MULTILINE_STATEMENT_TYPES,
			},
			{
				blankLine: "always",
				prev: MULTILINE_STATEMENT_TYPES,
				next: "*",
			},
		],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
