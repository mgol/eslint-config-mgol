#!/usr/bin/env node

'use strict';

// TODO remove this script & just extend the exported rules file when
// https://github.com/eslint/eslint/issues/3102 gets fixed.

const fs = require('fs');

const eslintrc = require('../eslint-config-mzgol');
eslintrc.root = true;
eslintrc.env.node = true;

fs.writeFile(`${ __dirname }/../.eslintrc`,
    JSON.stringify(eslintrc, null, 4), {mode: 0o644},
    err => {
        if (err) {
            process.exit(1);
        }
    }
);
