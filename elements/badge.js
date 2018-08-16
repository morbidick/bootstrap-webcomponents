import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import colors from '../styles/colors.js';

export default class BsBadge extends LitElement {
	static get properties() {
		return {
			href: String,
		}
	}

	connectedCallback() {
		super.connectedCallback();
		if (!this.hasAttribute('class')) {
			this.setAttribute('class', 'secondary');
		}
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
					display: inline-block;
					padding: .25em .4em;
					border-top-left-radius: var(--bs-border-top-left-radius, .25em);
					border-top-right-radius: var(--bs-border-top-right-radius, .25em);
					border-bottom-left-radius: var(--bs-border-bottom-left-radius, .25em);
					border-bottom-right-radius: var(--bs-border-bottom-right-radius, .25em);

					transition: filter .15s ease-in-out;
					color: var(--bs-badge-color);
					background-color: var(--bs-badge-background-color);

					font-size: .75em;
					font-weight: 700;
					line-height: 1;
					text-align: center;
					white-space: nowrap;
					vertical-align: baseline;
					text-decoration: none;
				}
				a:hover, a:active, a:focus {
					text-decoration: none;
					background-color: var(--bs-badge-hover-background-color)
				}
				${colors.map(({selector, color, contrast, hoverbg}) => html`
					:host(${selector}) {
						--bs-badge-background-color: ${color};
						--bs-badge-color: ${contrast};
						--bs-badge-hover-background-color: ${hoverbg};
					}`
				)}
				:host(.pill) > * {
					padding-right: .6em;
					padding-left: .6em;
					border-radius: 10em;
				}
			</style>
			${href ? html`<a href$=${href}><slot></slot></a>`: html`<span><slot></slot></span>`}
		`;
	}
}

customElements.define('bs-badge', BsBadge);
