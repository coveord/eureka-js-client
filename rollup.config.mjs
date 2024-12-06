import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    dir: 'lib',
    format: 'cjs'
  },
  plugins: [nodeResolve({preferBuiltins: true}), commonjs(), json()]
};
