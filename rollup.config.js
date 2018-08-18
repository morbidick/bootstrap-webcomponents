import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
const outFolder = 'dist';

export default [
	{
		input: 'elements.js',
		output: {
			file: `${outFolder}/elements.bundled.js`,
			format: 'iife',
			name: 'BootstrapElements'
		},
		plugins: [resolve()]
	},
	{
		input: 'elements.js',
		output: {
			file: `${outFolder}/elements.bundled.min.js`,
			format: 'iife',
			name: 'BootstrapElements'
		},
		plugins: [resolve(), minify({ comments: false }), filesize({showBrotliSize: true})]
	}
];
