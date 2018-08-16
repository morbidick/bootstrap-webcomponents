// https://getbootstrap.com/docs/4.1/content/typography/
import {html} from 'lit-html/lit-html.js';
import {primary} from './colors.js';

export const fontFamilySansSerif = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
export const fontFamilyMonospace = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
export const fontStyle = html`<style>
	:root {
		font-family: var(--bs-body-font-family, ${fontFamilySansSerif});
		line-height: 1.5;
		color: var(--bs-body-font-color, #212529);
	}

	h1, h2, h3, h4, h5, h6 {
		margin-top: 1.5em;
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

	p {
		margin-top: 0;
		margin-bottom: 1rem;
	}
</style>`;
export const linkStyle = html`<style>
	a {
		color: var(--bs-link-color, ${primary.color});
		text-decoration: none;
	}
	a:hover, a:focus {
		text-decoration: underline;
	}
</style>`
export const hrStyle = html`<style>
	hr {
		margin-top: 1rem;
		margin-bottom: 1rem;
		border: 0;
		border-top: 1px solid currentColor;
		opacity: 0.1;
	}
</style>`

export default html`
	${fontStyle}
	${linkStyle}
	${hrStyle}
`;
