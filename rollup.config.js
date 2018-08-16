import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';
const outFolder = 'dist';

export default [
	{
		input: 'index.js',
		output: {
			file: `${outFolder}/bundled.js`,
			format: 'iife',
			name: 'BootstrapElements'
		},
		plugins: [resolve()]
	},
	{
		input: 'index.js',
		output: {
			file: `${outFolder}/bundled.min.js`,
			format: 'iife',
			name: 'BootstrapElements'
		},
		plugins: [resolve(), minify({ comments: false })]
	}
];
