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
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "semi": [
      "error",
      "always"
    ],
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
};
