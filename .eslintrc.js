/* eslint-disable @typescript-eslint/no-unused-vars */

var OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': OFF,
    '@typescript-eslint/no-namespace': OFF,
    '@typescript-eslint/no-unused-vars': [
      WARN,
      { varsIgnorePattern: '[@]?QueryParam', argsIgnorePattern: '^_' },
    ],
  },
};
