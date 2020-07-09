module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
        ],
      },
    },
  },
  rules: {
    'linebreak-style': ['off', 'windows'],
    'no-console': 'off',
    'import/extensions': ['warn', 'never'],
  },
};
