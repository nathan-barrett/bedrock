module.exports = {
    env: {
        'jasmine': true
    },
    extends: [
        '@mozilla-protocol/eslint-config',
        'plugin:json/recommended'
    ],
    /**
     * Provide a set of overrides for `webpack-config.js` in the root directory.
     * Ideally we want to extend @mozilla-protocol/eslint-config/index-node,
     * however ESLint does not currently allow extends inside glob overrides.
     * (see https://github.com/eslint/eslint/issues/8813)
     * */
    overrides: [
        {
            files: [
                'webpack.config.js',
                'webpack.static.config.js',
                'tests/unit/karma.conf.js',
                'media/js/base/globals.js'
            ],
            env: {
                'commonjs': true,
                'node': true,
                'es6': true
            },
            parserOptions: {
                ecmaVersion: 8
            },
            rules: {
                'strict': ['error', 'global'],
            }
        }
    ],
    globals: {
        'Mozilla': 'writable',
        'site': 'writable'
    }
};
