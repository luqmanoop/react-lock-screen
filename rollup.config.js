import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import pkg from "./package.json";

const sourcemap = false;

export default {
	input: "index.js",
	plugins: [
    terser(),
		babel({
			exclude: "node_modules/**"
		}),
    resolve(),
    commonjs(),
		peerDepsExternal()
	],
	output: [
		{
			file: pkg.module,
			format: "es",
			sourcemap
		},
		{
			file: pkg.main,
			format: "cjs",
			sourcemap
		}
  ],
  external: [
    'prop-types',
    'react-idle-timer'
  ]
};
