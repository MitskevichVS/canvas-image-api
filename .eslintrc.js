module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "import/extensions": "off",
    "class-methods-use-this": ["error", { "exceptMethods": ['RGBToHex', 'setImageFromLocalStorage', 'colorPickerTool'] }],
    "no-bitwise": ["error", { "allow": ["<<", ">>"] }],
    "class-methods-use-this": "off",
    "new-cap": "off",
  },
};
