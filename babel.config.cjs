const pkg = require("./package.json");

/** @type {import("@babel/core").TransformOptions} */
module.exports = {
  presets: [
    ["@babel/preset-env", { bugfixes: true }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["babel-plugin-optimize-clsx", { functionNames: ["clsx"] }],
    [
      "@babel/plugin-transform-runtime",
      { version: pkg.dependencies["@babel/runtime"] },
    ],
  ],
};
