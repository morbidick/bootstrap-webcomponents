import {LitElement, html} from '@polymer/lit-element';
import {buttonStyle} from './button.js';

export default class BsButtonLink extends LitElement {
	static get properties() {
		return {
			href: String,
			theme: String,
		}
	}

	constructor() {
		super();
		this.theme = "secondary";
	}

	_render({href, theme}) {
		return html`
			<style>
				a, a:hover, a:focus {
					text-decoration: none;
				}
			</style>
			${buttonStyle((selector = '') => `a${selector}`)}
			<a href$="${href}" theme$="${theme}">
				<slot></slot>
			</a>
		`;
	}
}

customElements.define('bs-button-link', BsButtonLink);
