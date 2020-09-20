module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '16.9'
    }
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-use-before-define': [0],
    'space-before-function-paren': 'off',
    semi: ['error', 'always']
  }
};
