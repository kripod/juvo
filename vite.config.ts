import react from "@vitejs/plugin-react-swc";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import pkg from "./package.json" with { type: "json" };

const rootDir = "src";

export default defineConfig({
  plugins: [
    react(),
    process.env.NO_DTS !== "true" && dts({ include: rootDir }),
  ],
  build: {
    lib: {
      entry: [`${rootDir}/mod.ts`, `${rootDir}/tailwind-preset.ts`],
      formats: ["es"],
    },
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ].map((packageName) => new RegExp(`^${packageName}($|/)`, "u")),
      plugins: [preserveDirectives()],
      output: {
        preserveModules: true,
      },
    },
    emptyOutDir: false,
  },
});
