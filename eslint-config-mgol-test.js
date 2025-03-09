import configPrettier from 'eslint-config-prettier';
import configMgol from './eslint-config-mgol.js';

const incorrectlyDisabledRules = [];

for (const [rule, value] of Object.entries(configPrettier.rules)) {
    // Only force-disable rules that definitely conflict with Prettier.
    // Rules that partially conflict have the value of 0 instead of "off".
    // If those rules need to be disabled as well, do that manually in
    // the main config file.
    if (value === 0) {
        delete configPrettier.rules[rule];
    } else if (
        configMgol[0].rules[rule] === 'off' ||
        configMgol[0].rules[rule] === 0
    ) {
        incorrectlyDisabledRules.push(rule);
    }
}

if (incorrectlyDisabledRules.length) {
    throw new Error(`
Incorrectly disabled rules:
${incorrectlyDisabledRules.join('\n')}
Only explicitly disable rules not disabled by the Prettier preset.
`);
}

export default [...configMgol, configPrettier];
