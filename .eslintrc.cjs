/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
  ],
  plugins: ["@typescript-eslint"],
};
