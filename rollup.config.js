// @ts-check
import { createRequire } from "node:module";
import typescript from "@rollup/plugin-typescript";

const require = createRequire(import.meta.url);

const packageJson = require("./package.json");

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/main.ts",
  output: [
    {
      file: "dist/main.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/main.mjs",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript({ tsconfig: "./tsconfig.build.json" })],
  external: [
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.peerDependencies),
    "react/jsx-runtime",
  ],
};
