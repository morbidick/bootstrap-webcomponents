import { LitElement, html, css } from 'lit-element';
import colors from '../styles/colors.js';

export default class BsAlert extends LitElement {
	static get properties() {
		return {
			dismissable: {
				type: Boolean,
				reflect: true,
			},
			theme: {
				type: String,
				reflect: true,
			},
		}
	}

	constructor() {
		super();
		this.theme = 'secondary';
	}

	connectedCallback() {
		super.connectedCallback();
		if (!this.hasAttribute('role')) {
			this.setAttribute('role', 'alert');
		}
	}

	static get styles() {
		return [
			css`
				:host {
					display: block;
				}
				:host([hidden]) {
					display: hidden;
				}
				:host {
					position: relative;
					padding: .75rem 1.25rem;
					margin-bottom: 1rem;
					border: 1px solid transparent;
					border-radius: .25rem;

					background-color: var(--bs-alert-background-color);
					color: var(--bs-alert-color);
					border-color: var(--bs-alert-border-color);
				}
				:host([dismissable]) {
					padding-right: 4em;
				}
				:host(:not([dismissable])) button {
					display: none;
				}
				button {
					position: absolute;
					top: 0;
					right: 0;
					padding: .75rem 1.25rem;
					border: 0;

					cursor: pointer;
					color: inherit;
					background-color: transparent;
					font-size: 1.5rem;
					font-weight: 700;
					line-height: 1;
					text-shadow: 0 1px 0 #fff;
					opacity: .5;
				}
				button:hover{
					color: #000;
					text-decoration: none;
					opacity: .75;
				}
				::slotted(a) {
					font-weight: 700;
				}
				/* important seems to be back to override parent scope */
				::slotted(:first-child) {
					margin-top: 0 !important;
				}
				::slotted(:last-child) {
					margin-bottom: 0 !important;
				}
			`,
			...colors.map(({selector, alertcolor, alertbg, alertborder, alertlinkcolor}) => css`
				:host(${selector}) {
					--bs-alert-background-color: ${alertbg};
					--bs-alert-color: ${alertcolor};
					--bs-alert-border-color: ${alertborder};
					--bs-link-color: ${alertlinkcolor};
				}
			`)
		]
	}

	render() {
		return html`
			<slot></slot>
			<button
				type="button"
				aria-label="Close"
				@click=${this.remove}>
				<span aria-hidden="true">&times;</span>
			</button>
		`;
	}

	remove() {
		super.remove();
		this.dispatchEvent(new CustomEvent('dismissed', {
			bubbles: false,
			composed: true,
		}));
	}
}

customElements.define('bs-alert', BsAlert);
