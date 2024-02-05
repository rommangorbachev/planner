module.exports = {
  extends: ["eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "tslint:latest",
    "tslint-config-prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
