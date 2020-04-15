import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2';

import PackageJSON from './package.json';
const input = './src/index.ts';
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');


export default [
  // CommonJS
  {
    input,
    output: {
      file: PackageJSON.main,
      format: 'cjs'
    },
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(PackageJSON.main),
      format: 'cjs'
    },
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs(),
      uglify()
    ]
  }
];