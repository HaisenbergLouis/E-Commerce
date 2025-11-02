export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要 import React
    'react/prop-types': 'off', // TypeScript 已检查类型
    '@typescript-eslint/no-unused-vars': ['warn'],
    'prettier/prettier': ['warn'],
    'react/jsx-no-target-blank': 'warn', // target="_blank" 的安全提示
  },
  settings: {
    react: {
      version: 'detect', // 自动检测 React 版本
    },
  },
};
