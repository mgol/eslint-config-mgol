import configPrettier from 'eslint-config-prettier';
import configMgol from './eslint-config-mgol';

const prettierOffRules = {};
const incorrectlyDisabledRules = [];

for (const [rule, value] of Object.entries(configPrettier.rules)) {
    // Only force-disable rules that definitely conflict with Prettier.
    // Rules that partially conflict have the value of 0 instead of "off".
    // If those rules need to be disabled as well, do that manually in
    // the main config file.
    if (value === 'off') {
        prettierOffRules[rule] = 'off';
        if (configMgol.rules[rule] === 'off' || configMgol.rules[rule] === 0) {
            incorrectlyDisabledRules.push(rule);
        }
    }
}

if (incorrectlyDisabledRules.length) {
    throw new Error(`
Incorrectly disabled rules:
${incorrectlyDisabledRules.join('\n')}
Only explicitly disable rules not disabled by the Prettier preset.
    `);
}

module.exports = {
    ...configMgol,

    rules: {
        ...configMgol.rules,
        ...prettierOffRules,
    },
};
