
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];
export default {
    input: 'src/index.ts', 
    output: [
      {
        file: 'dist/esm/index.js',
        format: 'esm'
      },
      // //普通工具方法打包
      // {
      //   file: 'dist2/esm/index.js',
      //   format: 'esm'
      // },
      // {
      //   file: 'dist2/cjs/index.js', 
      //   format: 'cjs'
      // },
      // {
      //   file: 'dist2/index.js',
      //   format: 'umd',
      //   name: 'index' // umd 规范
      // },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      ts({
        tsconfig:'tsconfig.json',
        extensions:['.ts', '.tsx']
      }),
      resolve({extensions}),
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true, 
      }),
      commonjs(
        {'namedExports': {
          'node_modules/react/index.js': ['Component'],
          'node_modules/react/jsx-runtime.js': ['jsxs','jsx'],
          'node_modules/react-is/index.js': ['isFragment','isMemo'],
        }}
      ),
      // terser()
    ]
  };
