module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es2020": true,
		"node": true
	},

	"extends": "eslint:recommended",

	"parserOptions": {
		"ecmaVersion": 11
	},

	"rules": {
		"brace-style": [
			"error",
			"1tbs"
		],

		"curly": 2,

		"indent": [
			"error",
			"tab"
		],

		"keyword-spacing": 2,

		"linebreak-style": [
			"error",
			"unix"
		],

		"no-else-return": [
			"error"
		],

		"no-multiple-empty-lines": [
			"error",

			{
				max: 1,
				maxBOF: 0,
				maxEOF: 1
			}
		],

		"no-multi-spaces": "error",

		"padding-line-between-statements": [
			"error",
			{ "blankLine": "always", "prev": "*", "next": "block-like" },
			{ "blankLine": "always", "prev": "block-like", "next": "*" }
		],

		"quotes": [
			"error",
			"double"
		],

		"semi": [
			"error",
			"always"
		]
	}
};
