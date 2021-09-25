module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
        'cypress/globals': true,
    },
    extends: ['airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['jest', 'react', 'prettier', 'cypress'],
    rules: {
        'no-unused-vars': ['warn'],
        'linebreak-style': 0,
        'no-console': 0,
        'no-tabs': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
