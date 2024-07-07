/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:vitest/recommended",
  ],
  plugins: ["@typescript-eslint"],
};
