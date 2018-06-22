// https://getbootstrap.com/docs/4.1/content/typography/
import {primary} from './colors.js'

export const fontFamilySansSerif = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
export const fontFamilyMonospace = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
export const fontStyle = `<style>
	:root {
		font-family: ${fontFamilySansSerif};
	}

	h1, h2, h3, h4, h5, h6 {
		margin-bottom: 0.5em;
		font-weight: 500;
		line-height: 1.2;
	}

	h1 { font-size: 2.5rem; }
	h2 { font-size: 2rem; }
	h3 { font-size: 1.75rem; }
	h4 { font-size: 1.5rem; }
	h5 { font-size: 1.25rem; }
	h6 { font-size: 1rem; }
</style>`;
export const linkStyle = `<style>
	a {
		color: ${primary.color};
		text-decoration: none;
	}
	a:hover, a:focus {
		text-decoration: underline;
	}
</style>`

export default fontStyle + linkStyle;
