# eslint-config-mzgol

[![travis build](https://img.shields.io/travis/mzgol/eslint-config-mzgol.svg?style=flat-square)](https://travis-ci.org/mzgol/eslint-config-mzgol)
[![version](https://img.shields.io/npm/v/eslint-config-mzgol.svg?style=flat-square)](http://npm.im/eslint-config-mzgol)
[![downloads](https://img.shields.io/npm/dm/eslint-config-mzgol.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-config-mzgol)
[![MIT License](https://img.shields.io/npm/l/eslint-config-mzgol.svg?style=flat-square)](http://opensource.org/licenses/MIT)

ESLint rules for my personal projects as well as some at [Laboratorium EE](http://laboratorium.ee).

## Usage

Install the rules by running:

```
npm install --save-dev eslint eslint-config-mzgol 
```

Then add the extends to your `.eslintrc`:

```javascript
{
    "extends": "mzgol",
    "rules": {
        // your overrides
    }
}
```

## LICENSE

MIT (see the [LICENSE](LICENSE) file).
