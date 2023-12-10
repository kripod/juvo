const { babel } = require("@rollup/plugin-babel");
const typescript = require("@rollup/plugin-typescript");
const { defineConfig } = require("rollup");

const pkg = require("./package.json");

const rootDir = "src";
const outDir = "dist";

module.exports = defineConfig({
  input: {
    mod: `${rootDir}/mod.ts`,
    "tailwind-preset": `${rootDir}/tailwind-preset.ts`,
  },
  output: [
    {
      format: "es",
      dir: outDir,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ].map((packageName) => new RegExp(`^${packageName}($|/)`, "u")),
  plugins: [
    typescript({
      exclude: ["**/*.stories.*", "**/*.test.*"],
      filterRoot: rootDir,
      compilerOptions: {
        outDir,
      },
    }),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      babelHelpers: "runtime",
    }),
  ],
});
