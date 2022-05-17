import typescript from "rollup-plugin-typescript2"
import babel from "@rollup/plugin-babel"
import postcss from "rollup-plugin-postcss"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import svgr from "@svgr/rollup"
import url from "rollup-plugin-url"
// import del from "rollup-plugin-delete";
// import externals from 'rollup-plugin-node-externals'
// import autoExternal from 'rollup-plugin-auto-external';
// import auto from '@rollup/plugin-auto-install';
import json from "@rollup/plugin-json"
import { terser } from "rollup-plugin-terser"
// import includePaths from 'rollup-plugin-includepaths';
// import external from 'rollup-plugin-peer-deps-external';
const extensions = [".js", ".jsx", ".ts", ".tsx"]

// eslint-disable-next-line no-undef
const pkg = require("./package.json")

// const isProd = process.env.NODE_ENV === 'production'

// const globals = {
//   'react': 'React',
//   'react-dom': 'ReactDOM',
// }

export default {
  input: "./src/index.ts",
  output: [
    {
      dir: "build",
      format: "es",
      name: "workingConfig",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src"
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true
    }
  ],
  // output: [
  //   {
  //     file: './dist/index.js',
  //     format: 'umd',
  //     name: 'workingConfig',
  //     globals,
  //     sourcemap: true,
  //   },
  //   { file: './dist/index.module.js', format: 'es', globals, sourcemap: true },
  // ],
  external: Object.keys(pkg.peerDependencies),
  // external: [...Object.keys(pkg.devDependencies), ...Object.keys(pkg.dependencies) ],
  plugins: [
    peerDepsExternal(),
    svgr(),
    typescript(), // { useTsconfigDeclarationDir: true } rollupCommonJSResolveHack: true, clean: true
    babel({
      babelHelpers: "runtime", // 'bundled', // 'runtime',
      extensions,
      include: ["src/**/*"],
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"],
      plugins: ["@babel/plugin-transform-runtime"]
    }),
    commonjs(),
    // {sourceMap: false, include: 'node_modules/**', exclude: ['react', 'react-dom', 'styled-components']}),
    // auto
    // autoExternal(),
    // external([]),
    resolve({
      extensions,
      ignoreGlobal: false,
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      skip: ["react", "react-dom", "styled-components"],
      include: ["node_modules/**"]
    }),
    url(),
    json(),
    postcss({
      modules: true,
      extract: true,
      minimize: true
    }),

    terser()
    // del({ targets: "dist/*" }),
    // externals({ deps: true })
    // includePaths({ paths: ['./src'] })
  ]
}
