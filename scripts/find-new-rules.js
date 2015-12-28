#!/usr/bin/env node

'use strict';

// Prints rules recognized by ESLint that don't appear in the eslint-config-mgol.js
// preset. It helps with upgrading the preset when new ESLint gets released.

const fs = require('fs');
const _ = require('lodash');

const currentRules = Object.keys(require('../eslint-config-mgol').rules);
const allRules =
    fs.readdirSync('./node_modules/eslint/lib/rules')
        .map(filename => filename.replace(/\.js$/, ''));

const newRules = _.difference(allRules, currentRules);

if (newRules.length) {
    console.log(`New rules to add to the config: ${ newRules.join(', ') }.`);
    process.exit(1);
}
