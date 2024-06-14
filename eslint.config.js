import globals from 'globals';
import mgolConfig from './eslint-config-mgol.js';

export default [
    ...mgolConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
