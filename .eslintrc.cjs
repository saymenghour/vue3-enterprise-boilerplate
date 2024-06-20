/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vue/vue3-recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'quotes': ['error', 'single'],
    'semi': [
      'error',
      'always'
    ],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};
