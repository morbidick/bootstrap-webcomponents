import {LitElement, html} from '@polymer/lit-element';
import colors from '../styles/colors.js';

export default class BsButton extends LitElement {
	static get properties() {
		return {
			active: Boolean,
			disabled: Boolean,
			href: String,
			theme: String,
			toggle: Boolean,
		}
	}

	constructor() {
		super();
		this.active = false;
		this.disabled = false;
		this.theme = "secondary";
	}

	_render({active, disabled, href, toggle}) {
		return html`
			<style>
				:host(:not([hidden])) {
					display: inline-block;
				}
				:host > *:not([disabled]) {
					cursor: pointer;
				}
				:host > *:focus {
					outline: none;
				}
				a, button {
					box-sizing: border-box;
					display: inline-block;
					padding: .375em .75em;
					border: 1px solid transparent;
					border-top-left-radius: var(--bs-border-top-left-radius, .25em);
					border-top-right-radius: var(--bs-border-top-right-radius, .25em);
					border-bottom-left-radius: var(--bs-border-bottom-left-radius, .25em);
					border-bottom-right-radius: var(--bs-border-bottom-right-radius, .25em);

					font-size: 1rem;
					line-height: 1.5;
					text-align: center;
					user-select: none;
					vertical-align: middle;
					white-space: nowrap;
					text-decoration: none;

					background-color: transparent;
					transition:
						color .15s ease-in-out,
						background-color .15s ease-in-out,
						border-color .15s ease-in-out,
						box-shadow .15s ease-in-out,
						filter .15s ease-in-out;
				}
				:host > *:hover:not([disabled]) {
					filter: brightness(0.85);
				}
				:host > [active]:not([disabled]) {
					filter: brightness(0.75);
				}
				:host > [disabled] {
					opacity: 0.65;
				}
				:host([theme~="small"]) > * {
					font-size: .875rem;
				}
				:host([theme~="large"]) > * {
					font-size: 1.25rem;
				}
				/* color variants */
				${colors.reduce((style, {selector, color, contrast, focusring}) => {
					return style + `
						:host(${selector}:not([theme~="outline"])) > * {
							background-color: ${color};
							color: ${contrast};
						}
						:host(${selector}) > *:focus:not([disabled]) {
							box-shadow: 0 0 0 .2rem ${focusring};
						}
						:host(${selector}[theme~="outline"]) > * {
							color: ${color};
							border-color: ${color};
						}
						:host(${selector}[theme~="outline"]) > *:hover:not([disabled]), :host(${selector}[theme~="outline"]) > [active] {
							background-color: ${color};
							color: ${contrast};
						}
						:host(${selector}[theme~="outline"]) > *:hover:not([active]) {
							filter: none;
						}`
				}, "")}
			</style>
			${href ? html`<a href$=${href} disabled?=${disabled} active?=${active}><slot></slot></a>`:
			  !toggle ? html`<button disabled?=${disabled} active?=${active}><slot></slot></button>`:
			  html`<button
				disabled?=${disabled}
				active?=${active}
				aria-pressed$=${active}
				on-click=${(event) => {
					event.preventDefault();
					this._toggle();
				}}
				on-keydown=${(event) => {
					if (event.altKey)
						return;

					switch (event.code) {
						case "Enter":
						case "Space":
							event.preventDefault();
							this._toggle();
							break;
						default:
							return;
				}}}><slot></slot></button>
			`}
		`;
	}

	_toggle() {
		if (this.disabled)
			return;
		this.active = !this.active;
	}

	_propertiesChanged(props, changedProps, oldProps) {
		super._propertiesChanged(props, changedProps, oldProps);

		if('active' in changedProps) {
			if (oldProps['active'] !== undefined) {
				this.dispatchEvent(new CustomEvent('active-changed', {
					detail: {
						value: changedProps['active'],
					},
					bubbles: false,
					composed: true,
				}));
			}
		}
	};

	set theme(value) {
		this.setAttribute('theme', value);
	}
	get theme() {
		return this.getAttribute('theme');
	}
}

customElements.define('bs-button', BsButton);
