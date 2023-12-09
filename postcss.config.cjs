const pkg = require("./package.json");

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
].map((packageName) => new RegExp(`^${packageName}($|/)`, "u"));

module.exports = {
  plugins: {
    "postcss-import": {
      filter: (/** @type {string} */ url) =>
        !external.some((name) => name.test(url)),
    },
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    "postcss-preset-env": {
      features: {
        "nesting-rules": false,
      },
    },
  },
};
