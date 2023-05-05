module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'airbnb',
  rules: {
    'func-names': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'max-len': 'off',
  },
};
