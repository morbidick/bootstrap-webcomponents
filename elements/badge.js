import {LitElement, html} from '@polymer/lit-element';
import colors from '../styles/colors.js';

export default class BsBadge extends LitElement {
	static get properties() {
		return {
			theme: String,
			href: String,
		}
	}

	constructor() {
		super();
		this.theme = "secondary";
	}

	_render({href}) {
		return html`
			<style>
				:host {
					display: inline-block;
				}
				:host([hidden]) {
					display: hidden;
				}
				a, span {
					padding: .25em .4em;
					border-top-left-radius: var(--bs-border-top-left-radius, .25em);
					border-top-right-radius:	var(--bs-border-top-right-radius, .25em);
					border-bottom-left-radius: var(--bs-border-bottom-left-radius, .25em);
					border-bottom-right-radius: var(--bs-border-bottom-right-radius, .25em);

					font-size: .75em;
					font-weight: 700;
					line-height: 1;
					text-align: center;
					white-space: nowrap;
					vertical-align: baseline;
					text-decoration: none;
				}
				a:hover {
					filter: brightness(0.85);
				}
				${colors.reduce((style, {selector, color, contrast, focusring}) => {
					return style + `
						:host(${selector}) > * {
							background-color: ${color};
							color: ${contrast};
						}`
				}, "")}
				:host([theme~="pill"]) > * {
					padding-right: .6em;
					padding-left: .6em;
					border-radius: 10em;
				}
			</style>
			${href ? html`<a href$=${href}><slot></slot></a>`: html`<span><slot></slot></span>`}
		`;
	}

	set theme(value) {
		this.setAttribute('theme', value);
	}
	get theme() {
		return this.hasAttribute('theme');
	}

}

customElements.define('bs-badge', BsBadge);
