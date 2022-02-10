# eslint-config-mgol

[![GitHub build](https://img.shields.io/github/workflow/status/mgol/eslint-config-mgol/CI?style=flat-square)](https://github.com/mgol/eslint-config-mgol/actions)
[![version](https://img.shields.io/npm/v/eslint-config-mgol.svg?style=flat-square)](http://npm.im/eslint-config-mgol)
[![downloads](https://img.shields.io/npm/dm/eslint-config-mgol.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-config-mgol)
[![MIT License](https://img.shields.io/npm/l/eslint-config-mgol.svg?style=flat-square)](http://opensource.org/licenses/MIT)

ESLint rules for my personal projects as well as some at [Laboratorium EE](http://laboratorium.ee).

## Usage

Install the rules by running:

```
npm install --save-dev eslint eslint-config-mgol
```

Then add the extends to your `.eslintrc.json`:

```javascript
{
    "extends": "mgol",
    "rules": {
        // your overrides
    }
}
```

## LICENSE

MIT (see the [LICENSE](LICENSE) file).
