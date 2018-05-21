module.exports = {
  plugins: [
    "stylelint-order",
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    'color-hex-case': 'lower', // https://github.com/stylelint/stylelint/blob/master/lib/rules/color-hex-case/README.md
    'color-hex-length': 'short', // https://github.com/stylelint/stylelint/blob/master/lib/rules/color-hex-length/README.md
    'no-duplicate-selectors': null,
  },
}
