// https://getbootstrap.com/docs/4.1/content/typography/
import {css, unsafeCSS, html} from 'lit-element';
import {primary} from './colors.js';

export const fontFamilySansSerif = unsafeCSS`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
export const fontFamilyMonospace = unsafeCSS`SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
export const fontStyle = css`
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
	}`

export const linkStyle = css`
	a {
		color: var(--bs-link-color, ${primary.color});
		text-decoration: none;
	}
	a:hover, a:focus {
		text-decoration: underline;
	}`

export const hrStyle = css`
	hr {
		margin-top: 1rem;
		margin-bottom: 1rem;
		border: 0;
		border-top: 1px solid currentColor;
		opacity: 0.1;
	}`

export default html`
<style>
	${fontStyle.cssText}
	${linkStyle.cssText}
	${hrStyle.cssText}
</style>
`;
