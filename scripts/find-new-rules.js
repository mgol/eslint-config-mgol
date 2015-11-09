#!/usr/bin/env node

'use strict';

// Prints rules recognized by ESLint that don't appear in the eslint-config-mzgol.js
// preset. It helps with upgrading the preset when new ESLint gets released.

const fs = require('fs');
const _ = require('lodash');

const currentRules = Object.keys(require('../eslint-config-mzgol').rules);
const allRules =
    fs.readdirSync('./node_modules/eslint/lib/rules')
        .map(filename => filename.replace(/\.js$/, ''));

const newRules = _.difference(allRules, currentRules);

if (newRules.length) {
    console.log(`New rules: ${ newRules.join(', ') }.`);
} else {
    console.log('No new rules!');
}