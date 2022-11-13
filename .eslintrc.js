module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unnecessary-type-constraint': 0,
    '@typescript-eslint/no-empty-function': 0,
  },
};
