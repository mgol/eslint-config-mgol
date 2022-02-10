'use strict';

// See https://prettier.io/docs/en/options.html
module.exports = {
    singleQuote: true,

    trailingComma: 'all',

    tabWidth: 4,

    overrides: [
        {
            files: 'package.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
